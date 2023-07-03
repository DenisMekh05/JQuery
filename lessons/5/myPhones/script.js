const users = JSON.parse(localStorage.getItem(users))
const curentUser = localStorage.getItem(curentUser)
const phonesHTML = document.querySelector('.phones')

let phones = [

]

function updateSite() {
    for (let user of users) {
        if (user.username == curentUser) {
            phones = user.phones
        }
    }
    for (let phone of phones) {
        phonesHTML.innerHTML += `<div class="phone">
                                    <img src="${phone.img}" alt="">
                                    <div class="info">
                                        <p><b>Mark :</b>${phone.mark} ${phone.markName}</p>
                                        <p><b>Price: </b>$${phone.price}</p>
                                        <p><b>RAM: </b>${phone.RAM}GB</p>
                                    </div>
                                    <div class="options">
                                        <button class="remove-phone">remove phone</button>
                                        <button class="change-phone">change phone</button>
                                    </div>
                                </div> `
    }
} 