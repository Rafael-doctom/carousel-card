let images = document.querySelectorAll('[data-js="carousel__item"]')
let nextButton = document.querySelector('[data-js="next-button"]')

let inicial = 0

nextButton.addEventListener('click', () => {

    if (inicial === images.length - 1) {
        inicial = 0
    } else {
        inicial++
    }


    console.log(inicial)
    images.forEach(imagem => {
        imagem.classList.remove('carousel-item-visible')
    })

    images[inicial].classList.add('carousel-item-visible')
})