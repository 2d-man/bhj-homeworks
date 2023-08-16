const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

for (let tooltip of tooltips) {
    tooltip.addEventListener('click', (e) => {
        e.preventDefault();
        if (tooltip.querySelector('.tooltip_active') === null) {
            console.log(tooltip.querySelector('.tooltip') === null);
            const el = document.createElement('div');
            el.classList.add('tooltip');
            el.innerText = tooltip.title;

            if (el) {
                console.log('создался: ', el)
            }
            el.classList.toggle('tooltip_active');
            tooltip.insertAdjacentElement('afterEnd', el);

        } else {
            console.log(tooltip.querySelector('.tooltip') === null);
            tooltip.querySelector('.tooltip').classList.toggle('tooltip_active');
        }

    });
}