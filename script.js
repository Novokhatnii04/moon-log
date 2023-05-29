import * as Shoppingcard from './textSlide.js'

let ACTIVE_USER
let currentUser = undefined
const users = [{
    email: 'bb@',
    pass: '123',
    basket: []
}, {
    email: 'zz@',
    pass: '1',
    basket: []
}, {
    email: 'xx@',
    pass: '1234567890',
    basket: []
}];

// Local Storage 
const USERS_KEY = 'usersObj'
const localStorageUsers = JSON.parse(localStorage.getItem(USERS_KEY)) || []
if (!localStorageUsers) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

//click on any exercise in menu and switch to this window
headerContent.addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.classList.contains('nav_link')) {
        const href = e.target.getAttribute('href')
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
    }
})

btn1.addEventListener('click', function (e) {
    e.preventDefault()
    section1.scrollIntoView({ behavior: 'smooth' })
})

//Add transitionX for sections
function intersecEveryInfo(observe, swt) {
    function transitionFotInfo(el) {
        const every = el[0]
        if (every.isIntersecting) observe.classList.add('about', swt)
    }
    const observerForInfo = new IntersectionObserver(transitionFotInfo, {
        root: null,
        threshold: 0.1
    })
    observerForInfo.observe(observe)
}
intersecEveryInfo(firstInfoCase)
intersecEveryInfo(secondInfoCase, 'left')
intersecEveryInfo(thirtyInfoCase)

//import function from textSlide.js
Shoppingcard.showText()

//Functional for textSlider
function showInfo() {
    btnSelect.forEach(el => {
        el.addEventListener('click', function (btn) {
            let res = +Object.values(btn.target.dataset)
            if (res === 0) numForShow(inf1, inf2, inf0)
            if (res === 1) numForShow(inf0, inf2, inf1)
            if (res === 2) numForShow(inf0, inf1, inf2)
            suka(res)
        })
    })

    function numForShow(arg0, arg1, arg2) {
        arg0.classList.add('hide')
        arg1.classList.add('hide')
        arg2.classList.remove('hide')
    }

    function suka(arg) {
        btnSelect.forEach(el => el.classList.remove('tab'))
        btnSelect[arg].classList.add('tab')
    }

};

showInfo()

//This function are created html code with help him , we can see card where we are loging
function createCard(event, inpEm, inpPa, btn) {
    return `<div class="card sticky1">
    <div class="close">
    <h4 class="title">${event}</h4>
    <h4><a href="#" class="closeX">x</a></h4>
    </div>
    <form>
    <div class="field">
    <svg class="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z">
    </path>
    </svg>
    <input autocomplete="off" id="logemail" placeholder="Email"
    class="input-field ${inpEm}" name="logemail" type="email">
    </div>
    <div class="field">
    <svg class="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z">
    </path>
    </svg>
    <input autocomplete="off" id="logpass" placeholder="Password"
    class="input-field ${inpPa}" name="logpass" type="password">
    </div>
    <button class="${btn} btnStyle" type="submit">Login</button>
    </form>
    <div class="er-with-log-div"></div>`
}

//This function will be close everything icons when we will use this moments
function close() {
    document.addEventListener('keydown', function (e) {
        if (e.which === 27) {
            overlay.classList.add('hide')
            document.querySelector('.card').classList.add('hide')
        }
    })

    document.querySelector('.closeX').addEventListener('click', function (e) { 
        e.preventDefault()
        overlay.classList.add('hide')
        document.querySelector('.card').classList.add('hide')
    })

    document.querySelector('.overlay').addEventListener('click', function (e) {
        e.preventDefault()
        overlay.classList.add('hide')
        document.querySelector('.card').classList.add('hide')
    })

}

//this func are created error text for cards
function createErrorText(text) {
    const element = document.createElement('div')
    element.setAttribute('class', 'er-with-log')
    element.textContent = text
    const erDiv = document.querySelector('.er-with-log-div')
    erDiv.appendChild(element)
}

//Settings for reg or log buttons
function settingsForRegLog(e, event, inpEm, inpPa, btn) {
    overlay.classList.remove('hide')
    e.preventDefault()
    divForMenu.innerHTML = createCard(event, inpEm, inpPa, btn)
    close()
}

