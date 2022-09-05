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
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchMovie(search);
  };

  return (

    <div className='containers'>
    <div className='col-8'>
      <form>
        <div className='py-2'>
          <input name='name' type="name" className="form-control" placeholder="Enter name" />
        </div>
        <div className='py-2'>
          <input name='email' type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className='py-2'>
          <textarea className="form-control" rows="5" placeholder='Enter message'></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
  );
}
