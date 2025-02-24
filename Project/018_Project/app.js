

function updateTextInput1(val) {
    document.getElementById('textInput1').value=val; 
  }
  function updateTextInput2(val) {
    document.getElementById('textInput2').value=val; 
  }
  function updateTextInput3(val) {
    document.getElementById('textInput3').value=val; 
  }
  function updateTextInput4(val) {
    document.getElementById('textInput4').value=val; 
  }

 function fun(){

    //UpperCase
    
    let val1 = document.getElementById('textInput1').value;
    var length = val1,
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    retVal1 = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal1 += charset.charAt(Math.floor(Math.random() * n));
    }
        // console.log(retVal1)
    
    //LowerCase

    let val2 = document.getElementById('textInput2').value;
    var length = val2,
    charset = "abcdefghijklmnopqrstuvwxyz",
    retVal2 = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
            retVal2 += charset.charAt(Math.floor(Math.random() * n));
    }
            // console.log(retVal2)

    //Numbers

    let val3 = document.getElementById('textInput3').value;
    var length = val3,
    charset = "0123456789",
    retVal3 = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
            retVal3 += charset.charAt(Math.floor(Math.random() * n));
    }
            // console.log(retVal3)
            
    //Symbols
    
    let val4 = document.getElementById('textInput4').value;
    var length = val4,
    charset = "``~!@#$%^&*()_-+=*{}[];:?/>.,<",
    retVal4 = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
            retVal4 += charset.charAt(Math.floor(Math.random() * n));
    }
            // console.log(retVal4);

    //concatenate
    let con = retVal1.concat(retVal2,retVal3,retVal4);
    // console.log(con);


    //shuffle characters of a string
    function getRandomInt(n) {
        return Math.floor(Math.random() * n);
      }
      function shuffle(s) {
        var arr = s.split('');           // Convert String to array
        var n = arr.length;              // Length of the array
        
        for(var i=0 ; i<n-1 ; ++i) {
          var j = getRandomInt(n);       // Get random of [0, n-1]
          
          var temp = arr[i];             // Swap arr[i] and arr[j]
          arr[i] = arr[j];
          arr[j] = temp;
        }
        
        s = arr.join('');                // Convert Array to string
        return s;                        // Return shuffled string
      }
      var s = con;
      s = shuffle(s);
    //   console.log(s)
    //   console.log(con)
      
    // document.getElementById("password").style.fontSize="x-large";
    document.getElementById("password").innerText = s;      //for sequence replace s with con;
    //document.getElementById("password").innerText = con;      //for sequence replace s with con;
    document.getElementById("name").value = con;
    // document.getElementById("password").style.color = black;
}

//copy

function clipboard(){
    var copyText = document.getElementById("name");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}




