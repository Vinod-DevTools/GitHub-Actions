# my-flask-app1/function_app/__init__.py

import azure.functions as func
from app import app  # your Flask app in app.py

def main(req: func.HttpRequest, context: func.Context) -> func.HttpResponse:
    return func.WsgiMiddleware(app.wsgi_app).handle(req, context)
