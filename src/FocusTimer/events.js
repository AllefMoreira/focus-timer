
import * as el from './elements.js'
import * as actions from './actions.js'
import state from './state.js'
import { updateDisplay } from './timer.js'

export function registerControls(){
    el.controls.addEventListener('click', (event) =>{
        const action = event.target.dataset.action

        if(typeof actions[action] != 'function'){
            return
        }

        //podemos executar funções da seguinte maneira: [nomeFunção]()
        actions[action]()
    })
}

export function setMinutes(){
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ''
    })

    // o comando /\d/ irá verificar a tecla que foi pressionada, e só aceitará caso seja um número. o nome é expressão irregular
    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    //o evento blur é o oposto do focus, ou seja, quando sai do foco
    el.minutes.addEventListener('blur', (event) =>{
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        updateDisplay(state.minutes, state.seconds)
        
        el.seconds.focus()
    })
}

export function setSeconds(){
    el.seconds.addEventListener('focus', () => {
        el.seconds.textContent = ''
    })

    // o comando /\d/ irá verificar a tecla que foi pressionada, e só aceitará caso seja um número. o nome é expressão irregular
    el.seconds.onkeypress = (event) => /\d/.test(event.key)

    //o evento blur é o oposto do focus, ou seja, quando sai do foco
    el.seconds.addEventListener('blur', (event) =>{
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.seconds = time

        updateDisplay(state.minutes, state.seconds)
    })
}