import requests
import json
url = 'https://gorest.co.in/public/v1/users?access_token=d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3';
response = requests.get(url);
data = response.text;
jsonData = json.loads(data);
print(jsonData);