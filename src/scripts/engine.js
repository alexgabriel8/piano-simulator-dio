const pianoKeys = document.querySelectorAll(".piano-keys .key");

let mappedKeys = [];

const playTune = (key) => {
    const audio = new Audio(`src/tunes/${key}.wav`)
    audio.play()
}

pianoKeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mappedKeys.push(key.dataset.key)
})

document.addEventListener("keydown", (e) => {
    if(mappedKeys.includes(e.key)) {
        playTune(e.key)
        const clickedKey = document.querySelector(`[data-key="${e.key}"]`);
        clickedKey.classList.add("active")
        setTimeout(() => {
            clickedKey.classList.remove("active")
        }, 150);
    }

})