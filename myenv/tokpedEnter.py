import os
import time
import json
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Setup the driver
options = webdriver.ChromeOptions()
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
driver = webdriver.Chrome(options=options)

base_url = 'https://www.tokopedia.com/enterkomputer/etalase/'

categories = {
    'processor-amd': 'Prosesor AMD',
    'processor-intel': 'Prosesor Intel',
    'vga-nvidia-geforce': 'VGA GeForce',
    'vga-amd-radeon': 'VGA Radeon',
    'motherboard-intel': 'Motherboard Intel',
    'motherboard-amd': 'Motherboard AMD',
    'memory-ram-pc': 'RAM',
    'ssd': 'SSD',
    'harddisk-internal': 'HDD'

    # 'speaker': 'Speaker'
}

data = {category: [] for category in categories.values()}

# Create a directory to save images
image_directory = 'img/enter/'
if not os.path.exists(image_directory):
    os.makedirs(image_directory)

def download_image(image_url, file_path):
    response = requests.get(image_url, stream=True)
    if response.status_code == 200:
        with open(file_path, 'wb') as file:
            for chunk in response.iter_content(1024):
                file.write(chunk)

def scrape_category(category_url, category_name):
    driver.get(category_url)
    currentPage = 1
    product_count = 1

    while True:
        try:
            WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "#zeus-root")))
            time.sleep(2)

            driver.execute_script("window.scrollBy(190, 0)")
            time.sleep(1)

            for j in range(17):
                driver.execute_script("window.scrollBy(0, 250)")
                time.sleep(1)

            page = BeautifulSoup(driver.page_source, 'html.parser')

            container = page.find('div', class_='css-tjjb18')
            if not container:
                break

            for productContainer in container.find_all('div', class_='css-1sn1xa2'):
                for productInfo in productContainer.find_all('a', class_='pcv3__info-content css-gwkf0u'):
                    name = productInfo.find('div', class_='prd_link-product-name').get_text() if productInfo.find('div', class_='prd_link-product-name') else 'N/A'
                    price = productInfo.find('div', class_='prd_link-product-price').get_text() if productInfo.find('div', 'prd_link-product-price') else 'N/A'

                    ratingSold = productInfo.find('div', 'css-yaxhi2')
                    rating = ratingSold.find('span', 'prd_rating-average-text').get_text() if ratingSold and ratingSold.find('span', 'prd_rating-average-text') else 'N/A'
                    sold = ratingSold.find('span', 'prd_label-integrity').get_text() if ratingSold and ratingSold.find('span', 'prd_label-integrity') else 'N/A'

                    productLink = productInfo['href']
                    if productLink:
                        try:
                            driver.get(productLink)
                            WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "img[data-testid='PDPMainImage']")))
                            time.sleep(2)

                            product_page = BeautifulSoup(driver.page_source, 'html.parser')
                            image_element = product_page.find('img', {'data-testid': 'PDPMainImage'})
                            image_url = image_element['src'] if image_element else None

                            stock_element = product_page.find('p', {'data-testid': 'stock-label'})
                            stock = stock_element.get_text().strip().replace('Stok Total: ', '') if stock_element else 'N/A'

                            if image_url:
                                product_id = f"{category_name.lower()}_{product_count}"
                                img_filename = f"{product_id}.jpg"
                                img_filepath = os.path.join(image_directory, img_filename)
                                download_image(image_url, img_filepath)

                                # Truncate the image URL to end at .jpg
                                truncated_image_url = image_url.split('.jpg')[0] + '.jpg'

                                data[category_name].append(
                                    {
                                        'name': name,
                                        'price': price,
                                        'rating': rating,
                                        'sold': sold,
                                        'stock': stock,
                                        'tautan': productLink,
                                        'id': product_id,
                                        'images': [img_filename],
                                        'tautan_image': truncated_image_url
                                    }
                                )

                                product_count += 1

                        except Exception as e:
                            print(f"Error processing product {name}: {e}")

            try:
                next_button = driver.find_element(By.CSS_SELECTOR, "a[data-testid='btnShopProductPageNext']")
                next_button.click()
                currentPage += 1
            except:
                break

        except Exception as e:
            print(f"Error occurred: {e}")
            refresh_count = 0
            while refresh_count < 3:
                try:
                    driver.refresh()
                    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "#zeus-root")))
                    break
                except:
                    refresh_count += 1
                    time.sleep(5)
            if refresh_count >= 3:
                break

for category, name in categories.items():
    scrape_category(base_url + category, name)

# Save to a single JSON file with categorized data
with open('data/EnterShop.json', 'w', encoding='utf-8') as json_file: 
    json.dump(data, json_file, indent=1, ensure_ascii=False)

driver.quit()
print("\033[93mScraping completed!\033[0m")