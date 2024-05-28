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