const effectsDiv = document.getElementsByClassName('effects')[0];




for (const [key, value] of Objects.entries(Effects)) {
    let ele = document.createElement('label');
    ele.setAttribute('class', 'effectText');
    ele.setAttribute('id', 'effect-' + key);
    ele.setAttribute('style', 'color: rgb(' + value[1].join(', ') + ');');
    ele.innerHTML = key;

    let multLabel = document.getElementByID('effect-' + key);
    ele = document.createElement('label')
    ele.setAttribute('class', 'effectText');
    ele.setAttribute('id', 'effect-' + key + '-mult');
    ele.innerHTML = value[0].toString() + 'x';
    multLabel.appendChild(ele);
}
