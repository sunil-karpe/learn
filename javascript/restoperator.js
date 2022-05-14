// [Note: comment out the code below (2) and uncomment the (1) to get the problem with using arguments. No need to do changes in code below(3) for both the cases]

// 1)
// const sum=function(message){//arguments will be there implicitely.
//     let result=0    
//     console.log(message);
//     for (let i in arguments){
//         result=result+arguments[i];
//     }
//     console.log(result);
// }


//Above case: message will append as a arguments and leads to get unexected results. Hence need to separate out the message argument and other numbered inputs.

// 2)
const sum=function(message,...vals){

    let result=0    
    console.log(message);
    for (let i in vals){
        result=result+vals[i];
    }
    console.log(result);

}

// (3)
let message="The Sum of this case is:";

sum(message,10);
sum(message,10,20);
sum(message,10,20,30);






