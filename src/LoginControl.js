import React from 'react';
import Clock from './Clock';

function Login(props){
    return(
        <div>
        <button onClick={props.onClick}>Login</button>
        </div>
    );
}

function Logout(props){
    return(
        <div>
        <button onClick={props.onClick}>Logout</button>
        <Clock/>
        </div>
    );
}

function UserGreeting(props){
    return <h1>Bem vindo {props.name}</h1>;
}

function GuestGreeting(props){
    return <h1>Faça o login</h1>;
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting name={props.name} />;
    } else {
    return <GuestGreeting/>
    }
}


class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick(){
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogoutClick(){
        this.setState({
            isLoggedIn: false
        })
    }
    render(){
          const isLoggedIn = this.state.isLoggedIn;
          let button = null;
          if(isLoggedIn){
            button = <Logout onClick={this.handleLogoutClick}/>;
          } else {
              button = <Login onClick={this.handleLoginClick}/>;
          }
      return (
        <div>
        <Greeting name={this.props.name} isLoggedIn={isLoggedIn}/>
        {button}
        </div>
      );
    }
}

export default LoginControl;