function cong() {
    var a = parseFloat(document.getElementById("1").value);
    var b = parseFloat(document.getElementById("2").value);
    var c = a + b;
    document.getElementById("ketqua").innerHTML = c;
}
function tru() {
    var a = parseFloat(document.getElementById("1").value);
    var b = parseFloat(document.getElementById("2").value);
    var c = a - b;
    document.getElementById("ketqua").innerHTML = c;
}
function nhan() {
    var a = parseFloat(document.getElementById("1").value);
    var b = parseFloat(document.getElementById("2").value);
    var c = a * b
    document.getElementById("ketqua").innerHTML = c;
}
function chia() {
    var a = parseFloat(document.getElementById("1").value);
    var b = parseFloat(document.getElementById("2").value);
    if (b !=0)
    { var c = a/b
        document.getElementById("ketqua").innerHTML = c;
    } else {
        document.getElementById("ketqua").innerHTML = "khong tinh duoc";
    }
}