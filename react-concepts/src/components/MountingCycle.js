import React, { Component } from 'react'
import UpdateCycle from './UpdateCycle'

class MountingCycle extends Component {

  constructor(props) {
    super(props)

    this.state = {
      item: ""

    }
    console.log("MountingCycle constructor called")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("MountingCycle getDerivedStateFromProps called")
    return null

  }

  shouldComponentUpdate() {
    console.log("MountingCycle shouldComponentUpdate called")
    return true

  }


  //This is custom function hence not part of the component life cycle
  handleCustom = () => {
    this.setState({ item: "coding" })
  }

  render() {
    console.log("MountingCycle render called")
    return (
      <div>
        <h1>Mounting Cycle concepts</h1>
        <button onClick={this.handleCustom}>Update state</button>
        <UpdateCycle />


      </div>
    )
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("MountingCycle getSnapshotBeforeUpdate called")
    return null;

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("MountingCycle componentDidUpdate called")

  }

  componentDidMount() {
    console.log("MountingCycle componentDidMount called")

  }


}


export default MountingCycle

//First time when page loaded

// constructor called
// MountingCycle getDerivedStateFromProps called
// MountingCycle render called
// Child constructor called
// Child getDerivedStateFromProps called
// Child render called
// Child componentDidMount called
// MountingCycle componentDidMount called

//When the state is updated

// getDerivedStateFromProps called
// MountingCycle shouldComponentUpdate called
// MountingCycle render called
// Child getDerivedStateFromProps called
// Child shouldComponentUpdate called
// Child render called
// Child getSnapshotBeforeUpdate called
// MountingCycle getSnapshotBeforeUpdate called
// Child componentDidUpdate called
// MountingCycle componentDidUpdate called
