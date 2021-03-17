import React, { Component } from 'react'


class Detail extends Component {
  render(props) {
    console.log(this.props.match.params.id)
    return (
      <div>{this.props.match.params.id}</div>
    )
  }
}

export default Detail
