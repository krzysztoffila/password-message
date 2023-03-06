const input = document.querySelector('input');
const password = 'user';
const message = "Nie ma mnie w domu";
const div = document.querySelector('div')

input.addEventListener('input', e => {
    if (e.target.value === password) {
        div.textContent = message
        e.target.value = ''
    } else {
        div.textContent = ""
    }
})

input.addEventListener('focus', e => {
    e.target.classList.add('active')
})
input.addEventListener('blur', e => {
    e.target.classList.remove('active')
})