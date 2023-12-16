const pianoKeys = document.querySelectorAll(".piano-keys .key");

const playTune = (key) => {
    const audio = new Audio(`src/tunes/${key}.wav`)
    audio.play()
}

pianoKeys.forEach(key => {
    console.log(key.dataset.key)
    key.addEventListener("click", () => playTune(key.dataset.key));
})

document.addEventListener("keydown", (e) => {
    playTune(e.key)

    const clickedKey = document.querySelector(`[data-key="${e.key}"]`);
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150);
})