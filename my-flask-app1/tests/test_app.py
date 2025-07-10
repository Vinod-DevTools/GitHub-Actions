# my-flask-app1/tests/test_app.py

from app import app

def test_home_route():
    with app.test_client() as client:
        response = client.get('/')
        assert response.status_code == 200
