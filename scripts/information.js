const recipePricePre = document.getElementsByClassName('recipe-price')[0].children[1];
const recipeEffectsPre = document.getElementsByClassName('recipe-effects')[0].children[1];





function changePrice(price) {
    if (price == null) {recipePricePre.innerHTML = '';}
    else {recipePricePre.innerHTML = '$' + price.toString();}
}



function changeEffects(effects) {
    if (effects == null) {recipeEffectsPre.innerHTML = '';}
    else {recipeEffectsPre.innerHTML = effects.join(' | ');}
}