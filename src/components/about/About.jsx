import Photo from "../../assets/Photo.png";
import LinkedInLogo from "../../assets/linkedin-logo.png";
import "../../styles/about.css";

function About() {
  const PDF_FILE_URL = "http://localhost:5173/CV - Paula A. Naranjo.pdf";
  const downloadFile = (url) => {
    const aTag = document.createElement("a");
    const fileName = url.split("/").pop();
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className="about-container">
      <div className="about-left-container">
        <>
          <p id="greeting-text">Hola, soy</p>
          <p id="name-text">Paula A. Naranjo M.</p>
          <p id="occupation-text">
            Psicóloga | Especialista en Gerencia del Talento Humano.
          </p>
        </>
        <div className="about-buttons-container">
          <button
            onClick={() => downloadFile(PDF_FILE_URL)}
            id="about-download-button"
          >
            Descargar CV 📥
          </button>
          <a
            id="about-linkeIn-button"
            href="https://www.linkedin.com/in/paula-andrea-naranjo-mu%C3%B1oz-718290211/"
            target="_blank"
          >
            <img id="about-linkedIn-image" src={LinkedInLogo} alt="" />
          </a>
        </div>
      </div>
      <div className="about-description-container">
        <p id="about-description-text">
          Mi enfoque en la gestión de personas me permite crear estrategias que
          optimizan el rendimiento y bienestar de los equipos. Mis principales
          habilidades son: resolución de problemas, orientación al logro,
          planeación estratégica, liderazgo, trabajo en equipo, adaptabilidad y
          persuasión. Busco contribuir al éxito de las organizaciones mediante
          la gestión efectiva del talento humano, creando entornos laborales
          saludables y productivos.
        </p>
      </div>
      <div className="about-right-container">
        <span id="about-photo-bg"></span>
        <img id="about-photo" src={Photo} alt="" />
      </div>
    </div>
  );
}

export default About;
