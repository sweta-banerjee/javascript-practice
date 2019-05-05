function askForBeverage(age){
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