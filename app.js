signUpLink = document.querySelector('.link .signup-link');
signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    let wrap = document.querySelector('.wrapper');
    wrap.classList.add('animated-signin');
    wrap.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    let wrap = document.querySelector('.wrapper');
    wrap.classList.add('animated-signup');
    wrap.classList.remove('animated-signin');
});
