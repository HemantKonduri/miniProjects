function btn(){
    let x = Number(document.getElementById("amount").value);
    let y = Number(document.getElementById("percentage").value);
    let z = Number(x) + Number(x*(y/100));
    document.getElementById("total").innerText = `Total : ${z}`;
}

function reset(){
    document.getElementById("amount").value = ""
    document.getElementById("percentage").value = ""
    document.getElementById("total").innerText = `Total :`;
}