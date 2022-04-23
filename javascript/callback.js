
let appInstalled=true;
let login=true;

const WhatsupCallback=(callback,errorCallback)=>{

    if(!appInstalled){

        errorCallback("Please install the Whatsup App to get started!");
        
    }else if(!login){
        errorCallback("Please login to receive and send text")
    }else{
        callback("All done! Send Hi to your buddy")
    }
}

WhatsupCallback((message)=>{
    console.log(message)
},(error)=>{
    console.log(error)
})