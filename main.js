document.addEventListener('DOMContentLoaded', () => {

    $(document).ready(function () {
        let navbar = $('.navbar')

        let navbarHeight = navbar.height()

        $(window).scroll(function () {
            let scroll = $(window).scrollTop()

            if (scroll > navbarHeight) {
                navbar.addClass('navbar-scrolled')
            } else {
                navbar.removeClass('navbar-scrolled')
            }
        })
    })

    window.addEventListener('resize', function () {
        let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        let navbarNavList = document.getElementById('navbarNavList')
        let navItems = navbarNavList.querySelectorAll('li')
        navItems.forEach(function (item) {
            if (windowWidth < 992) { // Ajustar el ancho en el que deseas aplicar el mb-3
                item.classList.add('mb-3')
            } else {
                item.classList.remove('mb-3')
            }
        })
        if (windowWidth < 992) { // Ajustar el ancho en el que deseas aplicar el mt-4
            navbarNavList.classList.add('mt-4')
        } else {
            navbarNavList.classList.remove('mt-4')
        }
    })

    const glightbox = GLightbox({
        selector: '.glightbox'
    })

    new Swiper('.clients-slider', {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 60
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 80
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 120
            }
        }
    })

})


function changeActive(element) {
    let navLinks = document.querySelectorAll('.navbar-nav .nav-link')
    navLinks.forEach(function (link) {
        link.classList.remove('active')
    })

    element.classList.add('active')
}
