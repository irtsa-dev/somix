function findRecipe(EffectCheckboxes, ProductCheckboxes, Ingredients, Products, Effects) {
    function decimalToHex(dec) {
        return dec.toString(16);
    }
    
    
    function hexToDecimal(hex) {
        fill = hex.length;
        return parseInt(hex, 16);
    }
    
    
    function determineFoundEffects(recipe) {
        const recipeLength = recipe.length;
    
        let RecipeEffects = [];
        for (i = 0; i < recipeLength; i++) {
            if (recipe[i][0] == 'product') {
                if (Products[recipe[i][1]][0] != null) {RecipeEffects.push(Products[recipe[i][1]][0]);}
            }
    
            else {
                let item = Ingredients[recipe[i][1]];
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
    
    
    function validateEffects(result, compare) {
        const resultLength = result.length;
        const compareLength = compare.length;
        let compares = [];
    
        if (compareLength > resultLength) {return false;}
    
        for (i = 0; i < resultLength; i++) {
            if (compare.includes(result[i])) {compares.push(true);}
        }
    
        if (compares.length == compareLength) {return true;}
        return false;
    }


    
    let DesiredEffects = [];
    let DesiredProducts = [];
    const effectCheckboxesLength = EffectCheckboxes.length;
    const productCheckboxesLength = ProductCheckboxes.length;
    
    for (i = 0; i < effectCheckboxesLength; i++) {
        if (EffectCheckboxes[i]['checked']) {DesiredEffects.push(EffectCheckboxes[i]['id']);}
    }
    effectsLength = DesiredEffects.length;
    if (effectsLength == 0) {return [0, 'No effects selected.'];}

    for (i = 0; i < productCheckboxesLength; i++) {
        if (ProductCheckboxes[i]['checked']) {DesiredProducts.push(ProductCheckboxes[i]['id'])}
    }
    productsLength = DesiredProducts.length;
    if (productsLength == 0) {return [0, 'No product selected.'];}


    var combination, product, Recipe, workingCombination, workingCombinationLength;
    for (i = 0; i < productsLength; i++) {
        combination = (16 ** (effectsLength - 1)) - 1;
        product = DesiredProducts[i];
        while (decimalToHex(combination) != 'fffffff') {
            Recipe = [['product', product]];
            workingCombination = decimalToHex(combination).split('').reverse().join('');
            workingCombinationLength = workingCombination.length;
            for (x = 0; x < workingCombinationLength; x++) {
                ingredient = hexToDecimal(workingCombination[x]);
                Recipe.push(['ingredient', Object.keys(Ingredients)[ingredient]]);
            }
            if (validateEffects(determineFoundEffects(Recipe), DesiredEffects)) {return [1, Recipe];}
            combination++;
        }
    }

    return [0, 'No recipe found.'];
}


onmessage = ev => {
    args = ev.data['args']
    postMessage(findRecipe(args[0], args[1], args[2], args[3], args[4]));
}
