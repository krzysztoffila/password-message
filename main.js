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