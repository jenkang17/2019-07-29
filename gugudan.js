// function multi(num1,num2){
//   var a = " * ";
//   var b = " = ";
//   var c = num1 + a + num2 + b + num1 * num2;
  
//   return c;
// }

// console.log(multi(2, 4));


function multi2(num1, num2){
    var a = " * ";
    var b = " = ";
    var c = num1 + a + num2 + b + num1 * num2;
    return c;
  }
  
  for (var i = 2; i < 10; i++){
    for (var k = 1; k < 10; k++){
      console.log(multi2(i, k));
    }
    }


    
    function add(a, num){
        var r = "";
        for(var i = 0; i < num; i++){
            r = r + a;
        }
        return r;    
    }
    
    console.log(add("*", 7));
