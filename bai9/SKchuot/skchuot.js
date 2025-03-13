
    var imgObj = null ;


    function init() {
    imgObj = document.getElementById("myimg");
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
    function moveright(){
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
    function moveleft() {
        imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
    }
    window.onload = init;