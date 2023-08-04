const blocks = Array.from(document.querySelectorAll('.reveal'));

function isVisible (el) {
    const { top, bottom } = el.getBoundingClientRect();

    if ((bottom < 0) || (top > window.innerHeight)) {
        return false
    }
    return true
}

document.addEventListener('scroll', () => {
    for (let block of blocks) {
        // console.log(block.innerText, isVisible(block));
        if (isVisible(block)) {
            block.classList.add('reveal_active');
        } else {
            block.classList.remove('reveal_active');
        }
    }
});