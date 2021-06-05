const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.course-header__title');
const panes = $$('.tab-item');
tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function() {
        $('.course-header__title.active').classList.remove('active');
        $('.tab-item.active').classList.remove('active');

        this.classList.add('active');
        pane.classList.add('active');
    }
});

const lessons = $$('.content__lesson');
const lessonDetails = $$('.content__lesson-detail');

lessons.forEach((lesson, index) => {
    const pane = lessonDetails[index];
    pane.style.maxHeight = 0;
    lesson.onclick = function() {
        const height = pane.scrollHeight;
        
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            pane.classList.remove('active');
            pane.style.maxHeight = 0;
        } else {
            this.classList.add('active');
            pane.classList.add('active');
            pane.style.maxHeight = `${height + 32}px`;
        }

        lessons.forEach(lesson => {
            if (lesson !== this && lesson.classList.contains('active')) {
                lesson.classList.remove('active');
                lesson.nextElementSibling.classList.remove('active');
                lesson.nextElementSibling.style.maxHeight = 0;
            }
        })
    }
});