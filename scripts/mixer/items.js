const productsDiv = document.getElementsByClassName('products')[0];
const ingredientsDiv = document.getElementsByClassName('ingredients')[0];
const recipe = document.getElementsByClassName('recipeitems')[0];
const maxIngredients = 12;





function determineEffects() {
    const recipeContent = recipe.children;
    const recipeContentLength = recipeContent.length;


    let RecipeEffects = [];
    for (i = 0; i < recipeContentLength; i++) {
        if (recipeContent[i].className == 'product') {
            if (Products[recipeContent[i].id][0] != null) {RecipeEffects.push(Products[recipeContent[i].id][0]);}
        }

        else {
            let item = Ingredients[recipeContent[i].id];
            let Replacements = item[1];
            let replacementsLength = Replacements.length;
            let NewEffects = [];
            for (x = 0; x < replacementsLength; x++) {
                if (RecipeEffects.includes(Replacements[x][0])) {
                    RecipeEffects.splice(RecipeEffects.indexOf(Replacements[x][0]), 1);
                    NewEffects.push(Replacements[x][1]);
                }
            }
            RecipeEffects = RecipeEffects.concat(NewEffects);
            if (!RecipeEffects.includes(item[0])) {RecipeEffects.push(item[0]);}
        }
    }
    return [...new Set(RecipeEffects)];
}



function determinePrice(RecipeEffects) {
    let price = 0;
    switch (recipe.children[0].id) {
        case 'OG Kush':
        case 'Sour Diesel':
        case 'Green Crack':
        case 'Granddaddy Purple':
            price = 35;
            break;
        case ('Meth'):
            price = 70;
            break;
        case ('Cocaine'):
            price = 150;
            break;
    }

    recipeEffectsLength = RecipeEffects.length;
    multiplier = 1;
    for (i = 0; i < recipeEffectsLength; i++) {multiplier += Effects[RecipeEffects[i]][0];}
    return Math.round((price * multiplier) - 0.01);
}



function determineCost() {
    let costIngredients = 0;
    const recipeLength = recipe.children.length;
    if (recipeLength > 1) {for (i = 1; i < recipeLength; i++) {costIngredients += IngredientPrices[recipe.children[i].id];}}

    let cost = [];
    switch (recipe.children[0].id) {
        case 'OG Kush': 
            cost = [3, 4];
            break;
        case 'Sour Diesel': 
        case 'Green Crack': 
            cost = [3, 5];
            break;
        case 'Granddaddy Purple': 
            cost = [3, 6];
            break;
        case 'Meth': 
            cost = [14, 19];
            break;
        case 'Cocaine': 
            cost = [150, 150];
            break;
    }
    return [cost[0] + costIngredients, cost[1] + costIngredients];
}



function displayRecipeInformation() {
    if (recipe.childElementCount == 0) {
        changeEffects(null);
        changePrice(null);
        changeCost(null);
        return null;
    }

    if (recipe.children[0].className != 'product') {
        changeEffects(null);
        changePrice(null);
        changeCost(null);
        return null;
    }


    RecipeEffects = determineEffects();
    price = determinePrice(RecipeEffects);
    cost = determineCost();

    changeEffects(RecipeEffects);
    changePrice(price);
    changeCost(cost);
}



function addRecipe(itemType, itemName) {
    let recipeContent = recipe.children;
    if (recipeContent == null) {recipeContent = [];}
    
    let ele = document.createElement('input');
    ele.setAttribute('type', 'image');
    ele.setAttribute('src', ('./assets/' + itemType + 's/' + itemName.replace(' ', '').toLowerCase() + '.png'));
    ele.setAttribute('id', itemName);
    ele.setAttribute('class', itemType);

    ele.addEventListener('click', (event) => {
        event.preventDefault();
        recipe.removeChild(ele);
        displayRecipeInformation();
    });


    if (itemType == 'product') {
        if (recipeContent.length == 0) {recipe.appendChild(ele);}
        else {
            if (recipeContent[0].className == 'product') {recipe.replaceChild(ele, recipeContent[0]);}
            else {recipeContent[0].before(ele);}
        }
    }
    else {recipe.appendChild(ele);}
}





for (const [key, value] of Object.entries(Products)) {
    let ele = document.createElement('input');

    ele.setAttribute('type', 'image');
    ele.setAttribute('src', ('./assets/products/' + key.replace(' ', '').toLowerCase() + '.png'));
    ele.setAttribute('id', key);
    ele.setAttribute('class', 'product')

    ele.addEventListener('click', (event) => {
        if (recipe.children.length == maxIngredients) {return null;}
        event.preventDefault();
        addRecipe('product', ele.id);
        displayRecipeInformation();
    });
    
    productsDiv.appendChild(ele);
}


for (const [key, value] of Object.entries(Ingredients)) {
    let ele = document.createElement('input');

    ele.setAttribute('type', 'image');
    ele.setAttribute('src', ('./assets/ingredients/' + key.replace(' ', '').toLowerCase() + '.png'));
    ele.setAttribute('id', key);
    ele.setAttribute('class', 'ingredient')

    ele.addEventListener('click', (event) => {
        if (recipe.children.length == maxIngredients) {return null;}
        event.preventDefault();
        addRecipe('ingredient', ele.id);
        displayRecipeInformation();
    });
    
    ingredientsDiv.appendChild(ele);
}
