import azure.functions as func
from app import app
from azure.functions.wsgi import WsgiMiddleware

main = WsgiMiddleware(app).main

