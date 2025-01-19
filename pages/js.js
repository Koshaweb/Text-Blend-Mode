const text = document.getElementById('text');

const blendModes = {
    normal: 'mix-blend-normal',
    multiply: 'mix-blend-multiply',
    screen: 'mix-blend-screen',
    hue: 'mix-blend-hue',
    saturation: 'mix-blend-saturation',
    color: 'mix-blend-color',
    lighten: 'mix-blend-lighten',
    darken: 'mix-blend-darken',
    overlay: 'mix-blend-overlay',
};

function removeBlendClasses() {
    Object.values(blendModes).forEach((blendClass) => {
        text.classList.remove(blendClass);
    });
}

function applyBlendMode(event) {
    const mode = blendModes[event.target.id]; 
    if (mode) {
        removeBlendClasses();
        text.classList.add(mode);
    }
}


Object.keys(blendModes).forEach((id) => {
    document.getElementById(id).addEventListener('click', applyBlendMode);
});
