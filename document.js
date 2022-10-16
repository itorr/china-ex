const setLevelEl = document.querySelector('.set-level-box');
const setLevelTitleEl = setLevelEl.children[0];
const closeAll = e=>{
    setLevelEl.style.display = '';
};
const data = {};
const getAllProvinces = _=>[...地区.children];
const getAllProvinceLevels = _=>getAllProvinces().map(el=>+el.getAttribute('level')||0);
const setHashURL = _=>{
    location.hash = '#' + getAllProvinceLevels().join('');
};
const isProvinceLevelsRegex = /^\d{34}$/;
const getHashURLAndSetProvinceLevels = _=>{
    const hashString = location.hash.substr(1);
    if(!isProvinceLevelsRegex.test(hashString)) return;
    const levels = hashString.split('');
    getAllProvinces().forEach((el,index)=>{
        el.setAttribute('level',levels[index])
    })
};
getHashURLAndSetProvinceLevels();
document.querySelector('svg').addEventListener('click', e=>{
    e.stopPropagation();

    const { target: provinceEl } = e;
    const rect = provinceEl.getBoundingClientRect();
    const { id } = provinceEl;
    data.provinceEl = provinceEl;
    data.id = id;
    console.log({
        provinceEl,
        id,
        rect
    });
    // if(setLevelEl.style.display = 'block') return closeAll();

    setLevelTitleEl.innerHTML = id;
    setLevelEl.style.display = 'block';
    
    setLevelEl.style.left = Math.round(rect.left + rect.width/2 - 74) + 'px';
    setLevelEl.style.top = Math.round(rect.top + rect.height/2 - 128) + 'px';
});
document.addEventListener('click',closeAll);
setLevelEl.addEventListener('click',e=>{
    e.stopPropagation();
    const level = e.target.getAttribute('data-level');
    if(!level) return false;
    console.log({level});
    data.provinceEl.setAttribute('level',level);
    closeAll();
    setHashURL();
})