const setLevelEl = document.querySelector('.set-level-box');
document.querySelector('svg').addEventListener('click', e=>{
    e.preventDefault();
    e.stopPropagation();

    const { target: el } = e;
    const rect = el.getBoundingClientRect();
    const { id } = el;
    console.log({
        el,
        id,
        rect
    });

    setLevelEl.style.top = rect.top + 'px'
    setLevelEl.style.left = rect.left + 'px'
});