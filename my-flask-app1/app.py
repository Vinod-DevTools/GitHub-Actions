# my-flask-app1/app.py

from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello from Azure Function Flask app!'
