import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_nd0nnpo", "template_qqcgc9d", form.current, {
        publicKey: "q5QD-bPiymGvhAh-N",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact-section-container">
      <p id="section-list-title">Contacto</p>
      <div className="contact-form-section-container">
        <form
          className="contact-form-container"
          ref={form}
          onSubmit={sendEmail}
        >
          <input disabled placeholder="Nombre" type="text" name="user_name" />
          <input disabled placeholder="Correo" type="email" name="user_email" />
          <input disabled placeholder="Asunto" type="text" name="" />
          <input disabled placeholder="Mensaje" id="message" name="message" />
          <button disabled type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
