import { useState } from "react";
import { JOBS, EDUCATION, COURSES } from "../../data";
import "../../styles/section.css";
import { renderDetails } from "../../utils/renderDetails";
import ContactSection from "./ContactSection";

function Section() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [popupAdditionalInfo, setPopupAdditionalInfo] = useState(null);

  const handleItemClick = (item) => {
    // console.log(item.details);
    setPopupContent(renderDetails(item.details));
    setPopupAdditionalInfo(item.additionalInfo);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null);
    setPopupAdditionalInfo(null);
  };

  return (
    <div className="section-container">
      <div className="section-list-titles-container">
        <p id="section-list-title">Experiencia laboral</p>
        <p id="section-list-title">Educación</p>
      </div>
      <div className="section-list-divisor">
        <div className="left-division">
          <ul className="section-list-container">
            {JOBS.map((item) => (
              <li
                id="section-list-item"
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                {renderDetails(item.details)}
              </li>
            ))}
          </ul>
          <ContactSection />
        </div>
        <div className="right-division">
          <ul className="section-list-container">
            {EDUCATION.map((item) => (
              <li id="section-list-item" key={item.id}>
                <p id="item-job">{item.details.title}</p>
                <p id="item-company">{item.details.school}</p>
                <p id="item-date">{item.details.date}</p>
              </li>
            ))}
          </ul>
          <p className="courses-title" id="section-list-title">
            Cursos
          </p>
          <ul className="section-list-container">
            {COURSES.map((item) => (
              <li
                className="courses-container"
                id="section-list-item"
                key={item.id}
              >
                <p id="item-job">{item.details.title}</p>
                <p id="item-company">{item.details.school}</p>
                <>
                  <p id="item-date">{item.details.date}</p>
                </>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <div>{popupContent}</div>
            {Array.isArray(popupAdditionalInfo) && (
              <ul id="popup-additional-info-container">
                <p id="popup-additional-info-title">Responsabilidades:</p>
                {popupAdditionalInfo.map((info, index) => (
                  <li key={index} id="popup-additional-info-item">
                    {info}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Section;
