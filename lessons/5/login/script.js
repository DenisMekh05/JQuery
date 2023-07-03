const inputs = $('input')
const login = $('.login')

let curentUser = 0

let users = [
    {
        username: 'test',
        password: 'test',
        phones: [
            {
                id: 1,
                mark: 'Samsung',
                markName: 'S23 Ultra',
                RAM: 12,
                price: 985,
                img: 'http://127.0.0.1:5500/myPhones/img/sansumgS23ultra.png'
            }
        ]
    }
]
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users))
}

login.addEventListener('click', (event) => {
    event.preventDefault()
    users = JSON.parse(localStorage.getItem('users'))
    if (users.some(user => user.username == inputs[0].value && user.password == inputs[1].value)) {
        curentUser = {
            username: inputs[0].value,
            password: inputs[1].value
        }
        localStorage.setItem('curentUser', JSON.stringify(curentUser))
        window.location.href = '../theSite/index.html'
    } else {
        alert('user not found')
    }
})
document.querySelector('.no-user').addEventListener('click', () => {
    location.href = '../register/index.html'
})