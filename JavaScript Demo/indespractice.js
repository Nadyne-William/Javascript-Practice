var age = 20;

// if(age >= 20){
//     console.log("You are an adult")
// }else if(age >= 18){
//     console.log("You are also an adult")
// }else{
//     console.log("You are a baby")
// }

switch(age){
    case age >= 20:
        console.log("It is 20");
        break;
    case age >= 18:
        console.log("It is 18");
        break;
    default:
        console.log("It is none of the above");        
}