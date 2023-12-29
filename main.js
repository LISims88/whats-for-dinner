var sides = [
    'Broccoli Salad',
    'Miso Glazed Carrots',
    'Coleslaw',
    'Corn Salad',
    'Fried Rice',
    'Garden Salad',
    'Crispy Potatoes',
    'Hasselback Potatoes',
    'Sweet Potato Tots',
    'Mfarakeh',
    'Coconut Rice',
    'Caeser Pasta Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies',
    'Saka Saka',
    'Kamounia',
    'Maklouba'
]

var  mains =[
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken and Sausage Gumbo',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Tonkotsu Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza',
    'Shwarma',
    'Mussakhan',
    'Soso',
    'Shaiyah',
]

var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Banana Pudding',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs',
    'Knafeh',
    'Caakiri',
    'Kahk'
]

var letsCookButton = document.getElementById("letsCookButton");
var recipeResults = document.querySelector('.recipe-results');
var recipePending = document.querySelector('.recipe-pending');
var entireMealRadioButton = document.getElementById("Entire Meal");
var selectedRecipeType;

letsCookButton.addEventListener("click", function() {
    selectedRecipeType = document.querySelector('input[name="recipe-type"]:checked');
    if (selectedRecipeType) {
        if (selectedRecipeType.value === 'Entire Meal') {
            getEntireMeal();
        } else {
            getRandomDish();
        }
    }
}
);

 function getRandomSide() {
    var randomSide = sides[Math.floor(Math.random() * sides.length)]
    return randomSide
 }

 function getRandomMain(){
    var randomMain = mains[Math.floor(Math.random() * mains.length)]
    return randomMain
 }

 function getRandomDessert(){
    var randomDessert = desserts[Math.floor(Math.random() * desserts.length)]
    return randomDessert
 }

function getRandomDish() {
    var randomDish;

    if (selectedRecipeType) {
        switch (selectedRecipeType.value) {
            case 'Side':
                randomDish = getRandomSide();
                break;
            case 'Main Dish':
                randomDish = getRandomMain();
                break;
            case 'Dessert':
                randomDish = getRandomDessert();
                break;  

        }
    recipeResults.querySelector('p').innerText = `${randomDish}`
    
    recipeResults.style.display = 'block'
    recipePending.style.display = 'none'
    }
}

function getEntireMeal() {
    var randomSide = getRandomSide();
    var randomMain = getRandomMain();
    var randomDessert = getRandomDessert();

    recipeResults.querySelector('p').innerText = `${randomSide} ${randomMain} ${randomDessert}`;

    recipeResults.style.display = 'block';
    recipePending.style.display = 'none';
}


