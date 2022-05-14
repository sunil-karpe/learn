import React, { Component } from 'react'

class MountingCycle extends Component {
  
  constructor(props){
      super(props)

      this.state={
          item:""

      }
    console.log("MountingCycle constructor called")
  }

  static getDerivedStateFromProps(){
    console.log("MountingCycle getDerivedStateFromProps called")
    return null

  }

  componentDidMount(){
    console.log("MountingCycle componentDidMount called")

  }

  render() {
      console.log("MountingCycle render called")
    return (
      <h1>Mounting Cycle concepts</h1>
    )
  }
}


export default MountingCycle
