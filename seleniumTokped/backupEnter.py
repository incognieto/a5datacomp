import time
import json
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains

url = 'https://www.tokopedia.com/enterkomputer/etalase/processor-intel'
driver = webdriver.Chrome()
driver.get(url)

data = []
currentPage = 1

while True:
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "#zeus-root")))
    time.sleep(2)

    driver.execute_script("window.scrollBy(190, 0)")
    time.sleep(1)

    for j in range(17):
        driver.execute_script("window.scrollBy(0, 250)")
        time.sleep(1)

    page = BeautifulSoup(driver.page_source, 'html.parser')

    container = page.find('div', class_='css-tjjb18')
    for productContainer in container.find_all('div', class_='css-1sn1xa2'):
        for productInfo in productContainer.find_all('a', class_='pcv3__info-content css-gwkf0u'):
            name = productInfo.find('div', class_='prd_link-product-name').get_text() if productInfo.find('div', class_='prd_link-product-name') else 'N/A'
            price = productInfo.find('div', class_='prd_link-product-price').get_text() if productInfo.find('div', class_='prd_link-product-price') else 'N/A'

            ratingSold = productInfo.find('div', class_='css-yaxhi2')
            rating = ratingSold.find('span', class_='prd_rating-average-text').get_text() if ratingSold and ratingSold.find('span', class_='prd_rating-average-text') else 'N/A'
            sold = ratingSold.find('span', class_='prd_label-integrity').get_text() if ratingSold and ratingSold.find('span', class_='prd_label-integrity') else 'N/A'

            data.append(
                {
                    'name': name,
                    'price': price,
                    'rating': rating,
                    'sold': sold,
                }
            )

    if currentPage == 3:
        break

    # Wait for the "Next Page" button to be clickable
    next_button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "a[data-testid='btnShopProductPageNext']")))

    # Scroll the button into view
    actions = ActionChains(driver)
    actions.move_to_element(next_button).perform()

    # Click the button using JavaScript
    driver.execute_script("arguments[0].click();", next_button)

    currentPage += 1

df = pd.DataFrame(data)
print(df)

with open('enterIntel.json', 'w', encoding='utf-8') as json_file:
    json.dump(data, json_file, indent=1, ensure_ascii=False)

driver.quit()