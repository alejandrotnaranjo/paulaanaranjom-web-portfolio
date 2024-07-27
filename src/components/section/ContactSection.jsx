function ContactSection() {
  return (
    <div className="contact-section-container">
      <p id="section-list-title">Contacto</p>
      <div className="contact-form-section-container">
        <form className="contact-form-container" action="">
          <input placeholder="Nombre" type="text" name="" id="" />
          <input placeholder="Correo" type="text" name="" id="" />
          <input placeholder="Asunto" type="text" name="" id="" />
          <input placeholder="Mensaje" type="text" name="" id="message" />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
