const replaceSVG = text=>{
    text = text.replace(/ transform="matrix\(1 0 0 1 (\d+) (\d+)\)" class=".+"/,' x="$1" y="$2"')
    return text;
};


let fontAPI = `https://lab.magiconch.com/api/fontmin`;
const getFontFromText = (name,text,onOver=_=>{})=>{

    text += '0';
    text = text.replace(/\s/g,'');
    text = Array.from(new Set(text)).sort().join('');

    if(!text) return requestAnimationFrame(onOver);

    const unicode = str2utf8(text).join();
    const fontURL = `${fontAPI}?name=${name}&unicode=${unicode}&type=woff`;

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


getFontFromText(`JiaLiDaYuanJF`,`1234567890中国制霸
内蒙古
黑龙江
吉林
辽宁
北京
天津
河北
山
东
河南
湖北
湖
南
江
苏
上海
浙
江
福
建
台
湾
海南
广东
江
西
安
徽
山
西
陕
西
宁
夏
甘
肃
青海
四川
云南
广西
贵州
重庆
西藏
新疆
神奇海螺试验场
分数: 53
居住５
游玩４
出差３
换乘２
路过１
没去过
labGitHub保存成图片
手机端可长按图片 “添加到照片”

关闭`+document.body.innerHTML);