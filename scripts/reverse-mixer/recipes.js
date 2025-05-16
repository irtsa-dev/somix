function display(data, worker) {
    worker.terminate();
    let errorText = document.getElementsByClassName('error-text')[0];
    if (!data[0]) {errorText.innerHTML = data[1];}
    else {
        errorText.innerHTML = '';
        data = data[1];
        const dataLength = data.length;
        let imgDiv = document.getElementsByClassName('recipe-images')[0];
    
        for (i = 0; i < dataLength; i++) {
            let ele = document.createElement('img')
            ele.setAttribute('src', ('./assets/' + data[i][0] + 's/' + data[i][1].replace(' ', '').toLowerCase() + '.png'))
            ele.setAttribute('width', '50');
            ele.setAttribute('height', '50');
            imgDiv.appendChild(ele);
        }
    }

    document.getElementsByClassName('loader')[0].style.display = 'none';
    document.getElementsByClassName('backButton-wrapper')[0].style.display = 'flex';
}
    


function displayRecipe() {
    let tempEffectCheckboxes = document.getElementsByClassName('effectCheckbox');
    let tempProductCheckboxes = document.getElementsByClassName('productCheckbox');
    let lengthtempEC = tempEffectCheckboxes.length;
    let lengthtempPC = tempProductCheckboxes.length;

    let EffectCheckboxes = [];
    for (i = 0; i < lengthtempEC; i++) {EffectCheckboxes.push({'id' : tempEffectCheckboxes[i].id, 'checked': tempEffectCheckboxes[i].checked});}

    let ProductCheckboxes = [];
    for (i = 0; i < lengthtempPC; i++) {ProductCheckboxes.push({'id' : tempProductCheckboxes[i].id, 'checked': tempProductCheckboxes[i].checked});}
    
    
    document.getElementById('blackscreen').style.display = 'flex';
    document.getElementById('loading').style.display = 'flex';
    document.getElementsByClassName('loader')[0].style.display = 'flex';

    const worker = new Worker('./scripts/reverse-mixer/worker.js');
    worker.postMessage({'args' : [EffectCheckboxes, ProductCheckboxes, Ingredients, Products, Effects]});
    worker.onmessage = ev => display(ev.data, worker);
}



function goBack() {
    document.getElementById('blackscreen').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
    document.getElementsByClassName('backButton-wrapper')[0].style.display = 'none';

    let imgDiv = document.getElementsByClassName('recipe-images')[0];
    while (imgDiv.children) {imgDiv.removeChild(imgDiv.children[0]);}
}
