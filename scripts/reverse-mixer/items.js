const effectsDiv = document.getElementsByClassName('effects')[0];
const productsDiv = document.getElementsByClassName('products')[0];
const recipe = document.getElementsByClassName('recipe')[0];
let checkboxToggle = true;





function disableCheckboxes () {
    let Checkboxes = document.getElementsByClassName('effectCheckbox');
    const checkboxesLength = Checkboxes.length;

    for (i = 0; i < checkboxesLength; i++) {
        if (!Checkboxes[i].checked) {Checkboxes[i].setAttribute('disabled', 'disabled');}
    }
}



function enableCheckboxes() {
    let Checkboxes = document.getElementsByClassName('effectCheckbox');
    const checkboxesLength = Checkboxes.length;

    for (i = 0; i < checkboxesLength; i++) {
        if (Checkboxes[i].hasAttribute('disabled')) {Checkboxes[i].removeAttribute('disabled');}
    }
}



function validateCheckboxes () {
    let checkedBoxes = 0;
    let Checkboxes = document.getElementsByClassName('effectCheckbox');
    const checkboxesLength = Checkboxes.length;

    for (i = 0; i < checkboxesLength; i++) {
        if (Checkboxes[i].checked) {checkedBoxes++;}
        if (checkedBoxes == 8 && checkboxToggle) {disableCheckboxes(); checkboxToggle = false;}
        else if (!checkboxToggle) {enableCheckboxes(); checkboxToggle = true;}
    }
}





for (const [key, value] of Object.entries(Products)) {
    let ele = document.createElement('label');
    ele.setAttribute('class', 'productText');
    ele.setAttribute('id', 'checkbox-' + key);
    ele.setAttribute('style', 'color: rgb(' + value[1].join(', ') + ');');
    ele.innerHTML = key;
    productsDiv.appendChild(ele);

    let productCheckbox = document.getElementById('checkbox-' + key);
    ele = document.createElement('input');
    ele.setAttribute('type', 'checkbox');
    ele.setAttribute('class', 'productCheckbox');
    ele.setAttribute('id', key);
    productCheckbox.appendChild(ele);
}



for (const [key, value] of Object.entries(Effects)) {
    let ele = document.createElement('label');
    ele.setAttribute('class', 'effectText');
    ele.setAttribute('id', 'checkbox-' + key);
    ele.setAttribute('style', 'color: rgb(' + value[1].join(', ') + ');');
    ele.innerHTML = key;
    effectsDiv.appendChild(ele);


    let effectCheckbox = document.getElementById('checkbox-' + key);
    ele = document.createElement('input');
    ele.setAttribute('type', 'checkbox');
    ele.setAttribute('class', 'effectCheckbox');
    ele.setAttribute('id', key);
    ele.addEventListener('click', (event) => {validateCheckboxes();});
    effectCheckbox.appendChild(ele);
}
