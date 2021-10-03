var music = document.getElementById('musicId')
var audio = document.getElementById('sound')
let playing = true

music.volume = .2

audio.addEventListener('click', playAudio)

function playAudio(){
    if(playing){
        music.pause()
        playing = false
        document.getElementById('image').src = 'all media stuff/1024px-Mute_Icon.svg.png'
    }
    else if(!playing){
        music.play()
        playing = true
        document.getElementById('image').src = 'all media stuff/Speaker_Icon.svg'
    }
}