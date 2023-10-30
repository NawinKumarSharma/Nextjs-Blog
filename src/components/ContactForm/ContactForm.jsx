'use client'

import styles from './contact.module.css';
import { useState } from "react";
import { submitContact } from '@/app/contact/action';



const ContactForm = () => {

  const [status, setStatus] = useState(null);

  const handleSubmit = async (formData) => {

    try {
      const response = await submitContact({
        username: formData.get("username"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      });

      console.log('Server response:', response);

      if (response.status === 'OK') {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (e) {
      console.log('Error:', e);
    }


  }

  return (
    <form className={styles.contact_form}
      action={handleSubmit}
    >
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name
          <input type="text" name="username" id="username"
            placeholder="Enter your name"
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Email
          <input type="text" name="email" id="email"
            placeholder="Enter your email"
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Phone Number
          <input type="number" name="phone" id="phone"
            placeholder="Enter your phone"
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message
          <textarea name="message" id="message" rows={5}
            placeholder="Enter your Message"
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div>
        {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
        {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

        <button type="submit" className={styles.button}>Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;