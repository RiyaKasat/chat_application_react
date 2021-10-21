import logo from './logo.svg';
import './App.css';
import {ChatEngine } from 'react-chat-engine'
import  ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App = () =>
{

  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine 
     height = "100vh"
     projectID ="a4707d5e-4146-4e51-9e3b-7bd266e7b629"
     userName ={localStorage.getItem('username')}
     userSecret={localStorage.getItem('password')}
     renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
    
  />
  )
}
  

export default App;
