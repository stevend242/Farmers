from flask import Flask, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

def web_scraping_veg_fruits(url, vegetable_name=""):
  """Scrapes vegetable or fruit prices from a given URL.

  Args:
      url: The URL of the webpage containing the price information.
      vegetable_name (optional): Name of a specific vegetable to filter results.

  Returns:
      list: A list of dictionaries containing vegetable/fruit details like name, unit, market price, etc.
  """

  response = requests.get(url)
  html_content = response.content

  soup = BeautifulSoup(html_content, 'html.parser')
  table = soup.find('table', {'id': 'customers'})

  vegetable_details = []
  for row in table.find_all('tr')[1:]:  # skip the header row
    columns = row.find_all(['th', 'td'])
    vegetable_name = columns[0].text.strip()
    unit = columns[1].text.strip()
    market_price = columns[2].text.strip()
    retail_price_range = columns[3].text.strip()
    mall_price_range = columns[4].text.strip()

    vegetable_details.append({
      'name': vegetable_name,
      'unit': unit,
      'marketPrice': market_price,
      'retailPriceRange': retail_price_range,
      'mallPriceRange': mall_price_range
    })

    # if vegetable_name.lower() in name.lower():  # filter by vegetable name (optional)
    #   break

  return vegetable_details


@app.route('/api/v1/vegetables', methods=['GET'])
def get_vegetables():
  """API endpoint to retrieve vegetable prices."""
  url = 'https://market.todaypricerates.com/Andhra-Pradesh-vegetables-price'
  vegetable_prices = web_scraping_veg_fruits(url)
  return jsonify(vegetable_prices)


@app.route('/api/v1/fruits', methods=['GET'])
def get_fruits():
  """API endpoint to retrieve fruit prices."""
  url = 'https://market.todaypricerates.com/Andhra-Pradesh-fruits-price'
  fruit_prices = web_scraping_veg_fruits(url)
  print(fruit_prices)
  return jsonify(fruit_prices)


if __name__ == '__main__':
  app.run(debug=True)
