const linkInputs = document.getElementsByClassName('links')[0].children;
const linkInputsLength = linkInputs.length;

const linkUrls = {
    'github' : 'https://github.com/irtsa-dev/somix'
};





for (i = 0; i < linkInputsLength; i++) {
    let ele = linkInputs[i];

    ele.addEventListener('click', (event) => {
        event.preventDefault();
        window.open(linkUrls[ele.id], '_blank', 'noopener, noreferrer');
    });
}
