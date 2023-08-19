const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

const setPosition = (el, top, left) => {

    switch (el.dataset.position) {
        case 'top':
            el.style.cssText = `top: ${top - 30}px; left: ${left}px`;
            break;
        case 'bottom':
            el.style.cssText = `top: ${top + 20}px; left: ${left}px`;
            break;
        case 'left':
            el.style.cssText = `top: ${top}px; left: ${left - el.getBoundingClientRect().width}px`;
            break;
        case 'right':
            el.style.cssText = `top: ${top}px; left: ${left + el.previousSibling.getBoundingClientRect().width}px`;
            break;
    }
    return el;
}

const createTip = (tooltip) => {
    const el = document.createElement('div');
    el.classList.add('tooltip');
    el.innerText = tooltip.title;
    el.classList.toggle('tooltip_active');
    el.dataset.position = 'bottom'; // для настройки места появления подсказки
    return el;
}

for (let tooltip of tooltips) {

    document.addEventListener('scroll', () => {
        if (document.querySelector('.tooltip_active') !== null) {
            document.querySelector('.tooltip_active').classList.remove('tooltip_active');
        }
    });

    tooltip.addEventListener('click', (e) => {

        let tip = tooltip.nextElementSibling;
        let top = tooltip.getBoundingClientRect().top;
        let left = tooltip.getBoundingClientRect().left;

        e.preventDefault();

        for (let i = 0; i < document.querySelectorAll('.tooltip').length; i++) {
            if (document.querySelectorAll('.tooltip')[i] !== tip) {
                document.querySelectorAll('.tooltip')[i].classList.remove('tooltip_active');
            }
        }

        if (!tip || !tip.classList.contains('tooltip')) {
            let el = createTip(tooltip);
            tooltip.insertAdjacentElement('afterEnd', el);
            setPosition(el, top, left);
        }

        if (tip && tip.classList.contains('tooltip')) {
            tip.classList.toggle('tooltip_active');
            setPosition(tip, top, left);
        }

    });
}