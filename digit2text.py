triple = ['', 'nghìn ', 'triệu ', 'tỷ ']
A = ['không ','một ','hai ','ba ','bốn ','năm ','sáu ','bảy ','tám ','chín ']
B = ['lẻ ','mười ','hai mươi ','ba mươi ','bốn mươi ','năm mươi ','sáu mươi ','bảy mươi ','tám mươi ','chín mươi ']
C = ['','một ','hai ','ba ','bốn ','năm ','sáu ','bảy ','tám ','chín ']

def tripleDigitsTrans(value, flag = False):
    x = int(int(value) / 100)
    y = int(int(value) / 10 % 10)
    z = int(int(value) % 10)
    
    if x | y | z == 0:
        return '' if flag else 'không '
    
    result = ''

    X = False
    if x != 0 or flag == True:
        result = '{}trăm '.format(A[x])
        X = True

    if (X == True and (y != 0 or z != 0)) or (X == False and y != 0):
        result += B[y]
        
    if z == 1 and y > 1:
        result += 'mốt '
    elif z == 4 and y > 1:
        result += 'tư '
    elif z == 5 and y > 0:    
        result += 'lăm '
    else:
        result += C[z]
        
    return result
    
def upperFirstCharacter(string):
    temp = list(string)
    temp[0] = chr(ord(temp[0]) - 32)
    string = ''.join(temp)
    return string
    
def digits2string(string):
    print(string)
    result = 'đồng.'
    string = string.replace('.', '').replace(',', '')
    slen = len(string)
    tlen = 0
    while tlen < slen:
        temp = tripleDigitsTrans(int(string[-3:]), tlen + 3 < slen)
        if temp != '':
            temp += triple[int(tlen / 3)]
        result = temp + result
            
        string = string[:-3]
        tlen += 3
            
    return upperFirstCharacter(result)
    
#a = digit2Text()
#for i in range(1000000, 1100000):
    #print(i, a.string2digits(str(i)))
