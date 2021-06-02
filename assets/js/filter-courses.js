const coursesController = document.querySelectorAll('.courses__type');
const items = document.querySelectorAll('.course-filter');
coursesController.forEach(course => {
    course.addEventListener('click', e => {
        coursesController.forEach(cs => {
            if (cs !== course && cs.classList.contains('active')) {
                cs.classList.remove('active');
                course.classList.add('active');
            };
        });

        const filter = e.target.dataset.filter;
        
        items.forEach(item => {
            if (filter === 'all') {
                item.style.display = 'block';
            } else {
                if (item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        })
    })
})