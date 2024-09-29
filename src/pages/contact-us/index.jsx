import React from 'react'
import styles from './contact.module.css'
export const ContactPage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Contact Page</h1>
      <h2 style={{ textAlign: "center" }}>This is the contact page</h2>
      <form className={styles.form}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
