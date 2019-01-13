import React, { Component } from 'react'

class User extends Component {
    constructor(){
        super();
        this.state={
          name:"Nitesh",
          age:28,
          skills:[{value:"Sleeping"},
                {value:"writing codes"}
        ]
        }
        
    }
    handleClick=(e)=>{
        e.preventDefault();
        this.setState({
            age: this.state.age +3
        })
    }
  render() {
    return (
      <div>
         <h1>Hi , this is a react pp</h1>
         <p>Your name is {this.state.name}  and age is {this.state.age}</p>   
        <h2>Skills</h2>
        <ul>
            {this.state.skills.map((hobby,idx)=>{
                return <li key={idx}>{hobby.value}</li>
            })}
        </ul>
        <button onClick={this.handleClick}>Make me older</button>
        <button>Greet </button>
      </div>
      
    )
  }
};


export default  User
