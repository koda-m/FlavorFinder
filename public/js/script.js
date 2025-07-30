document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('recipe-search-form');
  const resultsSection = document.getElementById('recipe-results');

  // save recipes to localStorage
  function saveRecipe(recipe) {
    let saved = JSON.parse(localStorage.getItem('savedRecipes')) || [];

    // check if recipe is already saved
    const alreadySaved = saved.some(r => r.id === recipe.id);
    if (!alreadySaved) {
      saved.push(recipe);
      localStorage.setItem('savedRecipes', JSON.stringify(saved));
      alert('Recipe saved!');
    } else {
      alert('Recipe is already saved.');
    }
  }

  // handle the search form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    resultsSection.innerHTML = '';

    // process and clean the ingredients input
    const ingredientsInput = document.getElementById('ingredients').value;
    const ingredientsArray = ingredientsInput.split(',');
    const cleanedIngredients = [];

    for (let i = 0; i < ingredientsArray.length; i++) {
      const trimmed = ingredientsArray[i].trim();
      if (trimmed !== '') {
        cleanedIngredients.push(trimmed);
      }
    }

    // get selected dietary preferences
    const dietCheckboxes = document.querySelectorAll('input[name="diet"]:checked');
    const diets = [];

    for (let i = 0; i < dietCheckboxes.length; i++) {
      diets.push(dietCheckboxes[i].value);
    }

    // validate that at least one ingredient was entered
    if (cleanedIngredients.length === 0) {
      alert('Please enter at least one ingredient.');
      return;
    }

    // query URL to Spoonacular
    let url = '/api/search?ingredients=' + encodeURIComponent(cleanedIngredients.join(','));
    if (diets.length > 0) {
      url += '&diet=' + encodeURIComponent(diets.join(','));
    }

    // fetch recipes from Spoonacular
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

        // loop through recipes and create recipe cards
        for (let i = 0; i < data.results.length; i++) {
          const recipe = data.results[i];

          const card = document.createElement('div');
          card.className = 'col-md-4 mb-4';

          // link to the Spoonacular recipe page
          const titleSlug = recipe.title.toLowerCase().replace(/ /g, '-');
          const recipeUrl = 'https://spoonacular.com/recipes/' + encodeURIComponent(titleSlug) + '-' + recipe.id;

          // recipe cards (need to double check Font Awesome version before submitting!!!!!)
          card.innerHTML = `
            <div class="card h-100">
              <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${recipe.title}</h5>
                <div class="d-flex justify-content-between align-items-center mt-auto">
                  <a href="${recipeUrl}" target="_blank" class="btn btn-primary">View Recipe</a>
                  <button class="btn btn-outline-danger btn-sm save-btn" data-id="${recipe.id}" data-title="${recipe.title}" data-image="${recipe.image}" data-bs-toggle="tooltip" title="Save Recipe">
                    <i class="fa fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          `;

          resultsSection.appendChild(card);
        }

        // add event listeners to the save recipe heart icons
        const saveButtons = document.querySelectorAll('.save-btn');
        saveButtons.forEach(function (button) {
          button.addEventListener('click', function () {
            const recipe = {
              id: button.getAttribute('data-id'),
              title: button.getAttribute('data-title'),
              image: button.getAttribute('data-image')
            };
            saveRecipe(recipe);
          });
        });
      })
      .catch(function (error) {
        console.error('Fetch error:', error);
        resultsSection.innerHTML = '<p class="text-danger">Something went wrong. Please try again later.</p>';
      });
  });
});