var array = [];
var content = '';
document.getElementById('btn_themSoN').onclick = () => {
    var new_soN = document.getElementById('txt_soN').value * 1;
    array.push(new_soN);
    content = array;
    document.getElementById('hienThiArray').innerHTML = content;
}
// 1
document.getElementById("btn_tongSoDuong").onclick = () => {
    var result = 0;
    array.forEach(element => {
        if (element>=0){
            result += element;
        }
    });
    document.getElementById('ketQuaTongSoDuong').innerHTML = result;
}

//2
document.getElementById("btn_demSoDuong").onclick = () => {
    var result = 0;
    array.forEach(element => {
        if (element>=0){
            result ++;
        }
    });
    document.getElementById('ketQuaDemSoDuong').innerHTML = result;
}
//3
document.getElementById("btn_timSoNhoNhat").onclick = () => {
    var result = array[0];
    array.forEach(element => {
        if (element < result){
            result = element;
        }
    });
    document.getElementById('ketQuaSoNhoNhat').innerHTML = result;
}
//4
document.getElementById("btn_timSoDuongNhoNhat").onclick = () => {
    var result = -1;
    var new_arr =[];
    
    array.forEach(e => {
        if(e >= 0){
            new_arr.push(e);
        }
    });
    if(new_arr.length > 0){
        result = new_arr[0];
        new_arr.forEach(element => {
        if (element < result ){
            result = element;
        }
        });
    }
    document.getElementById('ketQuaTimSoDuongNhoNhat').innerHTML = result;
}
//5
document.getElementById("btn_timSoChanCuoiCung").onclick = () => {
    var result = -1;
    array.forEach(element => {
        if (element % 2 == 0){
            result = element;
        }
    });
    document.getElementById('ketQuaTimSoChanCuoiCung').innerHTML = result;
}
//6
document.getElementById("btn_doiViTri").onclick = () => {
    var i1 = document.getElementById('txt_viTri1').value * 1;
    var i2 = document.getElementById('txt_viTri2').value * 1;
    var temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
    document.getElementById('ketQuaDoiViTri').innerHTML = array;
}
//7
document.getElementById("btn_sapXepTangDan").onclick = () => {
    var new_arr = array;
    new_arr.sort(function(a,b){
        return a-b;
    })
    document.getElementById('ketSapXepTangDan').innerHTML = new_arr;
}
//8
function kiem_tra_snt(n)
{
    // Biến cờ hiệu
    var flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else if (n == 2){
        flag = true;
    }
    else if (n % 2 == 0){
      flag = false;
    }
    else{
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i < Math.sqrt(n); i+=2)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    return flag;
}
//
document.getElementById("btn_timSoNguyenToDauTien").onclick = () => {
    var rs = false;
    var i = 0;
    for (var index = 0; index < array.length; index++) {
        if(rs = kiem_tra_snt(array[index])){
            i = index;
            break;
        }
    }
    document.getElementById('ketQuaTimSoNguyenToDauTien').innerHTML = `Số nguyên tố đầu tiên là: ${array[i]}`;
}
//9
var array_9 = [];
var content_9 ='';
document.getElementById('btn_themSoN_9').onclick = () => {
    var new_soN = document.getElementById('txt_soN_9').value * 1;
    array_9.push(new_soN);
    content_9 = array_9;
    document.getElementById('hienThiArray_9').innerHTML = content_9;
}
document.getElementById('btn_demSoNguyen').onclick = () => {
    var count = 0;
    array_9.forEach(e => {
        if(Number.isInteger(e)){
            count ++;
        };
    });
    document.getElementById('ketQuaDemSoNguyen').innerHTML = `Có ${count} số nguyên`;
}
//10
document.getElementById('btn_soSanhAmDUong').onclick = () => {
    var countAm = 0;
    var countDuong= 0;
    array.forEach(e => {
        if(e >= 0){
            countDuong++;
        }else{
            countAm++;
        }
    });
    var rs = '';
    if(countAm = countDuong){
        rs = 'Số Âm bằng số Dương'
    }
    if(countAm > countDuong){
        rs = "Số Âm nhiều hơn số Dương"
    }else{
        rs = 'Số Dương nhiều hơn số Âm'
    }
    
    document.getElementById('ketQuaSoSanhAmDuong').innerHTML = `Có ${countDuong} số Dương và ${countAm} số Âm. ${rs}`;
}