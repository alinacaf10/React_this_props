import React,{Component} from "react";
import "./wine.css";

class Wine extends Component{
  render(){
    return(
      <>
      <h3>{this.props.title}</h3>
      <p className="desc">{this.props.description}</p>
      <p className="rate">{this.props.rating}</p>
      </>
    )
  }
}
export default Wine