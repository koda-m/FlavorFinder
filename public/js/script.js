document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('recipe-search-form');
  const resultsSection = document.getElementById('recipe-results');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    resultsSection.innerHTML = '';

    const ingredientsInput = document.getElementById('ingredients').value;
    const ingredientsArray = ingredientsInput.split(',');
    const cleanedIngredients = [];

    for (let i = 0; i < ingredientsArray.length; i++) {
      const trimmed = ingredientsArray[i].trim();
      if (trimmed !== '') {
        cleanedIngredients.push(trimmed);
      }
    }

    const dietCheckboxes = document.querySelectorAll('input[name="diet"]:checked');
    const diets = [];

    for (let i = 0; i < dietCheckboxes.length; i++) {
      diets.push(dietCheckboxes[i].value);
    }

    if (cleanedIngredients.length === 0) {
      alert('Please enter at least one ingredient.');
      return;
    }

    let url = '/api/search?ingredients=' + encodeURIComponent(cleanedIngredients.join(','));
    if (diets.length > 0) {
      url += '&diet=' + encodeURIComponent(diets.join(','));
    }

    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Could not get recipes');
        }
        return response.json();
      })
      .then(function (data) {
        if (!data.results || data.results.length === 0) {
          resultsSection.innerHTML = '<p class="text-muted">No recipes found. Try different ingredients or preferences.</p>';
          return;
        }

        for (let i = 0; i < data.results.length; i++) {
          const recipe = data.results[i];

          const card = document.createElement('div');
          card.className = 'col-md-4 mb-4';

          const titleSlug = recipe.title.toLowerCase().replace(/ /g, '-');
          const recipeUrl = 'https://spoonacular.com/recipes/' + encodeURIComponent(titleSlug) + '-' + recipe.id;

          card.innerHTML = `
            <div class="card h-100">
              <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${recipe.title}</h5>
                <a href="${recipeUrl}" target="_blank" class="btn btn-primary mt-auto">View Recipe</a>
              </div>
            </div>
          `;

          resultsSection.appendChild(card);
        }
      })
      .catch(function (error) {
        console.error('Fetch error:', error);
        resultsSection.innerHTML = '<p class="text-danger">Something went wrong. Please try again later.</p>';
      });
  });
});