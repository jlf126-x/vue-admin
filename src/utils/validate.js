/**
 * 
 * @param {过滤特殊字符} str 
 */
export function stripscript(str){
    var pattern =new RegExp("[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{ }【】‘；：”“’。，、？]");
    var rs = "";
    for(var  i=0;i<str.length;i++){
        rs = rs + str.substr(i,1).replace(pattern,"");
    }
    return rs;
}

export function validateEmail(value){
    let reg =/^[a-zA-Z]|[0-9](\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return !reg.test(value)? true   :   false;
}

export function validatePass(value){
    let reg =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    return !reg.test(value)?    true    :   false;
}

export function validateCodes(value){
    let reg =/^[a-z0-9]{6}$/;
    return !reg.test(value) ?   true  : false;
}