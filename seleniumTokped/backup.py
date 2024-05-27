import time
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By

url = 'https://www.tokopedia.com/search?q=processor+intel+i3+13100f&source=universe&st=product&navsource=home&srp_component_id=02.02.01.02'
driver = webdriver.Chrome()
driver.get(url)

data = []
for i in range(2):
    WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.CSS_SELECTOR, "#zeus-root")))
    time.sleep(2)

    for j in range(20):
        driver.execute_script("window.scrollBy(0, 250)")
        time.sleep(1)

    driver.execute_script("window.scrollBy(250, 0)")
    time.sleep(1)

    soup = BeautifulSoup(driver.page_source, 'html.parser')
    for item in soup.find_all('div', class_='css-1asz3by'):
        productName = item.find('div', class_='prd_link-product-name').text
        productPrice = item.find('div', class_='prd_link-product-price').text
        
        ratingSold = item.find('div', class_='prd_shop-rating-average-and-label')
        if ratingSold:
            rating_span = ratingSold.find('span', class_='prd_rating-average-text')
            if rating_span:
                productRating = rating_span.text
            else:
                productRating = ''

            sold_span = ratingSold.find('span', class_='prd_label-integrity')
            if sold_span:
                productSold = sold_span.text
            else:
                productSold = ''
        else:
            productRating = ''
            productSold = ''

        # sold_span = item.find('span', class_='prd_label-integrity css-1sgek4h')
        # productSold = sold_span.text if sold_span else ''

        store_info_div = item.find('div', class_='css-1rn0irl')
        if store_info_div:
            storeName = store_info_div.find('span', class_='prd_link-shop-name').text
            storeLoc = store_info_div.find('span', class_='prd_link-shop-loc').text
        else:
            storeLoc = ''
            storeName = ''
        
            data.append(
                (storeName, storeLoc, productName, productPrice, productSold, productRating)
            )

    # time.sleep(2)
    # driver.find_element(By.CSS_SELECTOR, 'button', class_='css-16uzo3v-unf-pagination-item').click()
    # time.sleep(3)

    withPanda = pd.DataFrame(data, columns=["Toko", "Lokasi", "Nama Barang", "Harga", "Terjual", "Rating"])
    print(withPanda)