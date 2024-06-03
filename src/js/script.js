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

catalogDropright?.addEventListener('click' , (e)=> {
    e.preventDefault();
    submenuList2.classList.toggle('open')
})
overlay.addEventListener('click' , ()=> {
    submenuList1.classList.remove('open');
    submenuList2.classList.remove('open')
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

const productSlider = document.querySelector('.products-slider');


if (productSlider) {
    const swiperProducts = new Swiper(productSlider, {
        loop: true,
        slidesPerView:1,
        spaceBetween: 20,
        breakpoints: {
            360: {
                slidesPerView: 1.2,
            },
            390: {
                slidesPerView: 1.3,
            },
            450: {
                slidesPerView: 1.5,
            },
            580:{
                slidesPerView: 2,
            },
            720: {
                slidesPerView: 2.5,
            },
            858 : {
                slidesPerView:3,
            },
            1000: {
                slidesPerView: 3.5,
            },
            1145: {
                slidesPerView: 4,
            },
            1288: {
                slidesPerView: 4.5,
            },
            1408: {
                slidesPerView:5
            }
        }

    });
}

const advantagesSlider = document.querySelector('.advantages-swiper');

if (advantagesSlider) {
    const swiperAdv = new Swiper(advantagesSlider, {
        loop: true,
        slidesPerView:1,
        spaceBetween: 20,
        breakpoints: {
            580:{
                slidesPerView: 2,
            },
            858 : {
                slidesPerView:3,
            },
            1145: {
                slidesPerView: 4,
            },
        },
        pagination: {
            el: '.advantages-swiper .custom-swiper-pagination',
            clickable: true
        }

    });
}

const technologySlider = document.querySelector('.technology-swiper');

if (technologySlider) {
    const swiperAdv = new Swiper(technologySlider, {
        loop: true,
        slidesPerView:1,
        spaceBetween: 20,
        breakpoints: {
            580:{
                slidesPerView: 2,
            },
            858 : {
                slidesPerView:3,
            },
            1145: {
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: '.technology-wrap .technology-next',
            prevEl: '.technology-wrap .technology-prev',
        },
        scrollbar: {
            el: ".technology-wrap .swiper-scrollbar",
        },

    });
}



// accordeon


const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest(".box");
    let currentContent = e.target.nextElementSibling;
    let currentHide =  e.target.closest(".box").querySelector('.hide');

    console.log(currentHide);

    currentBox.classList.toggle("active");

    if (currentHide) {
        currentHide.addEventListener('click' , (e)=> {
            e.stopPropagation();
            e.preventDefault()
            currentBox.classList.remove('active');
            currentContent.style.maxHeight = 0;
        })
    }
    if (currentBox.classList.contains("active")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    } else {
        currentContent.style.maxHeight = 0;
    }
}

const newsSlider = document.querySelector('.news-slider');

if (newsSlider) {
    const swiperNews = new Swiper(newsSlider, {
        loop: true,
        slidesPerView:1,
        spaceBetween: 10,
        breakpoints: {
            420:{
                slidesPerView: 1.2,
            },
            520:{
                slidesPerView: 1.5,
            },
            680:{
                slidesPerView: 2,
            },
            858 : {
                slidesPerView:2.5,
            },
            1100 : {
                slidesPerView:3.2,
            },
            1200: {
                slidesPerView: 3.5,
            },
            1340: {
                slidesPerView: 4,
            },
        },

    });
}

// catalog filter

const catalogFilterItems = document.querySelectorAll('.catalog-filter ul li');

const clearActiveFilterItems =()=> {
    catalogFilterItems?.forEach(el=> {
        if(el.classList.contains('active')) {
            el.classList.remove('active')
        }
    })
}
catalogFilterItems?.forEach(el=> {
    el.addEventListener('click' , ()=> {
        clearActiveFilterItems();
        el.classList.add('active')
    })
})