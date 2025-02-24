function start(){
    a = Math.floor(Math.random() * 101); 
    document.getElementById("id1").value = a;
    b = Math.floor(Math.random() * 101);
    document.getElementById("id2").value = b;
    document.getElementById("id3").value = "";
}

function btn(){
    // let x = Number(document.getElementById("id1").value);
    // let y = Number(document.getElementById("id2").value);
    let x = Number(document.getElementById("id1").value);
    let y = Number(document.getElementById("id2").value);
    let z = Number(document.getElementById("id3").value);
    let a = Number(x) + Number(y);
    Number(a);
    if(a==z)
    {
        alert(`Congratulations Your Answer Is Correct i.e ${a}` );
    }
    else{
        alert(`Your Answer is wrong. Correct answer is ${a}`);
    }
    
}