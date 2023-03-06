const input = document.querySelector('input');
const password = 'user';
const message = "Nie ma mnie w domu";

input.addEventListener('input', e => {
    if (e.target.value === password) {
        alert(message)
    }
})