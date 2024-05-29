// theme-switch

const themeSwitchInput = document.querySelector('.switch input');
const lightThemeIcon = document.querySelector('.light-icon');
const darkThemeIcon = document.querySelector('.dark-icon');
const body = document.querySelector('body');

if (themeSwitchInput) {
    themeSwitchInput.addEventListener('input' , () => {
        if (themeSwitchInput.checked) {
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
}

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