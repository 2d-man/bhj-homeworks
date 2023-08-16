const tasksList = document.querySelector('.tasks__list');
const form = document.querySelector('.tasks__control');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.checkValidity && form.querySelector('.tasks__input').value) {
        const task = document.createElement('div');
        tasksList.appendChild(task);
        task.classList.add('task');
        task.insertAdjacentHTML('afterBegin',
            `<div class="task__title">${form.querySelector('.tasks__input').value}</div>
        <a href="#" class="task__remove">&times;</a>`);

        task.querySelector('.task__remove').addEventListener('click', () => {
        task.remove();
        });
        form.reset();
    }
});