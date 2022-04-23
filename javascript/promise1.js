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