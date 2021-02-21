//for loop factorial function
function forFactorial(num){
    var factorial = 1;
    for(var i=1; i <= num; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var x = forFactorial(5);
console.log(x);


// factorial function with recursive way
// 3! = 1*2*3
// 4! = 1*2*3*4


function recursiveFact(num){
    if (num == 0) {
        return 1;
    }
    else{
        return num * recursiveFact(num - 1);
    }
}
var y = recursiveFact(5);
console.log(y);