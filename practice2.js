/** Print numbers from 1 -> 100 */
//1. Write a function called printNumber that takes an argument called number and prints it
//2. Write a function called generateNumbers which generates numbers 1 to 100 and  calls printNumber on each number
//3. Call generateNumbers function from outside

function printNumber(number){;
    console.log("Number "+ number)
}




/*function generateNumbers(){
    let i = 1;
    while(i <= 100){
        printNumber(i);
        i = i+1;
    }
}


generateNumbers();
*/


function generateNumbers(num){
    let i = 1;
    while(i <= num){
        printNumber(i);
        i = i+1;
    }
}


generateNumbers(200);