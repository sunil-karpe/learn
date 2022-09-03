import React from "react";

export default class Form extends React.Component{
    constructor(){
        super();

        this.state={
            username:"",
            age:""
        }
    }

    // Will update the state-username for every single input action
    nameHandler=(e)=>{
        this.setState({username:e.target.value})
    }

    // Will update the state-age for every single input action
    ageHandler=(e)=>{
        this.setState({age:e.target.value})
    }

    //After clicking submit data associated with all the inputs must be persisted.
    //reset the input fields
    //storing the data into database
    submitHandler=(e)=>{
        e.preventDefault();
        alert(`username: ${this.state.username} age: ${this.state.age}`)
        this.setState({username:"",age:""})
    }

    render=()=>{

        return(
            <div>
                {/* For displaying the change in state according to the input */}
                <h2>Login Form</h2>
                <span>{this.state.username}</span>
                <span>{this.state.age}</span>


                {/* taking the inputs and assigning the each input with separate handler*/}
                <form onSubmit={this.submitHandler}>
                 
                    <input type="text" name="username" value={this.state.username} onChange={this.nameHandler}/>
                    <input type="number" name="age" value={this.state.age} onChange={this.ageHandler}/>

                    <input type="submit" value="Submit" />
                    
                   
                </form>
            </div>
        )

    }
}