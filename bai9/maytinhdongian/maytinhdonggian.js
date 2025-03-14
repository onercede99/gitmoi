function inputvalue(value) {
    document.getElementById("caculator").value += value;
}
function outputvalue() {
    try{
        result=eval(document.getElementById("caculator").value);
        document.getElementById("caculator").value = result;
    }
    catch (error) {
        alert("error");
    }

    }
function clearvalue() {
    document.getElementById("caculator").value= "";
}
