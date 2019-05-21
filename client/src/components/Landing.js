import React, { Component } from 'react'
import Lists from './lists'
class Landing extends Component {
  render() {
    return (
      
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
          
            {localStorage.usertoken ? <Lists/> :  <h1 className="text-center">WELCOME TO , (TO DO _LIST)</h1>}
          </div>
        </div>
      </div>
      
    )
  }
}

export default Landing
