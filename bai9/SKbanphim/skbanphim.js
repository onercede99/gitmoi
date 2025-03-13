function up() {
    let meo = document.getElementById('doremon');
    meo.style.top = parseInt(meo.style.top) - 5 + "px";
}
function down() {
    let meo = document.getElementById('doremon');
    meo.style.top = parseInt(meo.style.top) + 5 + "px";
}
function left() {
    let meo = document.getElementById('doremon');
    meo.style.left = parseInt(meo.style.left) - 5 + "px";
}
function right() {
    let meo = document.getElementById('doremon');
    meo.style.left = parseInt(meo.style.left) + 5 + "px";
}
function move(evt){
    switch(evt.keyCode){
        case 37:
            left();
            break;
            case 39:
                right();
            break;
            case 38:
            up();
            break;
            case 40:
                down();
                break;
    }
}
function docready(){
    window.addEventListener('keydown',move);
}