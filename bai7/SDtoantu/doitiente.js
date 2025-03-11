function convert() {
    amount = parseFloat(document.getElementById("amount").value);
    from = document.getElementById("from").value;
    to = document.getElementById("to").value;
    rate = from / to;
    result = amount * rate;
    document.getElementById("result").innerHTML = result;
}