
let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')


buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light') //documentElement é o nosso HTML

    const mode = darkMode ? 'Light' : 'Dark'

    event.currentTarget.querySelector('span').textContent = mode + ' mode ativado!'

    darkMode = !darkMode
})

