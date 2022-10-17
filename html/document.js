const 本地存储 = localStorage;
const 文档 = document;
const 头元素 = 文档.head;
const 新建元素 = 名 => 文档.createElement(名);
const 新建图 = _=> new Image();
const 添加事件监控 = (元素,事件,回调) => 元素.addEventListener(事件,回调);
const 设置等级标题 = 设置等级.children[0];

const 全关闭 = _=>{
    设置等级样式.display = '';
};
const 数据 = {};
const 获取所有省元素们 = _=>[...地区.children];
const 获取所有省等级们 = _=>获取所有省元素们().map(el=>+el.getAttribute('level')||0);
const 本地存储等级们钥匙 = 'china-ex-levels';
const 保存等级们 = _=>{
    本地存储.setItem(本地存储等级们钥匙,获取所有省等级们().join(''));
};
const 省等级们正则 = /^\d{34}$/;
const 获取等级们并生效 = _=>{
    const 等级们字串 = 本地存储.getItem(本地存储等级们钥匙);
    if(!省等级们正则.test(等级们字串)) return;
    const 等级们 = 等级们字串.split('');
    获取所有省元素们().forEach((元素,下标)=>{
        元素.setAttribute('level',等级们[下标])
    })
};
const 图形 = 文档.querySelector('svg');
const 设置等级样式 = 设置等级.style;
添加事件监控(图形,'click', e=>{
    e.stopPropagation();

    const { target: 省元素 } = e;
    const 方位 = 省元素.getBoundingClientRect();
    const { id } = 省元素;
    数据.省元素 = 省元素;
    数据.id = id;

    设置等级标题.innerHTML = id;
    设置等级样式.display = 'block';
    
    设置等级样式.left = Math.round(方位.left + 方位.width/2 - 74) + 'px';
    设置等级样式.top = Math.round(方位.top + 方位.height/2 - 128) + 'px';
});
添加事件监控(文档,'click',全关闭);
const 计分 = _=>{
    const 分 = 获取所有省等级们().reduce((全, 当前) => {
        return +全 + 当前;
      }, 0);
    分数.innerHTML = `分数: ${分}`;
}
添加事件监控(设置等级,'click',e=>{
    e.stopPropagation();
    const 等级 = e.target.getAttribute('data-level');
    if(!等级) return false;
    数据.省元素.setAttribute('level',等级);
    计分();
    全关闭();
    保存等级们();
})

获取等级们并生效();
计分();

const 读文件成地址 = (原始数据,回调)=>{
    const 读 = new FileReader();
    读.onload = e => 回调(e.target.result);
    读.readAsDataURL(原始数据);
};
const 获取字体数据地址 = (地址,回调)=>{
    fetch(地址).then(r => r.blob()).then(原始数据 => 读文件成地址(原始数据,回调));
};
const 获取字体样式 = (字体名,回调)=>{
    获取字体数据地址(`${字体名}.woff`,地址 => 回调(`@font-face {
        font-family: ${字体名};
        src: url(${地址});
    };`));
};
获取字体样式('JiaLiDaYuanJF-slice',样式字串=>{
    图形.querySelector('style').innerHTML = 样式字串;
    const 样式元素 = 新建元素('style');
    样式元素.innerHTML = 样式字串;
    头元素.appendChild(样式元素);
});

const 宽 = 1134;
const 高 = 976;
const 比 = 2;

const 画板 = 新建元素('canvas');

画板.width = 宽 * 比;
画板.height = 高 * 比;

const 上下文 = 画板.getContext('2d');

const 从文档文本新建图形文件 = 文档文本=>{
    const 原始数据 = new Blob([文档文本], {type: 'image/svg+xml'});
    return URL.createObjectURL(原始数据);
};
const 下载文件 =(链接,文件名)=>{
    const 元素 = 新建元素('a');
    元素.download = 文件名;
    元素.href = 链接;
    元素.click();
}
const 地址变图像元素 = (地址,回调)=>{
    const 图 = 新建图();
    添加事件监控(图,'load',_=>回调(图));
    图.src = 地址;
};
const 日志 = _=>(新建图()).src = `https://lab.magiconch.com/api/china-ex/日志?等级s=${获取所有省等级们().join('')}`;

const 保存图像 = _=>{
    const 文档文本 = `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${宽} ${高}" 宽="${宽*2}px" 高="${高*2}px">${图形.innerHTML}</svg>`;
    地址变图像元素(从文档文本新建图形文件(文档文本),图=>{
        上下文.fillStyle = '#efb4b4';
        上下文.fillRect(
            0,0,
            宽 * 比,高 * 比
        );
        上下文.drawImage(
            图,
            0,0,
            宽 * 比, 高 * 比,
            0,0,
            宽 * 比, 高 * 比
        );
        画板.toBlob(元素数据=>{
            const 地址 = URL.createObjectURL(元素数据);
            下载文件(地址,`[神奇海螺][中国制霸]${+new Date()}.png`);
        },'image/png');
    });
    日志();
};

添加事件监控(保存,'click',保存图像);