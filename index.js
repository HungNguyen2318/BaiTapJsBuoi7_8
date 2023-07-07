var array = [];
var content = '';
document.getElementById('btn_themSoN').onclick = () => {
    var new_soN = document.getElementById('txt_soN').value * 1;
    array.push(new_soN);
    content = array;
    document.getElementById('hienThiArray').innerHTML = content;
}