const 本地存储 = localStorage;
const 视窗 = window;
const 文档 = document;
const 读文件 = FileReader;
const 取 = fetch;
const 如何做爱元素 = 文档.documentElement;
const 体元素 = 文档.body;
const 头元素 = 文档.head;
const 新建元素 = 名 => 文档.createElement(名);
const 新建图 = _=> new Image();
const 添加事件监控 = (元素,事件,回调) => 元素[`on${事件}`] = 回调;// 元素.addEventListener(事件,回调);
const 获取元素方位 = 元素 => 元素.getBoundingClientRect();
const 设置延时 = setTimeout;
const 数学 = Math;
const 统一资源定位 = URL;
const 点击 = 'click';
const 加载 = 'load';
const 等级 = 'level';
const 样式 = 'style';
const 唯一标识 = 'id';
const 源 = 'src';
const 目标 = 'href';
const 成果 = 'result';
const 那么 = 'then';
const 加末尾 = 'appendChild';
const 设置属性 = 'setAttribute';
const 获取属性 = 'getAttribute';
const 清除属性 = 'removeAttribute';
const 来源 = 'referrer';
const 数据属性头 = 'data-'; 
const 呢 = 'ing';
const 运行中属性 = 数据属性头 + 'runn' + 呢;
const 加载中属性 = 数据属性头 + 加载 + 呢;
const 子元素 = 'children';
const 停止冒泡 = 'stopPropagation';
const 新建数据地址 = 'createObjectURL';
const 展示 = 'display';
const 块 = 'block';
const 肉 = 'innerHTML';
const 宽度 = 'width';
const 高度 = 'height';
const 左边 = 'left';
const 上边 = 'top';
const 零 = 0;
const 二 = 2;
const 千 = 1e3;
const 面 = '2d';
const 像素 = 'px';
const 空字 = '';
const 啊 = 'a';
const 靶子 = 'target';
const 真 = true;
const 无 = 'none';
const 最小 = 'min';
const 最大 = 'max';
const 四舍五入 = 'round';
const 是社交媒体 = /weibo|qq/i.test(navigator.userAgent);

const $ = (名,元素 = 文档) => 元素.querySelector(名);

const 字体名 = '字体';
const 背景色 = '#efb4b4';
const 本地存储等级们钥匙 = 'china-ex-levels';
const 保存文件名 = `[神奇海螺][中国制霸].png`;

const 宽 = 1134;
const 高 = 976;
const 比 = 二;
const 最小间距 = 6;

const 地区 = $('#地区');
const 保存 = $('#保存');
const 输出 = $('#输出');
const 输出图片 = $('img',输出);
const 设置等级 = $('#设置等级');

const 画板 = 新建元素('canvas');
const 上下文 = 画板.getContext(面);

画板[宽度] = 宽 * 比;
画板[高度] = 宽 * 比;

const 图形 = 体元素[子元素][零];
const 设置等级标题 = 设置等级[子元素][零];

const 设置等级样式 = 设置等级[样式];
const 输出样式 = 输出[样式];


