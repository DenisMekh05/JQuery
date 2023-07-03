const register = document.querySelector('.register')
const inputs = document.querySelector('input')
const alreadyHaveUser = document.querySelector('.have-account')
const users = [
    {
        username: 'test',
        password: 'test'
    }
]
console.log(inputs)

register.addEventListener('click', (event) => {
    event.preventDefault()
    users.push({
        username: inputs[0].value,
        password: inputs[1].value
    })
    localStorage.setItem('users', JSON.stringify(users))
    location.href = '../login/index.html'
})
alreadyHaveUser.addEventListener('click', () => {
    location.href = '../login/index.html'
})