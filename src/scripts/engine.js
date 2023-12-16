const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider");
const keysCheck = document.querySelector(".keys-check input")

let audio = new Audio(`src/tunes/a.wav`)
let mappedKeys = [];

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
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

        document.addEventListener("keyup", () => {
            clickedKey.classList.remove("active")
        })
    }
})

const handleVolume = (e) => {
    console.log(e.target.value)
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

volumeSlider.addEventListener("input", handleVolume)

keysCheck.addEventListener("click", showHideKeys)