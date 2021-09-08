let character = document.getElementById(`character`);
let box = document.getElementById(`box`);

function jump() {
    if (character.classList != `animate`) {
        character.classList.add(`animate`)
    }
    setTimeout(function() {
        character.classList.remove(`animate`);
    }, 500);
}

let deadbox = setInterval(function() {
        let characterTop =
            parseInt(window.getComputedStyle(character).getPropertyValue(`top`))
        let boxLeft =
            parseInt(window.getComputedStyle(box).getPropertyValue(`left`))
        if (boxLeft < -20 && boxLeft > -30 && characterTop >= 130) {
            box.style.animation = `none`
            box.style.display = `nome`
            alert(`GAME OVER`)
        }
    },
    10)