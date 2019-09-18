//处理时间格式
function Retime(value){
    if (value<60) {
        if (value<10) {
            value = '0'+value
        }
        return '0:'+value
    }
    else if(value<3600){
        let m = Math.floor(value/60);
        let s = value-m*60;
        if (s<10){
            s = '0'+s
        }
        return m+':'+s
    }else{
        let h = Math.floor(value/3600);
        let m = Math.floor((value-h*3600)/60);
        let s = value - h*3600 - m*60;
        if (s<10){
            s = '0'+s
        }
        return h+':'+m+':'+s
    }
}

export default {
    Retime,
}