import React, { useState } from 'react';
import './App.css';
  const App = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      alert(
      ` Hi: ${name}
        Email: ${email}
        Message ${message}
        ` 
      )
    }
    return (
    <div className="container">
        <h3>Hi There!</h3>
        <form onSubmit={submitForm}>
          <input type="text" className="form-field" placeholder="Name" name="name" onChange={ e => setName(e.target.value)}/>
          <input type="email" className="form-field" placeholder="Email" name="email" onChange={ e => setEmail(e.target.value)}/>
          <textarea name="message" className="form-field" rows={4} onChange={ e => setMessage(e.target.value)}></textarea>
          <input className="btn" type="submit" value="Submit"/>
        </form>
    </div>
    )
  }
 
export default App;
