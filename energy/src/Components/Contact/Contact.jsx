import React, { useState, useContext } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import LanguageContext from "../LanguageContext";

function Contact(props) {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const { language } = useContext(LanguageContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validateMessage = (input) => {
      // Define a regular expression pattern to match potentially harmful content
      const harmfulPattern =
        /<\s*script|javascript:|on\w+=|<\s*iframe|<\s*a\s+href\s*=\s*("|'|)(https?:\/\/)(www\.)?example\.com(|\/|\?|#\S*|\.\S*)\1>|<[^>]+>/gi;

      if (harmfulPattern.test(input)) {
        return false;
      }

      return true;
    };

    // Perform validation
    const errors = {};
    if (!name) {
      errors.name = language === "en" ? "Name is required" : "الاسم مطلوب";
    } else if (!nameRegex.test(name)) {
      errors.name =
        language === "en" ? "Invalid name format" : "صيغة الاسم غير صالحة";
    } else if (/\d/.test(name)) {
      errors.name =
        language === "en"
          ? "Name must not contain numbers"
          : "يجب ألا يحتوي الاسم على أرقام";
    }
    if (!email) {
      errors.email =
        language === "en" ? "Email is required" : "البريد الإلكتروني مطلوب";
    } else if (!emailRegex.test(email)) {
      errors.email =
        language === "en"
          ? "Invalid email format"
          : "تنسيق البريد الإلكتروني غير صالح";
    }
    if (!message) {
      errors.message =
        language === "en" ? "Message is required" : "الرسالة مطلوبة";
    } else if (!validateMessage(message)) {
      errors.message =
        language === "en"
          ? "Invalid message content"
          : "محتوى الرسالة غير صالح";
    }

    if (Object.keys(errors).length === 0) {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      setTimeout(() => {
        setSuccess(false);
      }, 6000);
    } else {
      setErrors(errors);
    }
  };

  const renderPlaceholder = (enPlaceholder, arPlaceholder) => {
    return language === "en" ? enPlaceholder : arPlaceholder;
  };

  return (
    <React.Fragment>
      <LazyLoad offset={100} height={200} debounce={500} throttle={200} fade>
        <section className="contact">
          <div className="contain contact_contain">
            <div className="text_contact">
              <p>{language === "en" ? "Contact" : "اتصل"}</p>
            </div>
            <div className="links_contact">
              <Link to="/" className="link_contact eco_link">
                {language === "en" ? "Home" : "الرئيسية "}
              </Link>
              /
              <Link className="link_contact" to="/contact">
                {language === "en" ? "Contact" : " اتصل بنا"}
              </Link>
            </div>
          </div>
        </section>
      </LazyLoad>

      <section className="contact_form">
        <div className="contain form_contain">
          <div className="enquires">
            <p>{language === "en" ? "For Enquires" : "للاستفسارات"}</p>
            <div className="con_info">
              <div className="plus_info">
                <a
                  href="https://wa.me/971554104018"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-plus fa_info"></i>
                </a>
              </div>
              <div className="info">
                <i className="fa-solid fa-phone fa_info"></i>
                <div className="info-2">
                  <p>{language === "en" ? "Phone" : "رقم الهاتف"}</p>
                  <p>+971 55 410 4018</p>
                </div>
              </div>
            </div>
            <div className="con_info">
              <div className="plus_info">
                <a href="mailto:conda@info.com">
                  <i className="fa-solid fa-plus fa_info"></i>
                </a>
              </div>
              <div className="info">
                <a href="mailto:conda@info.com">
                  <i className="fa-solid fa-envelope fa_info "></i>
                </a>
                <div className="info-2">
                  <p>{language === "en" ? "Email" : "البريد الإلكتروني"}</p>
                  <p>info@conda.com</p>
                </div>
              </div>
            </div>
            <div className="con_info">
              <div className="plus_info">
                <a
                  href="https://www.google.com/maps/place/Aden,+Yemen/@12.8102785,44.9331649,12z/data=!3m1!4b1!4m6!3m5!1s0x161e1cd6515ec22f:0x945fb3c323696fe9!8m2!3d12.7854969!4d45.0186548!16zL20vMDloNmc?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-plus fa_info"></i>
                </a>
              </div>
              <div className="info">
                <i className="fa-solid fa-location-dot fa_info"></i>{" "}
                <div className="info-2">
                  <p>{language === "en" ? "Conda Tower" : "برج كوندا"}</p>
                  <p>{language === "en" ? "Aden, Yemen" : "عدن، اليمن"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="form">
            <form action="" onSubmit={handleSubmit}>
              <div className="inputs_form">
                <input
                  type="text"
                  name="name"
                  placeholder={renderPlaceholder(
                    "Name & Surname",
                    "الاسم واللقب"
                  )}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                {errors.name && <span className="error">{errors.name}</span>}

                <input
                  type="email"
                  name="email"
                  placeholder={renderPlaceholder("E-mail", "البريد الإلكتروني")}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {errors.email && <span className="error">{errors.email}</span>}
                <textarea
                  placeholder={renderPlaceholder("Message", "الرسالة")}
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
              <button className="Submited">
                {language === "en" ? "Send" : "إرسال"}
              </button>
            </form>

            {success && (
              <p className="success_message">
                {language === "en"
                  ? "The Form is Submitted Successfully. We will reply as soon as possible."
                  : "تم إرسال النموذج بنجاح. سنرد في أقرب وقت ممكن."}
              </p>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;
