// import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useState } from "react";

const ContactSection = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm("service_nd0nnpo", "template_qqcgc9d", form.current, {
  //       publicKey: "q5QD-bPiymGvhAh-N",
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_kn5tqkn";
    const templateID = "template_hkb5sr2";
    const publicKey = "kyW3vcNOYIg0iX5Dx";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Paula Andrea Naranjo M.",
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        alert("Correo enviado exitosamente.");
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Error enviando el correo, por favor intentalo más tarde.");
        console.log("Error sending email: ", error);
      });
  };

  return (
    <div id="contact" className="contact-section-container">
      <p id="section-list-title">Contacto</p>
      <div className="contact-form-section-container">
        <form
          id="form__"
          className="contact-form-container"
          onSubmit={handleSubmit}
        >
          <input
            placeholder="Nombre"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Correo"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Mensaje"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
