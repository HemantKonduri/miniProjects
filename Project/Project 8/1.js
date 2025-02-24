function onClick() {
    document.querySelector(".container").style.backgroundColor = bodyColor();
    document.querySelector(".btn").style.backgroundColor = btnColor();
}

function onClick1(){
    document.querySelector(".container").style.backgroundColor = "black";
    document.querySelector(".btn").style.backgroundColor = "yellow";
}

function bodyColor(){
    var color = ["red","yellow","pink","green","grey","pink","violet","purple","brown","DeepPink"]
    return color[Math.floor(Math.random() * 10)];
}
function btnColor(){
    var color = ["red","yellow","pink","green","grey","pink","violet","purple","brown","DeepPink"]
    return color[Math.floor(Math.random() * 10)];
}