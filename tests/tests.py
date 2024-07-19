from flask import Flask
from flask_testing import TestCase
from ..flaskserver.server import app

class TestSearch(TestCase):
    def create_app(self):
        # You can configure your Flask app for testing
        app = create_app()
        app.config['TESTING'] = True
        return app

    def test_non_existent_search(self):
        response = self.client.get('/search?query=nonexistentitem')
        self.assertEqual(response.status_code, 404)
        self.assertIn('Error', response.data.decode('utf-8'))