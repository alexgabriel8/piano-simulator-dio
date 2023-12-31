const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider");
const keysCheck = document.querySelector(".keys-check input");

let audioVolume = 0.5;
let mappedKeys = [];

const playTune = (key) => {
    let tune = new Audio(`src/tunes/${key}.wav`)
    tune.volume = audioVolume;
    tune.play();
}

pianoKeys.forEach(key => {
    key.addEventListener("mousedown", () => {
        playTune(key.dataset.key);
        key.classList.add("active");
    });
    key.addEventListener("mouseup", () => key.classList.remove("active"));

    key.addEventListener("mouseenter", (e) => {
        if(e.buttons == 1) {
            playTune(key.dataset.key);
            key.classList.add("active");
        }
    })

    key.addEventListener("mouseleave", () => key.classList.remove("active"));
    mappedKeys.push(key.dataset.key);
})

document.addEventListener("keydown", (e) => {
    if(mappedKeys.includes(e.key)) {
        playTune(e.key);
        const clickedKey = document.querySelector(`[data-key="${e.key}"]`);
        clickedKey.classList.add("active");

        document.addEventListener("keyup", () => {
            clickedKey.classList.remove("active");
        })
    }
})

const handleVolume = (e) => {
    audioVolume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

volumeSlider.addEventListener("input", handleVolume)

keysCheck.addEventListener("click", showHideKeys)