import React, { Component } from 'react'
import Bands from "./Bands"

class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({ name: '' })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          Enter a Band:
          <input 
            type="text"
            onChange={this.handleOnChange}
            value={this.state.name}
            />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput;
