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
const svgEl = document.querySelector('svg');

svgEl.addEventListener('click', e=>{
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

const getFontURL = cb=>{
    fetch('JiaLiDaYuanJF-slice.woff').then(r=>r.blob()).then(blob=>{
        const reader = new FileReader();
        reader.onload = function(e) {
            const url = e.target.result;
            cb(url);
        }
        reader.readAsDataURL(blob);
    })
};

getFontURL(url=>{
    const styleText = `@font-face {
        font-family: JiaLiDaYuanJF-slice;
        src: url(${url});
    };`;
    svgEl.querySelector('style').innerHTML = styleText;
    const styleEl = document.createElement('style');
    styleEl.innerHTML = styleText;
    document.head.appendChild(styleEl);
});

const width = 1134;
const height = 976;
const size = 2;

const canvas = document.createElement('canvas');

canvas.width = width * size;
canvas.height = height * size;

const ctx = canvas.getContext('2d');

const createSVGURLFromXML = xmlText=>{
    const blob = new Blob([xmlText], {type: 'image/svg+xml'});
    return URL.createObjectURL(blob);
};
const save =(url,filename)=>{
    const a = document.createElement('a');
    a.download = filename;
    a.href = url;
    a.click();
}
const srcToImage = (src,cb)=>{
    const el = new Image();
    el.addEventListener('load',_=>cb(el));
    el.src = src;
};
const log = _=>(new Image()).src = `/api/china-ex/log?levels=${getAllProvinceLevels().join('')}`;

const saveToImage = _=>{
    const xmlText = `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width*2}px" height="${height*2}px">${svgEl.innerHTML}</svg>`;
    srcToImage(createSVGURLFromXML(xmlText),image=>{
        ctx.fillStyle = '#efb4b4';
        ctx.fillRect(
            0,0,
            width * size,height * size
        );
        ctx.drawImage(
            image,
            0,0,
            width * size, height * size,
            0,0,
            width * size, height * size
        );
        canvas.toBlob(blob=>{
            const url = URL.createObjectURL(blob);
            save(url,`[神奇海螺][中国制霸]${+new Date()}.png`);
        },'image/png');
    });
    log();
};

保存.addEventListener('click',saveToImage);