const 全关闭 = _=>{
    设置等级样式[展示] = 空字;
};
const 数据 = {};
const 获取所有省元素们 = _=>[ ...地区[子元素] ];
const 获取所有省等级们 = _=>获取所有省元素们().map(元素 => 元素[获取属性](等级) || 零);
const 获取所有省等级们字符串 = _=> 获取所有省等级们().join(空字);
const 保存等级们 = _=>{
    本地存储.setItem(本地存储等级们钥匙,获取所有省等级们字符串());
};
const 获取等级们并生效 = _=>{
    const 等级们字串 = 本地存储.getItem(本地存储等级们钥匙) || 空字;
    获取所有省元素们().forEach((元素,下标)=>{
        元素[设置属性](等级,等级们字串[下标] || 零)
    });
};
添加事件监控(地区, 点击, 事件=>{
    事件[停止冒泡]();

    const 省元素 = 事件[靶子];
    const 省元素方位 = 获取元素方位(省元素);
    数据.省元素 = 省元素;

    设置等级标题[肉] = 省元素[唯一标识];
    设置等级样式[展示] = 块;
    const 设置等级元素方位 = 获取元素方位(设置等级);

    let 左 = 数学[四舍五入](如何做爱元素.scrollLeft + 省元素方位[左边] + 省元素方位[宽度] / 二 - 设置等级元素方位[宽度] / 二);
    左 = 数学[最小](
        左,
        体元素.offsetWidth - 设置等级元素方位[宽度] - 最小间距
    );
    左 = 数学[最大](
        左,
        最小间距
    );

    let 上 = 数学[四舍五入](如何做爱元素.scrollTop + 省元素方位[上边] + 省元素方位[高度] / 二 - 设置等级元素方位[高度] / 二);
    上 = 数学[最小](
        上,
        体元素.offsetHeight - 设置等级元素方位[高度] - 最小间距
    );
    上 = 数学[最大](
        上,
        最小间距
    );

    设置等级样式[左边] = 左 + 像素;
    设置等级样式[上边] = 上 + 像素;
});
添加事件监控(文档,点击,全关闭);
const 计分 = _=>{
    const 分 = 获取所有省等级们().reduce((全, 当前) => {
        return 全 + (+当前 || 零);
      }, 零);
    分数[肉] = `分数: ${分}`;
}
添加事件监控(设置等级,点击,事件=>{
    事件[停止冒泡]();
    const 等级值 = 事件[靶子][获取属性](数据属性头+等级);
    if(!等级值) return;
    数据.省元素[设置属性](等级,等级值);
    计分();
    全关闭();
    保存等级们();
})

获取等级们并生效();
计分();

const 读文件成地址 = (原始数据,回调)=>{
    const 读 = new 读文件();
    添加事件监控(读,加载,事件 => 回调(事件[靶子][成果]));
    读.readAsDataURL(原始数据);
};
const 获取字体数据地址 = (地址,回调)=>{
    取(地址)[那么](资源 => 资源.blob())[那么](原始数据 => 读文件成地址(原始数据,回调));
};
const 获取字体样式 = (字体名,回调)=>{
    获取字体数据地址(
        `${字体名}.woff?v={version}`,
        地址 => 回调(`@font-face{font-family:${字体名};${源}:url(${地址})}`)
    );
};
获取字体样式(字体名,样式字串=>{
    $(样式,图形)[肉] = 样式字串;
    const 样式元素 = 新建元素(样式);
    样式元素[肉] = 样式字串;
    头元素[加末尾](样式元素);
    设置延时(_=>如何做爱元素[清除属性](加载中属性),二 * 千);
});

const 从文档文本新建图形文件 = 文档文本=>{
    const 原始数据 = new Blob([文档文本], {type: 'image/svg+xml'});
    return 统一资源定位[新建数据地址](原始数据);
};
const 下载文件 = (地址,文件名,元素 = 新建元素(啊))=>{
    if(!是社交媒体){
        元素.download = 文件名;
    }
    元素[目标] = 地址;
    元素[点击]();
};
const 地址变图像元素 = (地址,回调)=>{
    const 图 = 新建图();
    添加事件监控(图,加载,_=>设置延时(_=>回调(图),千 / 二));
    图[源] = 地址;
};
const 日志 = _=>(新建图())[源] = `https://lab.magiconch.com/api/china-ex/log?levels=${获取所有省等级们字符串()}&r=${文档[来源]}`;

const 保存图像 = _=>{
    如何做爱元素[设置属性](运行中属性,真);

    const 文档文本 = `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${宽} ${高}" ${宽度}="${宽}px" ${高度}="${高}px">${图形[肉]}</svg>`;
    const 数据地址 = 从文档文本新建图形文件(文档文本);

    地址变图像元素(数据地址,图=>{
        上下文.fillStyle = 背景色;
        上下文.fillRect(
            零,零,
            宽 * 比,宽 * 比
        );
        上下文.drawImage(
            图,
            零,零,
            宽,高,
            零,(宽 - 高) * 比 / 二,
            宽 * 比, 高 * 比
        );
        画板.toBlob(元素数据=>{
            const 地址 = 统一资源定位[新建数据地址](元素数据);
            输出图片[源] = 地址;
            输出样式[展示] = 空字;

            设置延时(_=>{
                下载文件(地址,保存文件名);
                如何做爱元素[清除属性](运行中属性);
            },50)
        });
    });
    日志();
};

添加事件监控(保存,点击,保存图像);

添加事件监控($(啊,输出),点击,_=>{
    输出样式[展示] = 无
});
