function ktra() {
    var ly = parseFloat(document.getElementById('ly').value);
    var hoa = parseFloat(document.getElementById('hoa').value);
    var sinh = parseFloat(document.getElementById('sinh').value);
    if (ly , hoa , sinh !=0);{

        var trungbinh = (ly + hoa + sinh) / 3;
        document.getElementById("ketqua").innerHTML = trungbinh;
    }
}
function dof() {
    var c = parseFloat(document.getElementById('c').value);
    var f = ((9*c)+160) /5;
    document.getElementById("f").innerHTML = f;
}
function dtt() {
    var r = parseFloat(document.getElementById('r').value);
    var s = r*r*3.14;
    if (r > 0) {
        document.getElementById("s").innerHTML = s;
    } else {
        document.getElementById("s").innerHTML = "khong tinh duoc";
    }
}
function cvt() {
    var t = parseFloat(document.getElementById("t").value);
    var  m = 2*t*3.14;
    if (t > 0) {
        document.getElementById("m").innerHTML = m;
    }else {
        document.getElementById("m").innerHTML = "khong tinh duoc";
    }
}

