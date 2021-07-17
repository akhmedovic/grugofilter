const modalCloseBtn = document.querySelector('.modal-close')

const shadow = document.querySelector('.shadow')

const modal = document.querySelector('.modal')


modalCloseBtn.addEventListener('click', function() {
    modal.style.display = 'none'
    shadow.style.display = 'none'
})

const openmodal = document.querySelector('.open')

openmodal.addEventListener('click', function() {
    modal.style.display = 'block'
    shadow.style.display = 'block'
})
