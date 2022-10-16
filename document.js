const setLevelEl = document.querySelector('.set-level-box');
const setLevelTitleEl = setLevelEl.children[0];
const closeAll = e=>{
    setLevelEl.style.display = '';
};
const data = {};
const getAllProvinces = _=>[...地区.children];
const getAllProvinceLevels = _=>getAllProvinces().map(el=>+el.getAttribute('level')||0);
const localStorageLevelsKey = 'china-ex-levels';
const saveLevels = _=>{
    localStorage.setItem(localStorageLevelsKey,getAllProvinceLevels().join(''));
};
const isProvinceLevelsRegex = /^\d{34}$/;
const getProvinceLevelsAndSet = _=>{
    const levelsString = localStorage.getItem(localStorageLevelsKey);
    if(!isProvinceLevelsRegex.test(levelsString)) return;
    const levels = levelsString.split('');
    getAllProvinces().forEach((el,index)=>{
        el.setAttribute('level',levels[index])
    })
};
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
const calcAll = _=>{
    const score = getAllProvinceLevels().reduce((acc, v) => {
        return +acc + v;
      }, 0);
    分数.innerHTML = `分数: ${score}`;
}
setLevelEl.addEventListener('click',e=>{
    e.stopPropagation();
    const level = e.target.getAttribute('data-level');
    if(!level) return false;
    console.log({level});
    data.provinceEl.setAttribute('level',level);

    calcAll();
    closeAll();
    saveLevels();
})

getProvinceLevelsAndSet();
calcAll();

let fontAPI = `https://lab.magiconch.com/api/fontmin`;
const getFontFromText = (name,text,onOver=_=>{})=>{

    text += '0';
    text = Array.from(new Set(text)).sort().join('');

    if(!text) return requestAnimationFrame(onOver);

    const unicode = str2utf8(text).join();
    const fontURL = `${fontAPI}?name=${name}&unicode=${unicode}`;

    loadFont(name,fontURL,_=>{
        onOver(_)
        // style.innerHTML = `html {font-family: a123;}`;
    })
}


const loadFont = async (fontName,fontURL,callback) => {
	const fontFace = new FontFace(fontName, `url(${fontURL})`);
	fontFace.load().then(fontFace => {
		document.fonts.add(fontFace);
		callback(fontFace);
	}).catch(e=>{
        // console.log(e);
        callback();
    })
};
function str2utf8(str) {
    return str.split('').map(s=>s.charCodeAt(0))
}
function utf82str(str) {
    return String.fromCharCode.apply(null,Array.from(str))
}


getFontFromText('JiaLiDaYuanJF','1234567890'+document.body.innerHTML);




const width = 1134;
const height = 976;