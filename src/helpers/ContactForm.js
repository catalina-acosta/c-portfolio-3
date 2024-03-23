import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/ContactForm.css"
import Modal from './Modal'

const ContactForm = () => {
  const form = useRef();

  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    emailjs.sendForm('service_d6yvvsu', 'template_8ebvz37', form.current, 'CT5blvDack2_s7xqK')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          setOpenModal(true); // Open the modal after sending the email
          clearFormFields(); // Clear form fields after sending the email
      }, (error) => {
          console.log(error.text);
      });
  };

  const clearFormFields = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Message</label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <input id='btn-submit'className="openModalBtn" type="submit" value="Send" />
      {openModal && <Modal closeModal={() => setOpenModal(false)} />}
    </form>
  );
}

export default ContactForm;
