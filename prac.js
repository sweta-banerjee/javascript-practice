

function isPrime(n){
    if(n<8){
        if(n ==2 || n==3 || n==5 || n==7)
            return true;
        else
            return false;
    }
    if (n%2 == 0 || n%3 == 0 || n%5 == 0 || n%7 == 0 ){
        console.log(n +" is not a prime number")
    }else{
        console.log("yes "+ n +" is a prime number");
    }
}
isPrime(7);
