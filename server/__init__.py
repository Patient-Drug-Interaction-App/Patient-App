from flask import Flask
from dotenv import load_dotenv

load_dotenv

app = Flask(__name__)

# Configure your app
app.config['SECRET_KEY'] = SECRET_KEY