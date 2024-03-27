import React from "react";
import Form from "react-bootstrap/Form";
import "./ContactUs.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import cocktailImage from "../../assets/cocktail.png";

export const ContactUs = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Using Service ID:", process.env.REACT_APP_SERVICE_ID);
    console.log("Using Template ID:", process.env.REACT_APP_TEMPLATE_ID);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Wiadomość została wysłana!");
          setUserName(""); // Resetting the states
          setUserEmail("");
          setUserPhone("");
          setMessage("");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Coś poszło nie tak, proszę spróbować ponownie");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email --> Removed as I changed form controls to controlled components (they'll get their value from the React state instead)
    // e.target.reset();
  };

  return (
    <section id="contactUs">
      <div
        className="form-wrapper d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${cocktailImage})`,
        }}
      >
        <Form
          ref={form}
          onSubmit={sendEmail}
          className="form-container text-center"
        >
          <h2 className="form-title">Skontaktuj się z nami</h2>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control
              required
              type="text"
              placeholder="Imię i Nazwisko"
              value={userName}
              name="user_name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              type="email"
              placeholder="E-mail"
              name="user_email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Control
              type="tel"
              placeholder="Telefon (opcjonalny)"
              name="user_phone"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Control
              required
              as="textarea"
              placeholder="Twoj tekst"
              rows={3}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <button
            type="submit"
            disabled={isSubmitting}
            value="Wyślij wiadomość"
            className="form-submit-button mx-auto"
          >
            Wyślij wiadomość
          </button>
          {stateMessage && <div className="message">{stateMessage}</div>}
        </Form>
      </div>
    </section>
  );
};
