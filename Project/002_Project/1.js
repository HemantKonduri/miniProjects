let x;
function add(){
    x =parseInt(document.getElementById('id1').innerText);
    x = x+1;
    document.getElementById('id1').innerText = x;
}
function lower(){
    x =parseInt(document.getElementById('id1').innerText);
    x = x-1;
    document.getElementById('id1').innerText = x;
}