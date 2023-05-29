export function showText() {
    btnSelect.forEach(el => {
        el.addEventListener('click', function () {
            nextInfo.forEach(el => { el.classList.remove('active') })
        })
    })
};



