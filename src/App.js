import React from 'react';
import {Button, Input, Progress} from 'semantic-ui-react'

function Login2(){

    return(
      <div>
      <Input/>
      <Button onClick = { (e) => {
        console.log(e)
        alert(e.target.value)
      } } > 로그인 </Button>
      </div>

    )
}

class Login extends React.Component{
  constructor(){
      super()
      this.state = {id : "환영합니다!"}
  }

  render(){
    return(
      <div>
      <Input onChange = { (e) => this.setState({id : e.target.value})}/>
      <Button onClick = { (e) => {
        console.log(e)
        alert(this.state.id)
      } } > Login </Button>
      </div>

    )

  constructor()
  }
}

function App() {
  return (
    <div>
    <p>이소진</p>
    <Button> hi </Button>
    <Login / >
    <Progress percent = {33} indicating/>
    </div>
  );
}

export default App;
