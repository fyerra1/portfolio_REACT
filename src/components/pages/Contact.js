import React from 'react';
import { useState } from 'react';
import '../styles/Pages.css'

export default function Contact() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const inputType = e.target.name;
    const inputValue = e.target.value

    if (inputType === 'name') {
      setName(inputValue);
    }
    else if (inputType === 'email') {
      setEmail(inputValue);
    }
    else setMessage(inputValue);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // searchMovie(search);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (

    <div className='containers mb-4'>
    <h2>Contact</h2>
    <div className='col-8'>
      <form>
        <div className='py-2'>
          <input name='name' type="name" onChange={handleInputChange} value={name} className="form-control" placeholder="Enter name" />
        </div>
        <div className='py-2'>
          <input name='email' type="email" onChange={handleInputChange} value={email} className="form-control" placeholder="Enter email" />
        </div>
        <div className='py-2'>
          <textarea name='message' className="form-control" onChange={handleInputChange} value={message} rows="5" placeholder='Enter message'></textarea>
        </div>
        <button type="submit" className="btn btn-dark" onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  </div>
  );
}
