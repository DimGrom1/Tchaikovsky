let audio = document.getElementsByTagName("audio")[0]
audio.volume = 0.5
console.log(audio);
let playButton = document.getElementsByClassName("playButton")[0]
let slide = document.getElementsByClassName("slide")[0]
let slideStorage = [
    "slide1.jpg",
    "Tchaikovsky.jpg",
    "slide3.webp",
]
let trackName = document.getElementsByClassName("trackName")[0]
let playButtonImage = "play"
let nextButton = document.getElementsByClassName("nextButton")[0]
let backButton = document.getElementsByClassName("backButton")[0]
let counter = 0
let slider = document.getElementsByClassName("slider")[0]
let volume = document.getElementsByClassName("volume")[0]
let audios = [
    "Tchaikovsky,_Concerto_No.1_in_B-flat_minor_Op.23,_I._Allegro.mp3 ",
    "Tchaikovsky,_Concerto_No.1_in_B-flat_minor_Op.23,_II._Andantino.mp3",
    "Tchaikovsky,_Concerto_No.1_in_B-flat_minor_Op.23,_III._Allegro.mp3",
]
setTimeout(function () {
    console.log(audio.duration);
    slider.max = Math.floor(audio.duration)
}, 1000)
playButton.onclick = function (event) {
    // console.log(1);
    if (playButtonImage == "play") {
        playButtonImage = "pause"
        playButton.style.backgroundImage = "url(pause.png)"
        audio.play()
    }
    else {
        playButtonImage = "play"
        playButton.style.backgroundImage = "url(play.png)"
        audio.pause()
    }
}
nextButton.onclick = function () {
    // console.log(1);
    counter = counter + 1
    if (counter == audios.length) {
        counter = 0
    }
    trackName.innerHTML = audios[counter].split(".mp3")[0].replaceAll("_", " ")
    audio.children[0].src = audios[counter]
    audio.load()
    slider.max = audio.duration
    if (playButtonImage == "pause") {
        audio.play()
    }
}
backButton.onclick = function () {
    counter = counter - 1
    if (counter == -1) {
        counter = audios.length - 1
    }
    trackName.innerHTML = audios[counter].split(".mp3")[0].replaceAll("_", " ")
    audio.children[0].src = audios[counter]
    audio.load()
    slider.max = audio.duration
    if (playButtonImage == "pause") {
        audio.play()
    }
}
volume.oninput = function () {
    console.log(volume.value);
    audio.volume = volume.value / 100
}
slider.oninput = function () {
    console.log(audio.currentTime);
    audio.currentTime = slider.value
    audio.volume = 0
}
slider.onmouseup = function () {
    audio.volume = volume.value / 100
}
setInterval(() => {
    slider.value = audio.currentTime

}, 1000)
audio.addEventListener("ended", function () {

    console.log(321);
    counter++
    if (counter == audios.length) {
        counter = 0
    }
    trackName.innerHTML = audios[counter].split(".mp3")[0].replaceAll("_", " ")
    audio.children[0].src = audios[counter]
    audio.load()
    audio.play()
    setTimeout(function () {
        slider.max = audio.duration
    }, 1000)
})
setInterval(function () {
    counter = counter + 1
    if (counter == slideStorage.length) {
        counter = 0
    }
    slide.src = slideStorage[counter]
}, 10000)