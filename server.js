require('dotenv').config();

const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/search', function (req, res) {
  const ingredients = req.query.ingredients;
  const diet = req.query.diet;
  const apiKey = process.env.SPOONACULAR_API_KEY;

  if (!apiKey) {
    res.status(500).json({ error: 'Missing API key' });
    return;
  }

  const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch' +
    '?apiKey=' + apiKey +
    '&includeIngredients=' + (ingredients || '') +
    '&diet=' + (diet || '') +
    '&number=10';

  fetch(apiUrl)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to fetch from Spoonacular');
      }
      return response.json();
    })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (error) {
      console.error('API error:', error.message);
      res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    });
});

app.listen(PORT, function () {
  console.log('Server running at http://localhost:' + PORT);
});