//reg implementation
reg.addEventListener('click', function (e) {
    settingsForRegLog(e, 'Register!', 'inputforlogin', 'inputforpassword', 'btnGG')
    document.querySelector('.btnGG').addEventListener('click', function (e) {
        e.preventDefault()
        const checkNameObj = function (nameArg) {
            return localStorageUsers.some(el => el.email === nameArg)
        }
        const userEmail = document.querySelector('.inputforlogin').value
        const userPassword = document.querySelector('.inputforpassword').value
        if (userPassword.length < 3) createErrorText(`Password is very short`)
        else if (!userEmail.includes('@')) createErrorText(`Email doesn't have '@' symbol'`)
        else if (checkNameObj(userEmail)) createErrorText(`This login already used`)
        else {
            localStorageUsers.push({
                email: userEmail,
                pass: userPassword.toString(),
                basket: []
            })
            localStorage.setItem(USERS_KEY, JSON.stringify(localStorageUsers))
            document.querySelector('.card').classList.add('hide')
            overlay.classList.add('hide')
        }
    })
})

//log implementation
log.addEventListener('click', function (e) {
    settingsForRegLog(e, 'Login!', 'inputForSignLog', 'inputForSignPas', 'btnBB')
    document.querySelector('.btnBB').addEventListener('click', function (e) {
        e.preventDefault()
        const userEmail = document.querySelector('.inputForSignLog').value
        const userPassword = document.querySelector('.inputForSignPas').value
        const findLogin = function (arg) {
            return arg.some(el => userEmail === el.email)
        }
        const matchPassword = function (arg) {
            return arg.some(el => userPassword === el.pass)
        }
        if (!findLogin(localStorageUsers)) createErrorText('This login does not exist')
        else if (!matchPassword(localStorageUsers)) createErrorText('Password is wrong')
        else {
            document.querySelector('.card').classList.add('hide')
            //add user interface
            ACTIVE_USER = localStorageUsers.find(el => {
                return el.email === userEmail
            })
            overlay.classList.add('hide')
            logBtn.classList.add('hide')
            userName.classList.remove('hide')
            currentUser = ACTIVE_USER.email
            personName.textContent = currentUser
            basketContent.classList.remove('hide')
            getItems()
        }
    })
})

//implementation exit
exit.addEventListener('click', function (e) {
    e.preventDefault()
    userName.classList.add('hide')
    logBtn.classList.remove('hide')
    currentUser = undefined
    basket.classList.add('hide')
    ACTIVE_USER.basket = []
    ACTIVE_USER = undefined
    document.querySelectorAll('.item_for_orders').forEach(el => el.remove())
    iconsWithProduct.classList.add('hide')
    iconsWithProduct.textContent = 0
})

//add to basket any items
const handleClick = function (event) {
    createItemsForBasket(event);
    basket.classList.remove('hide');
    xclsoe.addEventListener('click', function (e) {
        e.preventDefault();
        basket.classList.add('hide');
    });
};

//When we are click on this icons , we're get item in our basket
function getItems() {
    if (ACTIVE_USER) {
        card__item.forEach(el => {
            el.removeEventListener('click', handleClick);
        });

        card__item.forEach(el => {
            el.addEventListener('click', handleClick);
        });
    }
}

//Tihs function wiil be created items for basket if we are click on her
function createItemsForBasket(event) {
    const divForItems = document.createElement('div')
    const nameItem = document.createElement('h3')
    const priceItem = document.createElement('h3')
    const order = [event.target.parentNode.parentNode.parentNode.children[1].innerText, event.target.parentNode.parentNode.parentNode.children[2].innerText]
    divForItems.setAttribute('class', 'item_for_orders')
    card__content.appendChild(divForItems)
    divForItems.appendChild(nameItem).textContent = order[0]
    divForItems.appendChild(priceItem).textContent = order[1]
    ACTIVE_USER.basket.push(Number(order[1].replace('$', '')))
    console.log(ACTIVE_USER.basket)
    const result = ACTIVE_USER.basket.reduce((acc, item) => acc += item, 0).toFixed(2)
    document.querySelector('.priceNum').textContent = result + '$'
    iconsWithProduct.classList.remove('hide')
    iconsWithProduct.textContent = ACTIVE_USER.basket.length
}

//Order products 
function implemenatationBasketIfUserAreLoggined() {
    orderItems.forEach(el => {
        el.addEventListener('click', function (e) {
            e.preventDefault()
            if (currentUser) basket.classList.remove('hide')
        })
    })

    //Gard close
    cardAndPrice.forEach(el => {
        el.addEventListener('click', function (e) {
            e.preventDefault()
        })
    })
}

implemenatationBasketIfUserAreLoggined()

console.log('hello')
