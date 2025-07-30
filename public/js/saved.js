document.addEventListener('DOMContentLoaded', function () {
  const savedRecipesSection = document.getElementById('saved-recipes');

  const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

  // display saved recipes
  function renderRecipes() {
    savedRecipesSection.innerHTML = '';

    // show message if there aren't any saved recipes
    if (savedRecipes.length === 0) {
      savedRecipesSection.innerHTML = '<p class="text-muted">No saved recipes yet.</p>';
      return;
    }

    // loop through saved recipe and create Bootstrap cards (including link)
    savedRecipes.forEach(function (recipe, index) {
      const titleSlug = recipe.title.toLowerCase().replace(/ /g, '-');
      const recipeUrl = `https://spoonacular.com/recipes/${encodeURIComponent(titleSlug)}-${recipe.id}`;

      const card = document.createElement('div');
      card.className = 'col-md-4 mb-4';

      // HTML for recipe cards (need to double check that Font Awesome trash can icon shows up correctly before turning in!!!!)
      card.innerHTML = `
        <div class="card h-100">
          <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${recipe.title}</h5>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <a href="${recipeUrl}" target="_blank" class="btn btn-primary">View Recipe</a>
              <button class="btn btn-outline-danger btn-sm remove-btn" data-index="${index}" title="Remove">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      `;

      // add cards to saved recipes section
      savedRecipesSection.appendChild(card);
    });

    const removeButtons = document.querySelectorAll('.remove-btn');

    // add event listeners to "remove recipe" buttons
    removeButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const index = parseInt(this.getAttribute('data-index'));
        savedRecipes.splice(index, 1);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        renderRecipes();
      });
    });
  }

  renderRecipes();
});
