import axios from "axios";
import { useState } from "react";
const LoginForm =() =>
{
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
     const [error, setError] = useState('');
    const handleSubmit =(event)=>
    {
        event.preventDefault();
        const authObject = { 'Project-ID': "a4707d5e-4146-4e51-9e3b-7bd266e7b629", 'User-Name': "Admin", 'User-Secret': "abcde123" };


        try{
            axios.get('https://api.chatengine.io/chats', { headers: authObject });

          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
          window.location.reload();
          setError('');

        }catch(error)
        {
            setError('OOppss incorrect credentials');
        }
    }
    return (
      <div className ="wrapper">
          <div className="form">
          <h1 className="title"> Chat Application</h1>
          <form onSubmit ={handleSubmit}>
              <input 
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="input"
              placeholder="username"
              required
              />

            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="password"
              required
              />

              <div align="center">
                <button type="submit" className="button">
                    <span>Start Chatting..</span>
                </button>
              </div>
              <h2 className="error">
               {error}
              </h2>
          </form>
          </div>

      </div>
    )
}

export default LoginForm