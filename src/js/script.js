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


const thumbsGallery = document.querySelector('.gallery-mini');

if (thumbsGallery) {
    let swiper4 = new Swiper(".gallery-mini", {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        direction: "horizontal",
        navigation: {
            nextEl: ".gallery-mini-button-next",
            prevEl: ".gallery-mini-button-prev",
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                direction: "horizontal",
            }
        },
    });
    let swiper5 = new Swiper(".gallery", {
        spaceBetween: 10,
        direction: 'horizontal',
        navigation: {
            nextEl: ".gallery-button-next",
            prevEl: ".gallery-button-prev",
        },
        thumbs: {
            swiper: swiper4,
        },
    });
}


// counter


const minusBtns = document.querySelectorAll('.counter-wrap .minus');
const plusBtns = document.querySelectorAll('.counter-wrap .plus');

if(minusBtns) {
    minusBtns.forEach(el=> {
        el.addEventListener('click' , (e) => {
            e.stopPropagation();
            e.preventDefault();
            let currCounter = e.target.closest('.counter-wrap').querySelector('.counter');
            if (currCounter.innerHTML > 0) {
                currCounter.innerHTML = +currCounter.innerHTML - 1;
            }
        })
    })
}
if(plusBtns) {
    plusBtns.forEach(el=> {
        el.addEventListener('click' , (e) => {
            e.stopPropagation();
            e.preventDefault();
            let currCounter = e.target.closest('.counter-wrap').querySelector('.counter');
            if (currCounter.innerHTML >= 0) {
                currCounter.innerHTML = +currCounter.innerHTML + 1;
            }
        })
    })
}


// sms-modal

const smsModal = document.querySelector('.sms-modal');
const smsModalCloseBtn =  document.querySelector('.sms-modal .close-btn');
const showSmsModalBtns = document.querySelectorAll('.show-sms-modal');

showSmsModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault()
        smsModal.classList.add('open');
        overlay.classList.add('open');
    })
})
smsModalCloseBtn?.addEventListener('click' , ()=> {
    smsModal.classList.remove('open');
    overlay.classList.remove('open');
})
overlay.addEventListener('click' , ()=> {
    smsModal.classList.remove('open');
    overlay.classList.remove('open');
})

// order-modal


const showOrderModalBtns = document.querySelectorAll('.show-order-modal');
const orderModal = document.querySelector('.order-modal');
const orderModalclose = document.querySelector('.order-modal .close-btn')

showOrderModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault()
        smsModal.classList.remove('open');
        orderModal.classList.add('open');
        overlay.classList.add('open');
    })
})
orderModalclose?.addEventListener('click' , ()=> {
    orderModal.classList.remove('open');
    overlay.classList.remove('open');
})
overlay.addEventListener('click' , ()=> {
    orderModal.classList.remove('open');
    overlay.classList.remove('open');
})

const canceledOrders =  document.querySelectorAll('.box .orders li');
const canceledOrderModal = document.querySelector('.canceled-order-modal')
const canceledOrderModalClose = document.querySelector('.canceled-order-modal .close-btn');

canceledOrders?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault()
        canceledOrderModal.classList.add('open');
        overlay.classList.add('open');
    })
})
canceledOrderModalClose?.addEventListener('click' , ()=> {
    canceledOrderModal.classList.remove('open');
    overlay.classList.remove('open');
})
overlay.addEventListener('click' , ()=> {
    canceledOrderModal.classList.remove('open');
    overlay.classList.remove('open');
})


// logo-svg animation


const animatedLogo = document.querySelector('.animated-svg');
const gradient1 = document.getElementById('paint0_linear_2556_9742');
const gradient2 = document.getElementById('paint2_linear_2556_9742');


animatedLogo.addEventListener('mouseover', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '-321.393');
    animate.setAttribute('to', '0');
    animate.setAttribute('dur', '0.3s');
    animate.setAttribute('fill', 'freeze');
    gradient1.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseout', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '0');
    animate.setAttribute('to', '-321.393');
    animate.setAttribute('dur', '0.3s');
    animate.setAttribute('fill', 'freeze');
    gradient1.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseover', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '-244.556');
    animate.setAttribute('to', '-100.556');
    animate.setAttribute('dur', '0.3s');
    animate.setAttribute('fill', 'freeze');
    gradient2.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseout', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '-100.556');
    animate.setAttribute('to', '-244.556');
    animate.setAttribute('dur', '0.3s');
    animate.setAttribute('fill', 'freeze');
    gradient2.appendChild(animate);
    animate.beginElement();
});