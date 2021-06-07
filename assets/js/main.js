const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const controls = $$('.control__icon');
controls.forEach(control => {
    control.onclick = () => {
        const panel = control.nextElementSibling;

        control.classList.toggle('active');
        panel.classList.toggle('active');


        controls.forEach(ct => {
            if (ct !== control && ct.classList.contains('active')) {
                ct.classList.remove('active');
                ct.nextElementSibling.classList.remove('active');
            }
        });
    }
});

const searchIcon = $('.fa-search');
const cartIcon = $('.fa-cart-plus');
const userIcon = $('.fa-user');

document.addEventListener('click', e => {
    let targetElement = e.target;
    if (e.target != searchIcon && !e.target.matches('.search__control')) {
        searchIcon.classList.remove('active');
        searchIcon.nextElementSibling.classList.remove('active');
    }

    if (targetElement != cartIcon) {
        do {
            if (targetElement === cartIcon.nextElementSibling) {
                return;
            }
            // tìm parent element
            targetElement = targetElement.parentNode;
        } while (targetElement);
        cartIcon.classList.remove('active');
        cartIcon.nextElementSibling.classList.remove('active');
    }
});

document.addEventListener('click', e => {
    let targetElement = e.target;
    if (targetElement != userIcon) {
        do {
            if (targetElement === userIcon.nextElementSibling) {
                return;
            }
            // tìm parent element
            targetElement = targetElement.parentNode;
        } while (targetElement);
        userIcon.classList.remove('active');
        userIcon.nextElementSibling.classList.remove('active');
    }
});
// FAQ
function removeClass() {
    $('.faq__question.active').classList.remove('active');
    $('.faq__answer.active').style.maxHeight = 0;
    $('.faq__answer.active').classList.remove('active');
}
const faqQuestions = $$('.faq__question');
const faqAnswers = $$('.faq__answer');

faqQuestions.forEach(question => {
    question.nextElementSibling.style.maxHeight = 0;
    question.addEventListener('click', e => {
        const panel = question.nextElementSibling;
        height = panel.scrollHeight;

        if (!!$('.faq__question.active')) {
            if ($('.faq__question.active') === e.target) {
                removeClass();
                return;
            };
            removeClass();
        }

        question.classList.add('active');
        panel.classList.add('active');
        panel.style.maxHeight = `${height + 32}px`;
    })
});

document.addEventListener('click', e => {
    const target = e.target;
    if (!target.matches('.faq__question')) {
        removeClass();
    }

    // Youtube
    if (target.matches('.faq__ytb-icon')) {
        window.open("https://www.youtube.com/watch?v=xypzmu5mMPY");
    }
})
