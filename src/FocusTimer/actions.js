import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countDown()
    sounds.buttonPressAudio.play()
}

function set(){
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()

    el.seconds.setAttribute('contenteditable', true)
    sounds.buttonPressAudio.play()
}

function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
}

function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute){
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()
}

export {toggleRunning, set, reset, toggleMusic}