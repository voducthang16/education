const controls = document.querySelectorAll('.control__icon');
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

const searchIcon = document.querySelector('.fa-search');
const cartIcon = document.querySelector('.fa-cart-plus');
const userIcon = document.querySelector('.fa-user');

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

// Scroll To Top
document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollToTop = document.querySelector('.scroll-to-top')
    header.classList.toggle('sticky', window.scrollY > 76);
    scrollToTop.classList.toggle('active', window.scrollY > 76);
    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0
        });
    })
    
    const img = document.querySelector('.header__logo');
    if (window.scrollY > 76) {
        img.src = 'assets/img/logo.png';
    } else {
        img.src = 'assets/img/logo-white.png';
    };
});

// FAQ
const faqQuestions = document.querySelectorAll('.faq__question');
const faqAnswers = document.querySelectorAll('.faq__answer');

faqQuestions.forEach(question => {
    question.nextElementSibling.style.maxHeight = 0;
    question.addEventListener('click', () => {
        const panel = question.nextElementSibling;
        height = panel.scrollHeight;

        if (question.classList.contains('active')) {
            question.classList.remove('active');
            panel.classList.remove('active');
            panel.style.maxHeight = 0;
        } else {
            question.classList.add('active');
            panel.classList.add('active');
            panel.style.maxHeight = `${height + 32}px`;
        }

        faqQuestions.forEach(faqQuestion => {
            if (faqQuestion !== question && faqQuestion.classList.contains('active')) {
                faqQuestion.classList.remove('active');
                faqQuestion.nextElementSibling.classList.remove('active');
                faqQuestion.nextElementSibling.style.maxHeight = 0;
            }
        })
    })
})

document.addEventListener('click', e => {
    const target = e.target;
    if (!target.matches('.faq__question')) {
        faqQuestions.forEach(ques => {
            ques.classList.remove('active');
        });
        faqAnswers.forEach(ans => {
            ans.classList.remove('active');
            ans.style.maxHeight = 0;
        });
    }

    // Youtube
    if (target.matches('.faq__ytb-icon')) {
        window.open("https://www.youtube.com/watch?v=xypzmu5mMPY");
    }
})
