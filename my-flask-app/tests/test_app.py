import sys
import os

# Add my-flask-app directory to the sys.path so Python can find app.py
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import app

def test_home():
    client = app.test_client()
    response = client.get('/')
    assert response.status_code == 200
    assert b"Hello from Azure Web App" in response.data
