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
<h2>Capstone Requirements Fulfilled</h2>
<table>
  <tr>
    <th>Requirement</th>
    <th>Implementation</th>
  </tr>
  <tr>
    <td><b>Create a function that accepts two or more input parameters and returns a value that is calculated or determined by the inputs. Basic math functions don’t count (e.g. addition, etc).</b></td>
    <td>Wrote a function that uses a user's list of ingredients (<code>cleanedIngredients</code>) and any selected dietary preferences (<code>diets</code> - if applicable) to build a search URL for the Spoonacular API.</td>
  </tr>
  <tr>
    <td><b>Persist data to an internal API and make the stored data accessible in your app. (including after reload/refresh). This can be achieved either by using local storage or building your own API that stores data into a JSON file.</b></td>
    <td>Used <code>localStorage</code> to allow users to save (and unsave) recipes. Any saved recipes are accessible after the page is reloaded.</td.>
  </tr>
  <tr>
    <td><b>Create a node.js web server using a modern framework such as Express.js.</b></td>
    <td>Set up a Node.js web server using Express.js (see <code>server.js</code>) to power recipe search functionality and handle backend logic.</td>
  </tr>
  <tr>
    <td><b>Visualize data in a user friendly way. (e.g. graph, chart, etc) This can include using libraries like ChartJS</b></td>
    <td>Recipe search results are displayed in responsive Bootstrap cards with a consistent layout showing relevant information (recipe name, recipe photo, and buttons to either view or save the recipe).</td>
  </tr>
  <tr>
    <td><b>Integrate an API into your project (MANDATORY). Using a Weather API will not count.</b></td>
    <td>Used the Spoonacular API to retrieve recipe information, allowing users to search for recipes by ingredients and dietary preferences (if applicable).</td>
  </tr>
  <tr>
    <td><b>At least one media query to make your site responsive.</b></td>
    <td>Used a media query, Bootstrap, and Flexbox to ensure the site adapts to smaller screen sizes.</td>
  </tr>
</table>
<h2>Fetch Request</h2>
<p>I fulfilled this requirement by sending a fetch request to the Spoonacular API using a custom-built URL based on the user’s ingredients and any selected dietary preferences. The API's response is displayed on the page using Bootstrap cards. These two screenshots show the main parts of my fetch request (the lines between these two screenshots are for creating the recipe cards, and adding the view recipe and save recipe buttons to each card).</p>
<img width="1277" height="317" alt="fetch" src="https://github.com/user-attachments/assets/2ed8032f-c886-42ab-841b-627ed25cedab" />
<img width="1153" height="100" alt="fetch2" src="https://github.com/user-attachments/assets/e7e34a11-2d6c-434e-b9ee-ab34be0a0502" />
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
  <li><a href="https://spoonacular.com/food-api">Spoonacular API</a> - food API with several endpoints and over 5,000 recipes to pull from (plus a generous free tier &#128523;)</li>
  <li><a href="https://getbootstrap.com/">Bootstrap</a> - for responsive and consistent styling</li>
  <li><a href="https://fontawesome.com/">Font Awesome</a> - for icons</li>
  <li>Assorted cookbooks - mainly two <a href="https://www.tasteofhome.com/">Taste of Home</a> cookbooks (<i>Taste of Home: Baking</i> and <i>Taste of Home: Winning Recipes</i>) for the "Pantry Staples" and "Cooking Tips" pages</li>
</ul>
<h2>Future Features</h2>
<p>Stay tuned for future updates. Some of the future FlavorFinder features (say that ten times fast!) I hope to implement are:</p>
<ul>
  <li>User Authentication - allow users to create an account and see their saved recipes across devices (will probably use MongoDB for this)</li>
  <li>Improved search functionality - allow users to search with additional filters (cuisine type, cooking time, recipe ratings, etc.)</li>
  <li>Inventory/Shopping List - generate a shopping list for saved recipes based on the ingredients users already have</li>
  <li>Display nutrition information - using Chart.js</li>
  <li>...and more!</li>
</ul>
