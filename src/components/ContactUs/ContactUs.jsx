import React from "react";
import Form from "react-bootstrap/Form";
import "./ContactUs.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
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
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage(
            "Coś poszło nie tak, proszę spróbować ponownie później"
          );
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <section id="contactUs">
      <div className="form-wrapper d-flex align-items-center justify-content-center">
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
              name="user_name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              type="email"
              placeholder="E-mail"
              name="user_email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Control
              type="tel"
              placeholder="Telefon (opcjonalny)"
              name="user_phone"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Control
              required
              as="textarea"
              placeholder="Twoj tekst"
              rows={3}
              name="message"
            />
          </Form.Group>

          <button
            variant=""
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
