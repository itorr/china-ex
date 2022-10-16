const replaceSVG = text=>{
    text = text.replace(/ transform="matrix\(1 0 0 1 (\d+) (\d+)\)" class=".+"/,' x="$1" y="$2"')
    return text;
};