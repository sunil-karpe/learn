//Each user data is saved as the object in list

//Here 'users' is a list of the object
const users=[

    //First object
    {
        name:"Jonas", //'name' is a key and 'Jonas' is the value of that key 
        age:22,
        gender:"Male"
    },
    //Second Object
    {
        name:"Martha",
        age:21,
        gender:"Female"
    }

]

// Iterating the user one by one
users.map((user)=>{

    //Below line will print the user one by one
    console.log(user)

})