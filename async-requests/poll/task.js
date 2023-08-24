const question = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');
const table = document.querySelector('.poll');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const poll = JSON.parse(xhr.response);

        question.innerText = poll.data.title

        for (let i = 0; i < Array.from(poll.data.answers).length; i++) {

            const answer = document.createElement('button');
            answers.appendChild(answer);
            answer.classList.add('poll__answer');
            answer.insertAdjacentHTML('afterBegin', `${poll.data.answers[i]}`);

            answer.addEventListener('click', (e) => {
                e.preventDefault();

                const request = new XMLHttpRequest();

                request.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                request.send(`vote=${poll.id}&answer=${i}`);
                alert('Спасибо, ваш голос засчитан!')

                request.addEventListener('readystatechange', () => {

                    if (request.readyState === request.DONE) {

                        const stats = JSON.parse(request.response);
                        table.innerHTML = '';

                        for (let i = 0; i < Array.from(stats.stat).length; i++) {
                            const el = document.createElement('div');
                            table.appendChild(el);
                            el.insertAdjacentHTML('afterBegin', `${stats.stat[i].answer}: ${stats.stat[i].votes}`);
                        }
                    }
                });
            });
        }
    }
});


