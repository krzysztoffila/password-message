const input = document.querySelector('input');
const password = 'user';
const message = "Nie ma mnie w domu";
const div = document.querySelector('div')

input.addEventListener('input', function (e) {
    // console.log(this)
    if (this.value === password) {
        div.textContent = message
        e.target.value = ''
    } else {
        div.textContent = ""
    }
})

input.addEventListener('focus', e => {
    e.target.classList.toggle('active')
})
input.addEventListener('blur', e => {
    e.target.classList.toggle('active')
})