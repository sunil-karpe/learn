/*
const customPromise = new Promise((resolve,reject)=>{
    let num=5; // any logic, it might be fetching data from server. 
    if(num==5) {
        resolve(num);
    }else{
        reject("number is not equal 5");
    }
})

customPromise.then((num)=>{
    console.log("value received::"+num);
}).catch((err)=>{
    console.log("error occured::"+err);
}).finally(()=>{
    console.log("end of operation");
})

*/

/*example 1*/
const jsonPromise = fetch('https://jsonplaceholder.typicode.com/todos');

jsonPromise.then(response => response.json())  // parse JSON from response
    .then(data => console.log(data))    // log the JSON data
    .catch(error => console.error('Error:', error))
    .finally(() => {
        console.log("Operation performed");
    })

/*example 2*/
let appInstalled=false;
let login=false;

const WhatsupPromise=()=>{

    
    return new Promise((resolve,reject)=>{

        if(!appInstalled){

            reject("Please install the Whatsup App to get started!");
            
        }else if(!login){
            reject("Please login to receive and send text")
        }else{
            resolve("All done! Send Hi to your buddy")
        }

    })

 
}

WhatsupPromise().then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
})
