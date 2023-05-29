export class eror {
    constructor(use1, use2) {
        use1 = this.reg()
        use2 = this.btnClick()
    }

    hideCard() {
        function deptf() {
            card.classList.add('hide')
            const elementDel = document.querySelector('.er-with-log')
            elementDel.remove()
            inpEma.value = ''
            inpPas.value = ''
        }

        overlay.addEventListener('click', function (e) {
            e.target.classList.add('hide')
            deptf()
        })

        closeCard.addEventListener('click', function (e) {
            deptf()
            e.preventDefault()
            overlay.classList.add('hide')
        })
    }

    showCard() {
        card.classList.remove('hide')
        overlay.classList.remove('hide')
        card.classList.add('sticky1')
    }

    reg() {
        reg.addEventListener('click', function (e) {
            this.showCard()
            this.hideCard()
        })
    }

    createElement(text) {
        const element = document.createElement('div')
        element.setAttribute('class', 'er-with-log')
        element.textContent = text
        erDiv.appendChild(element)
    }

    btnClick() {
        btn.addEventListener('click', function (e) {
            e.preventDefault()
            const checkNameObj = function (nameArg) {
                return users.some(el => el.email === nameArg)
            }
            const userEmail = inpEma.value
            const userPassword = inpPas.value
            if (userPassword.length < 8) this.createElement(`Password is very short`)
            else if (!userEmail.includes('@')) this.createElement(`Email doesn't have '@' symbol'`)
            else if (checkNameObj(userEmail)) this.createElement(`This login already used`)
            else {
                users.push({
                    email: inpEma.value,
                    pass: inpPas.value
                })
            }
        })
    }
}










