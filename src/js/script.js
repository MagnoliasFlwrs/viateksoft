// theme-switch

const themeSwitchInputs = document.querySelectorAll('.switch input');
const body = document.querySelector('body');


themeSwitchInputs?.forEach(el => {
    el.addEventListener('input' , ()=>{
        const lightThemeIcon = el.closest('.switch-theme').querySelector('.light-icon');
        const darkThemeIcon = el.closest('.switch-theme').querySelector('.dark-icon');
        if (el.checked) {
            lightThemeIcon.classList.remove('active');
            darkThemeIcon.classList.add('active');
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
        } else {
            lightThemeIcon.classList.add('active');
            darkThemeIcon.classList.remove('active');
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
        }
    })
})


// catalog-btn

const catalogBtn = document.querySelector('.catalog-btn');
const overlay = document.querySelector('.overlay');
const submenuList1 = document.querySelector('.submenu-list-1');
const catalogDropright = submenuList1.querySelector('.header-dropright')
const submenuList2 = document.querySelector('.submenu-list-2');

catalogBtn?.addEventListener('click' , (e) => {
    submenuList1.classList.add('open');
    overlay.classList.add('open');
})
catalogDropright?.addEventListener('mouseover' , (e)=> {
    submenuList2.classList.add('open')
})
catalogDropright?.addEventListener('mouseout' , (e)=> {
    submenuList2.classList.remove('open')
})
overlay.addEventListener('click' , ()=> {
    submenuList1.classList.remove('open');
    overlay.classList.remove('open');
})

// mobile-menu

const burger = document.querySelector('.burger-button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtns = document.querySelectorAll('.mobile-menu .close-btn');
const droprightItems = document.querySelectorAll('.mobile-menu .dropright');
const backBtns = document.querySelectorAll('.mobile-menu .back');

burger?.addEventListener('click' , ()=> {
    mobileMenu.classList.add('active')
})

closeBtns?.forEach(el=> {
    el.addEventListener('click' , ()=> {
        mobileMenu.classList.remove('active')
    })
})

droprightItems?.forEach(el=> {
    el.addEventListener('click' , (e)=> {
        e.preventDefault();
        let currScreen = el.closest('li').querySelector('.screen')
        currScreen.classList.add('active');
    })
})
backBtns.forEach(el=> {
    el.addEventListener('click' , (e)=> {
        e.stopPropagation();
        let droprightScreen = e.target.closest('.screen');
        droprightScreen.classList.remove('active');
    })
})


const mainSwiper = document.querySelector('.main-banner-swiper');
const mainSwiperMobile = document.querySelector('.main-banner-mobile-swiper');

const customPagination = document.querySelectorAll('.main-banner-pagination');

customPagination.forEach(el => {
    let bullets = el.querySelectorAll('.pagination-bullet');

    function clearBulletsClass() {
        bullets.forEach(el=> {
            el.classList.remove('active')
        })
    }
    bullets.forEach((bull , i) => {
        bull.addEventListener('click' , (e)=> {
            clearBulletsClass()
            mainPageSwiper.slideTo(i);
        })
    })
})

const mainPageSwiper = new Swiper(mainSwiper, {
    loop: true,
    on: {
        slideNextTransitionEnd: function (swiper) {
            const activeSlide = swiper.slides[swiper.activeIndex];
            const previousActiveLink = activeSlide.querySelector(".active");
            if (previousActiveLink) {
                previousActiveLink.classList.remove("active");
            }
            customPagination.forEach(el => {
                let bullets = el.querySelectorAll('.pagination-bullet');

                function clearBulletsClass() {
                    bullets.forEach(el=> {
                        el.classList.remove('active')
                    })
                }
                clearBulletsClass()
            })
            const paginationBulletSlide = activeSlide.closest('.banner-swiper-container').querySelector(`.pagination-bullet-${swiper.realIndex}`);
            console.log(swiper.realIndex)
            paginationBulletSlide.classList.add("active");

        },
        slidePrevTransitionEnd: function (swiper) {
            const activeSlide = swiper.slides[swiper.activeIndex];
            const previousActiveLink = activeSlide.querySelector(".active");
            if (previousActiveLink) {
                previousActiveLink.classList.remove("active");
            }
            customPagination.forEach(el => {
                let bullets = el.querySelectorAll('.pagination-bullet');

                function clearBulletsClass() {
                    bullets.forEach(el=> {
                        el.classList.remove('active')
                    })
                }
                clearBulletsClass()
            })
            const paginationBulletSlide = activeSlide.closest('.banner-swiper-container').querySelector(`.pagination-bullet-${swiper.realIndex}`);
            console.log(swiper.realIndex)
            paginationBulletSlide.classList.add("active");
        },
    },
    navigation: {
        nextEl: '.swiper-block .main-banner-next',
        prevEl: '.swiper-block .main-banner-prev',
    },
});

if (mainSwiperMobile) {
    const swiper = new Swiper(mainSwiperMobile, {
        loop: true,
        pagination: {
            el: '.main-banner-mobile-swiper .custom-swiper-pagination',
            clickable:true
        },
    });
}
