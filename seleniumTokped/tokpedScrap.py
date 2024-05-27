import time
import json
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By

url = 'https://www.tokopedia.com/search?q=processor+intel+i3+13100f&source=universe&st=product&srp_component_id=02.07.02.01'
driver = webdriver.Chrome()
driver.get(url)

data = []

for i in range(5):
    WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.CSS_SELECTOR, "#zeus-root")))
    time.sleep(2)

    driver.execute_script("window.scrollBy(170, 0)")
    time.sleep(1)

    for j in range(20):
        driver.execute_script("window.scrollBy(0, 250)")
        time.sleep(1)

    page = BeautifulSoup(driver.page_source, 'html.parser')

    container = page.find('div', class_= 'css-rjanld')
    for productContainer in container.find_all('div', class_= 'css-jza1fo'):
        for productInfo in productContainer.find_all('a', class_= 'pcv3__info-content css-gwkf0u'):
            name = productInfo.find('div', class_= 'prd_link-product-name').get_text() if productInfo.find('div', class_= 'prd_link-product-name') else 'N/A'
            price = productInfo.find('div', class_= 'prd_link-product-price').get_text() if productInfo.find('div', class_= 'prd_link-product-price') else 'N/A'

            ratingSold = productInfo.find('div', class_= 'css-yaxhi2')
            rating = ratingSold.find('span', class_= 'prd_rating-average-text').get_text() if ratingSold and ratingSold.find('span', class_= 'prd_rating-average-text') else 'N/A'
            sold = ratingSold.find('span', class_= 'prd_label-integrity').get_text() if ratingSold and ratingSold.find('span', class_= 'prd_label-integrity') else 'N/A'
            
            storeInfo = productInfo.find('div', class_= 'css-1rn0irl')
            storeLoc = storeInfo.find('span', class_= 'prd_link-shop-loc').get_text() if storeInfo and storeInfo.find('span', class_= 'prd_link-shop-loc') else 'N/A'
            storeName = storeInfo.find('span', class_= 'prd_link-shop-name').get_text() if storeInfo and storeInfo.find('span', class_= 'prd_link-shop-name') else 'N/A'

            data.append(
                {
                'name': name, 
                'price': price, 
                'rating': rating, 
                'sold': sold, 
                'storeName': storeName, 
                'storeLoc': storeLoc
                } 
            )

    driver.find_element(By.CSS_SELECTOR, 'button.css-16uzo3v-unf-pagination-item[aria-label="Laman berikutnya"]').click()

df = pd.DataFrame(data)
print(df)

with open('outputScrap.json', 'w', encoding='utf-8') as json_file:
    json.dump(data, json_file, indent=1, ensure_ascii=False)

driver.quit()