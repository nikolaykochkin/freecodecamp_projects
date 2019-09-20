import requests
from bs4 import BeautifulSoup
import json

webpage_response = requests.get('https://www.goodreads.com/quotes')

webpage = webpage_response.content
soup = BeautifulSoup(webpage, "html.parser")

quotes = soup.find_all('div', class_='quoteText')

a = []
print('[')
for i in quotes:
    a.append({'text': str(i.contents[0].string).strip(), 'author': str(i.span.string).strip()})
    print('{')  
    print('\t "text": "' + str(i.contents[0].string).strip() + '",')
    print('\t "author": "' + str(i.span.string).strip() + '",')
    print('},')
print(']')