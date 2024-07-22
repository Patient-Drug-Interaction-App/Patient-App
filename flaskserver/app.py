from flask import Flask, render_template


app = Flask(__name__, template_folder='../client/public', static_folder='../client/static')

@app.route('/')
def home():
    return render_template('home.html')  





