import React, { Component } from 'react';
//<div className="card-front" style={{backgroundImage: `url(${''})`}}>
export default class CardFront extends Component {

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
