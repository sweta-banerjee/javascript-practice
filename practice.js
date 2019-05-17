/*function askForBeverage(age){
    if (age > 18){
    console.log("What Beverage would you like to have?");
    } else {
       console.log ("sorry the offer is only for adults");
    }
}
askForBeverage(19)

//print odd numbers between 1 to 100
counter=1
while (counter<= 100){
    console.log("counter" + counter);
    counter= (counter+2);
}



function callName(name){
return ("Hello "+name);
}

console.log(callName("Sweta"));
console.log(callName("Kalyan"));
*/
/**  Find average */
//1. Write a function called add that takes 2 arguments and returns the sum
//2. Write another function that is called avg that takes the sum and divides it by 2
//3. Write a third function called printSum that calls add with 2 numbers , passes the result to avg and prints the result
//4. Call printSum in the file

//1.

function add(num1,num2){
    let sum=num1+num2;
    return sum;
}

//2.
function avg(sum1){
    let average = sum1/2;
    return average;
}

//3.
function printSum(){
    let result = add(30,40);
    console.log(avg(result));
}

printSum();
