<h1>FlavorFinder</h1>
<img width="1920" height="1080" alt="Untitled design (2)" src="https://github.com/user-attachments/assets/7989754f-a095-4b19-8eb5-34822d1ff1cb" />
<h2>Description</h2>
<p>FlavorFinder is a web application that helps users find recipes based on the ingredients they already have. Enter the ingredients you have in your kitchen, select any dietary preferences (if applicable), and FlavorFinder will show you recipe options using the Spoonacular API. FlavorFinder is designed to reduce food waste and help you discover new meals without a trip to the store.</p>
<h2>Technologies Used</h2>
<p>HTML5, CSS3, JavaScript, Node.js, Express.js, localStorage, Spoonacular API, Bootstrap, Font Awesome, Git & GitHub, Git Bash, Visual Studio Code</p>
<h2>Usage</h2>
<ul>
  <li>On the "Recipe Search" page, type in ingredients you have (comma-separated).</li>
  <li>Check any dietary filters (like Vegetarian or Gluten-Free).</li>
  <li>Click "Search Recipes" to see a list of matching recipes.</li>
  <li>Click “View Recipe” to open the full recipe on Spoonacular.</li>
  <li>Click the heart icon to save recipes.</li>
  <li>On the "Saved Recipes" page, click the trash can icon to remove a recipe from your saved recipes.</li>
</ul>
<h2>How to Run</h2>
<ol>
  <li>Make sure you have Node.js installed (download here: https://nodejs.org/en).</li>
  <li>Clone or download this repo.</li>
  <li>Open a Git Bash terminal and navigate to the FlavorFinder folder.</li>
  <li>Type in the command <code>npm install</code> and press Enter.</li>
  <li>Create a <code>.env</code> file and add a Spoonacular API key (follow this format: <code>SPOONACULAR_API_KEY=[API key goes here]</code>). Make sure to save this to the root of the project.<br/><i>[If you're from Code:You and are grading this project, I provided my Spoonacular API Key in the project submission form]</i></li>
  <li>Run the project with Node.js by typing the command <code>node server.js</code> into the terminal and pressing Enter.</li>
</ol>
<h2>Credits</h2>
<ul>
  <li><a href="https://spoonacular.com/food-api">Spoonacular API</a> - food API with over 5,000 recipes to pull from (and a generous free tier &#128523;)</li>
  <li><a href="https://getbootstrap.com/">Bootstrap</a> - for responsive and consistent styling</li>
  <li><a href="https://fontawesome.com/">Font Awesome</a> - for icons</li>
</ul>
<h2>Future Features</h2>
<p>Stay tuned for future updates. Some of the future FlavorFinder features (say that ten times fast!) I hope to implement are:</p>
<ul>
  <li>User Authentication - users can see their saved recipes across devices</li>
  <li>Improved search functionality - allow users to search with additional filters (cuisine type, cooking time, recipe ratings, etc.)</li>
  <li>Inventory/Shopping List - generate a shopping list for saved recipes based on the ingredients users already have</li>
  <li>Display nutrition information - using Chart.js</li>
  <li>...and more!</li>
</ul>
