function askForBevarage(age){
    if(age == 18){
        console.log("You just turned 18");
    }
    if(age != 18){
        console.log("You are not 18");
    }
    if(age <= 17){
        console.log("Do you want to have milk?");
    }else{
        console.log("Do you want alcohol?");
    }
}

askForBevarage(19);