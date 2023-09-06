import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactUs.module.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8hfp81x', 'template_khi6jbs', form.current, 'H2OMq6qZ6HSKuOctU')
      .then((result) => {
        console.log(result.text);
        resetForm(); // Limpia el formulario después de enviarlo
      }, (error) => {
        console.log(error.text);
      });
  };

  const resetForm = () => {
    form.current.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Telefono</label>
      <input type="text" name="user_phone" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
