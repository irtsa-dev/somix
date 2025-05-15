const productsDiv = document.getElementsByClassName('products')[0];
const ingredientsDiv = document.getElementsByClassName('ingredients')[0];
const recipe = document.getElementsByClassName('recipeitems')[0];

const Products = {
    'OG Kush' : 'Calming',
    'Sour Diesel' : 'Refreshing',
    'Green Crack' : 'Energizing',
    'Granddaddy Purple' : 'Sedating',
    'Meth' : null,
    'Cocaine' : null
};

const Ingredients = {
    'Cuke' : ['Energizing', [['Euphoric', 'Laxative'], ['Foggy', 'Cyclopean'], ['Gingeritis', 'Thought-Provoking'], ['Munchies', 'Athletic'], ['Slippery', 'Munchies'], ['Sneaky', 'Paranoia'], ['Toxic', 'Euphoric']]],
    'Banana' : ['Gingeritis', [['Calming', 'Sneaky'], ['Cyclopean', 'Thought-Provoking'], ['Disorienting', 'Focused'], ['Energizing', 'Thought-Provoking'], ['Focused', 'Seizure-Inducing'], [4, 'Refreshing'], ['Paranoia', 'Jennerising'], ['Smelly', 'Anti-Gravity'], ['Toxic', 'Smelly']]],
    'Paracetamol' : ['Sneaky', [['Calming', 'Slippery'], ['Electrifying', 'Athletic'], ['Energizing', 'Paranoia'], ['Focused', 'Gingeritis'], ['Foggy', 'Calming'], ['Glowing', 'Toxic'], ['Munchies', 'Anti-Gravity'], ['Paranoia', 'Balding'], ['Spicy', 'Bright-Eyed'], ['Toxic', 'Tropic Thunder']]],
    'Donut' : ['Calorie-Dense', [['Anti-Gravity', 'Slippery'], ['Balding', 'Sneaky'], ['Calorie-Dense', 'Explosive'], ['Focused', 'Euphoric'], ['Jennerising', 'Gingeritis'], ['Munchies', 'Calming'], ['Shrinking', 'Energizing']]],
    'Viagor' : ['Tropic Thunder', [['Athletic', 'Sneaky'], ['Disorienting', 'Toxic'], ['Euphoric', 'Bright-Eyed'], ['Laxative', 'Calming']]],
    'Mouth Wash' : ['Balding', [['Calming', 'Anti-Gravity'], ['Calorie-Dense', 'Sneaky'], ['Explosive', 'Sedating'], ['Focused', 'Jennerising']]],
    'Flu Medicine' : ['Sedating', [['Athletic', 'Munchies'], ['Calming', 'Bright-Eyed'], ['Cyclopean', 'Foggy'], ['Electrifying', 'Refreshing'], ['Euphoric', 'Toxic'], ['Focused', 'Calming'], ['Laxative', 'Euphoric'], ['Munchies', 'Slippery'], ['Shrinking', 'Paranoia'], ['Thought-Provoking', 'Gingeritis']]],
    'Gasoline' : ['Toxic', [['Energizing', 'Spicy'], ['Disorienting', 'Glowing'], ['Electrifying', 'Disorienting'], ['Euphoric', 'Energizing'], ['Gingeritis', 'Smelly'], ['Jennerising', 'Sneaky'], ['Laxative', 'Foggy'], ['Munchies', 'Sedating'], ['Paranoia', 'Calming'], ['Shrinking', 'Focused'], ['Sneaky', 'Tropic Thunder']]],
    'Energy Drink' : ['Athletic', [['Disorienting', 'Electrifying'], ['Euphoric', 'Energizing'], ['Focused', 'Shrinking'], ['Foggy', 'Laxative'], ['Glowing', 'Disorienting'], ['Schizophrenic', 'Balding'], ['Sedating', 'Munchies'], ['Spicy', 'Euphoric'], ['Tropic Thunder', 'Sneaky']]],
    'Motor Oil' : ['Slippery', [['Energizing', 'Munchies'], ['Euphoric', 'Sedating'], ['Foggy', 'Toxic'], ['Munchies', 'Schizophrenic'], ['Paranoia', 'Anti-Gravity']]],
    'Mega Bean' : ['Foggy', [['Athletic', 'Laxative'], ['Calming', 'Glowing'], ['Energizing', 'Cyclopean'], ['Focused', 'Disorienting'], ['Jennerising', 'Paranoia'], ['Seizure-Inducing', 'Focused'], ['Shrinking', 'Electrifying'], ['Slippery', 'Toxic'], ['Sneaky', 'Calming'], ['Cyclopean', 'Thought-Provoking'], ['Thought-Provoking', 'Energizing']]],
    'Chili' : ['Spicy', [['Anti-Gravity', 'Tropic Thunder'], ['Athletic', 'Euphoric'], ['Laxative', 'Long Faced'], ['Munchies', 'Toxic'], ['Shrinking', 'Refreshing'], ['Sneaky', 'Bright-Eyed']]],
    'Battery' : ['Bright-Eyed', [['Cyclopean', 'Glowing'], ['Electrifying', 'Euphoric'], ['Euphoric', 'Zombifying'], ['Laxative', 'Calorie-Dense'], ['Munchies', 'Tropic Thunder'], ['Shrinking', 'Munchies']]],
    'Iodine' : ['Jennerising', [['Calming', 'Balding'], ['Calorie-Dense'], ['Euphoric', 'Seizure-Inducing'], ['Foggy', 'Paranoia'], ['Refreshing', 'Thought-Provoking'], ['Toxic', 'Sneaky']]],
    'Addy' : ['Thought-Provoking', [['Explosive', 'Euphoric'], ['Foggy', 'Energizing'], ['Glowing', 'Refreshing'], ['Long Faced', 'Electrifying'], ['Sedating', 'Gingeritis']]],
    'Horse Semen' : ['Long Faced', [['Anti-Gravity', 'Calming'], ['Gingeritis', 'Refreshing'], ['Thought-Provoking', 'Electrifying']]]
};

