  import React from 'react';
//  import logo from './logo.svg';
  import Clock from './Clock';
  import Toggle from './Toggle';
  import LoggingButton from './LoggingButton';
  import LoginControl from './LoginControl';
  

function Welcome(props){
  return <h3>Olá, {props.name}</h3>
}

function Avatar(props){
  return(
    <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
  );
}

function UserInfo(props){
  return(
    <div className="UserInfo">
      <Avatar user={props.user}/>
      <div className="UserInfo-name">{props.user.name}
      </div>
    </div>
  );
}

function Comment(props){
  return(
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {(props.date)}
      </div>
    </div>
  )
}
const comment={
  date: new Date().toLocaleTimeString(),
  text: "Utilizando componentes em React",
  author: {
    name: "Felipe",
    avatarUrl: "http://placekitten.com/g/64/64"
  }
};

  function handleClick(e){
    e.preventDefault();
    console.log('Clicou');
  }


  class TodoList extends React.Component{
    render(){
      return(
        <div className="todoListMain">
          <div className="header">
        <LoginControl name="Felipe"/>
        
        <LoggingButton />
        <Toggle/>
        
        </div>
        </div>
        
      );
    }
  }


  export default TodoList;