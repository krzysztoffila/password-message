const input = document.querySelector('input');
const passwords = ['user', 'bios'];
const messages = ["Nie ma mnie w domu", "different message"];
const div = document.querySelector('div')

input.addEventListener('input', function (e) {
    div.textContent = ""
    const text = e.target.value;
    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index]
            e.target.value = ''
        }
    })
})

input.addEventListener('focus', e => {
    e.target.classList.add('active')
})
input.addEventListener('blur', e => {
    e.target.classList.remove('active')
})