Effects = {
    'Shrinking': 0.6,
    'Zombifying' : 0.58,
    'Cyclopean' : 0.56,
    'Anti-Gravity' : 0.54,
    'Long Faced' : 0.52,
    'Electrifying' : 0.50,
    'Glowing' : 0.48,
    'Tropic Thunder' : 0.46,
    'Thought-Provoking' : 0.44,
    'Jennerising' : 0.42,
    'Bright-Eyed' : 0.40,
    'Spicy' : 0.38,
    'Foggy' : 0.36,
    'Slippery' : 0.34,
    'Athletic' : 0.32,
    'Balding' : 0.30,
    'Calorie-Dense' : 0.28,
    'Sedating' : 0.26,
    'Sneaky' : 0.24,
    'Energizing' : 0.22,
    'Gingeritis' : 0.20,
    'Euphoric' : 0.18,
    'Focused' : 0.16,
    'Refreshing' : 0.14,
    'Munchies' : 0.12,
    'Calming' : 0.10,
    'Disorienting' : 0,
    'Explosive' : 0,
    'Laxative' : 0,
    'Lethal' : 0,
    'Paranoia' : 0,
    'Schizophrenic' : 0,
    'Seizure-Inducing' : 0,
    'Smelly' : 0,
    'Toxic' : 0
};




function determineEffects() {
    const recipeContent = recipe.children;
    const recipeContentLength = recipeContent.length;


    let RecipeEffects = [];
    for (i = 0; i < recipeContentLength; i++) {
        if (recipeContent[i].className == 'product') {
            if (Products[recipeContent[i].id] != null) {RecipeEffects.push(Products[recipeContent[i].id]);}
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
            if (!RecipeEffects.includes(item[0]) {RecipeEffects.push(item[0]);}
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
    for (i = 0; i < recipeEffectsLength; i++) {multiplier += Effects[RecipeEffects[i]];}
    return Math.round((price * multiplier) - 0.01);
}



function displayRecipeInformation() {
    if (recipe.childElementCount == 0) {
        changeEffects(null);
        changePrice(null);
        return null;
    }

    if (recipe.children[0].className != 'product') {
        changeEffects(null);
        changePrice(null);
        return null;
    }


    RecipeEffects = determineEffects();
    price = determinePrice(RecipeEffects);

    changeEffects(RecipeEffects);
    changePrice(price);
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
        if (recipe.children.length == 8) {return null;}
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
        if (recipe.children.length == 8) {return null;}
        event.preventDefault();
        addRecipe('ingredient', ele.id);
        displayRecipeInformation();
    });
    
    ingredientsDiv.appendChild(ele);
}
