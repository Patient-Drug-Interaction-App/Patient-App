from flask import Flask, jsonify, request
from server import app


@app.route("/search", methods = ['GET'])
def search():
    search_query= request.args.get('patientName')
    return jsonify({'search_query': search_query})