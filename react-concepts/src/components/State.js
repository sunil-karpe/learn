import React from "react";

export default class State extends React.Component{
    constructor(){
        super();

        this.state={
            count:0
        }
    }

    //Arrow function (this is directly accessible)
    updateCount=()=>{
        this.setState({count:this.state.count+1})
    }

    //Normal function (need to bind with this keyword while calling)
    resetCount(){
        this.setState({count:0})
    }


    render=()=>{
        return(
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.updateCount}>Add</button>
                {/* bind(this) method is useful when the function that will be called(resetCount in this example) is not a arrow function, so the value of this will not be accessible in that function. Hence to access this value, we have to bind that to the function. */}
                <button onClick={this.resetCount.bind(this)}>Reset</button>
                
            </div>
        )
    }

}