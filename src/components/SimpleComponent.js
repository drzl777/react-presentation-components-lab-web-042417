// Code SimpleComponentHere Here

import React from 'react'

class SimpleComponent extends React.Component {
  constructor(){
    super()
    this.state = {
      mood: 'happy'
    }
  }

  toggleMood() {
    if (this.state.mood === 'happy') {
      return 'sad'
    } else {
      return 'happy'
    }
  }

  handleClick() {
    this.setState({
      mood: this.toggleMood()
    })
  }


  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
