import React,{Component} from "react";

export default class UpdateCycle extends Component{

    //Special method called only once when the component is created
    constructor(props){
        super(props)
        
        this.state={
            flag:false
        }
        
        console.log("Child constructor called");

    }

    //Method called everytime when component is re-rendered
    //State can be set according to the changed props
    //Cannot cause side effect-HTTP request
    static getDerivedStateFromProps(props,state){
        console.log("Child getDerivedStateFromProps called")
        return null
        
    }

    //Predict component will re-rendered or not
    //existing and new state value can be compared here to optimise the performance. re-rendered can be stopped if state is same/dont want component to update by returning the value false.
    //Cannot cause side effect-avoid HTTP request 
    shouldComponentUpdate(){
        console.log("Child shouldComponentUpdate called")
        return true

    }

    //It is called when component is mounted or updated
    //Read the state and props value only.
    //Do not change state or interact with DOM or make ajax request
    //Only return the component in .js or .jsx form
    
    render(){
        console.log("Child render called")
        return(
            <div>
                <h2>Child component rendered in parent</h2>
                
            </div>
        )

    }

    //Called right before the changes from the virtual Dom are to be reflected in the DOM.
    // Capture the information about the DOM.
    //Return null or value and that will be passed as the third parameter to the componentDidUpdate
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Child getSnapshotBeforeUpdate called")
        return null;

    }

    //Called after the render is finished
    //cause side effect:http request. But compare new and existing props to avoid unwanted component update 
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("Child componentDidUpdate called")

    }

    //Called only once afer the component rendered for the first time
    componentDidMount(){
        console.log("Child componentDidMount called")

    }

    

}