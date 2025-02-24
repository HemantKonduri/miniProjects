let button = document.getElementById('btn');

button.addEventListener('click', function(){
    let x = document.getElementById("name").value;
    let y = x.length;
    let z = document.getElementById("output");
    z.innerHTML = `<b>Lenght of String :${y}</b>`
});