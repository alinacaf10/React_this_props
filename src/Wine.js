import React, { Component } from "react";
import "./wine.css";

class Wine extends Component {
  render() {
    let like=<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/red-heart_2764-fe0f.png" alt="like"/>;
    if(this.props.like){
      like=""
    }
    return (
      <>
        <h3>{this.props.title}</h3>
        <p className="desc">{this.props.description}</p>
        <p className="rate" type="number">{this.props.rating}</p>
        <p>{like}</p>
      </>
    );
  }
}
export default Wine;
