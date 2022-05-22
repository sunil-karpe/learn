import React,{Component} from "react";
//Import the component at a time to learn the things present in it. Mainly component is imported from components folder.
//Please remove the below line about the already learned component's import and add the new import line to include the component that you want. 
import Form from "./components/Form";


class App extends Component{

  render(){
    return(
      <div>
        {/* Add the imported component to learn concept present in it. */}
        <Form/>
      </div>
    )
  }
}


export default App;
