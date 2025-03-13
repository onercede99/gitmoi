function tinhngay() {
    let thang = +document.getElementById("thang").value;

    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("songay").innerHTML = "Có 31 ngày";
        break;
        case 2:
            document.getElementById("songay").innerHTML = "Có 28 hoặc 29 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("songay").innerHTML = "Có 30 ngày";
            break;
            default:
                document.getElementById("songay").innerHTML = "Vui lòng nhập số từ 1 - 12"
    }
}