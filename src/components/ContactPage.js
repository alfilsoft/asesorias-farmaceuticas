import React, { useState } from 'react';

const ContactService = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      name,
      email,
      message
    };

    // Send the form data to the API endpoint
    fetch('https://api.example.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the API
        console.log(data);
        // Reset the form
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        console.error(error);
        // Handle any errors
      });
  };

  return (
    <div className="container contact-container">
      <h1>Contactenos</h1>
      <p>
        Si desean contactarnos pueden hacerlo en el siguiente formulario. Los responderemos en el menor tiempo posible.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactService;
