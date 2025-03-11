function kiemTraBoiSo() {
    // Lấy giá trị từ ô input
    let a = parseInt(document.getElementById("numA").value);
    let b = parseInt(document.getElementById("numB").value);

    // Kiểm tra giá trị hợp lệ
    if (isNaN(a) || isNaN(b) || b === 0) {
        document.getElementById("result").innerText = "Vui lòng nhập số hợp lệ và b phải khác 0!";
        return;
    }

    // Kiểm tra a có phải bội số của b không
    if (a % b === 0) {
        document.getElementById("result").innerText = `${a} là bội số của ${b}`;
    } else {
        document.getElementById("result").innerText = `${a} không phải là bội số của ${b}`;
    }
}