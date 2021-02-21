var numbers = [21, 4234, 23, 21, 43];
for(var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    console.log(element);
}

function add(number1, number2){
    var addSum = number1 + number2;
    return addSum;
}
var output = add(1, 2);
console.log(output);

//Finding Largest Number
function largeNumber(num){
    var largestNum = 0;
    for(var i=0; i < num.length; i++) {
        var element = num[i];
       if(largestNum < element){
           largestNum = element;
       } 
    }
    return largestNum;
}
var findNum = [21, 32, 43, 54, 132,  97];
var largestNumber = largeNumber(findNum);
console.log(largestNumber);