/**
 * For Google Sheet
 */

var triple = ['', 'nghìn ', 'triệu ', 'tỷ '];
var A = ['không ','một ','hai ','ba ','bốn ','năm ','sáu ','bảy ','tám ','chín '];
var B = ['lẻ ','mười ','hai mươi ','ba mươi ','bốn mươi ','năm mươi ','sáu mươi ','bảy mươi ','tám mươi ','chín mươi '];
var C = ['','một ','hai ','ba ','bốn ','năm ','sáu ','bảy ','tám ','chín '];

function tripleDigitsTrans(value, flag = 0){
    var x = parseInt(parseInt(value) / 100);
    var y = parseInt(parseInt(value) / 10 % 10);
    var z = parseInt(parseInt(value) % 10);
    
    if (x + y + z == 0){
      if(flag == 1){
        return '';
      }
      else{
        return 'không';
      }
    }
    
    var result = '';

    var X = 0;
    if(x != 0 || flag == 1){
        result = A[x] + 'trăm ';
        X = 1;
    }
    if ((X == 1 && (y != 0 || z != 0)) || (X == 0 && y != 0)){
        result += B[y];
    }
        
    if(z == 1 && y > 1){
        result += 'mốt ';
    }
    else if(z == 4 && y > 1){
        result += 'tư ';
    }
    else if(z == 5 && y > 0){
        result += 'lăm ';
    }
    else{
        result += C[z];
    }
    return result;
}
function upperFirstCharacter(string){
    return string;
}
function digits2string(string){
    var result = 'đồng.';
    string = string.replace('.', '').replace(',', '');
    var slen = string.length;
    var tlen = 0;
    while(tlen < slen){
        var t_string = '';
        if(slen - tlen >= 3){
            t_string = string[slen-tlen-3] + string[slen-tlen-2] + string[slen-tlen-1];
        }
        else if(slen - tlen == 2){
            t_string = string[slen-tlen-2] + string[slen-tlen-1];
        }
        else{
            t_string = string[slen-tlen-1];
        }

        console.log(t_string)
        var temp = tripleDigitsTrans(parseInt(t_string), tlen + 3 < slen);

        if(temp != ''){
            temp += triple[parseInt(tlen / 3)];
        }
        result = temp + result;
        
        tlen += 3;
    }        
    return upperFirstCharacter(result);
}
