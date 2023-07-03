const logOut = document.querySelector('#log-out')
const logIn = document.querySelector('#log-in')
const myPhones = document.querySelector('#my-phones')

const user = document.querySelector('#curent-user')

let curentUser = localStorage.getItem(curentUser)

user.innerHTML = `User: ${curentUser.username}`

logOut.addEventListener('click', () => {
    curentUser = 0
    user.innerHTML = "User: guest"
    this.style.display = "none"
})
    (function () {
        if (curentUser !== 0) {
            logIn.style.display = "none"
            myPhones.style.display = "inline-block"
        }
    })