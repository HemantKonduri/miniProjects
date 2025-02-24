
var nex = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg',];
function next(){
    let randomNumber = Math.floor(Math.random() * 10);
    document.getElementById("img1").src=nex[randomNumber];
}