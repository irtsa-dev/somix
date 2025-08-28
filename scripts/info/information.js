const effectsDiv = document.getElementsByClassName('effects')[0];




for (const [key, value] of Object.entries(Effects)) {
    let ele = document.createElement('label');
    ele.setAttribute('class', 'effectText');
    ele.setAttribute('id', 'effect-' + key);
    ele.setAttribute('style', 'color: rgb(' + value[1].join(', ') + ');');
    ele.innerHTML = key;
    effectsDiv.appendChild(ele);

    let multLabel = document.getElementById('effect-' + key);
    ele = document.createElement('label')
    ele.setAttribute('class', 'effectText');
    ele.setAttribute('id', 'effect-' + key + '-mult');
    ele.innerHTML = value[0].toString() + 'x';
    multLabel.appendChild(ele);
}
