
import React from 'react'
import { Link } from "react-router-dom";

class APP extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
       
    }
  render() {
      
    return (
        <div>
            <h1>Hello {this.props.number}</h1>
            <Link to="/login">login</Link>
            <Link to="/reg">reg</Link>
        </div>
    );
  }
}
export default APP
