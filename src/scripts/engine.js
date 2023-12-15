const pianoKeys = document.querySelectorAll(".piano-keys .key");

const playTune = (key) => {
    const audio = new Audio(`src/tunes/${key}.wav`)
    audio.play()
}

pianoKeys.forEach(key => {
    console.log(key.dataset.key)
    key.addEventListener("click", () => playTune(key.dataset.key));
})