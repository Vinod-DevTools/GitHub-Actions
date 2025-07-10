from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def hello():
    return jsonify(message="Hello from Flask running in Azure Function App!")

if __name__ == '__main__':
    app.run()

