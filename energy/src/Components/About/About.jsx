import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import logo from "../../assests/Logo-notext.png";
import LanguageContext from "../LanguageContext";

import "./About.css";
function About(props) {
  const [showFirstText, setShowFirstText] = useState(true);

  const { language } = useContext(LanguageContext);

  const showFirstTextOnClick = () => {
    setShowFirstText(true);
  };

  return (
    <>
      <LazyLoad>
        <section className="about_eco ">
          <div className="overlay"></div>
          <div className="contain about_contain">
            <div className="eco_text ">
              <p>{language === "en" ? "About Us" : "معلومات عنا"}</p>
              <p className="changing-text">
                {language === "en"
                  ? "Embracing Yemen’s Vision - Our Journey Towards Tomorrow"
                  : "احتضان رؤية اليمن - رحلتنا نحو الغد"}
              </p>
            </div>
            <div className="link_about">
              <span>
                <Link className="Link_to" to="/">
                  {language === "en" ? "Home" : "الرئيسية"}{" "}
                </Link>{" "}
                /
              </span>
              <span>
                <Link className="Link_to" to="/about">
                  {" "}
                  {language === "en" ? "About" : "معلومات"}
                </Link>
              </span>
            </div>
          </div>
        </section>
      </LazyLoad>
      <section className="about-us">
        <div className="contain about_us-contain">
          <div className="about_btns">
            <button
              className={`we_about about_btn ${showFirstText ? "active" : ""}`}
              onClick={showFirstTextOnClick}
            >
              <i className="fa-solid fa-angle-right"></i>{" "}
              <p>{language === "en" ? "We are" : " من نحن "}</p>
            </button>
          </div>
          <div className="text_about_us">
            {showFirstText && (
              <div className="first_text">
                <p>
                  {language === "en"
                    ? "Since our establishment, Conda Energy has been relentlesslyaligning its values, operations, and ambitions with Yemen'svision for the future. As an active contributor to thecountry's economic growth, we focus on environmentally responsible and socially inclusive oil export and import practices."
                    : "منذ تأسيسنا ، عملت Conda Energy بلا هوادة على مواءمة قيمها وعملياتها وطموحاتها مع رؤية اليمن للمستقبل. بصفتنا مساهمًا نشطًا في النمو الاقتصادي للبلد ، فإننا نركز على ممارسات تصدير واستيراد النفط المسؤولة بيئيًا والشاملة اجتماعياً"}
                </p>
                <p>
                  {language === "en"
                    ? "Our commitment is to provide top-notch, eco-friendly solutions that serve not just our customers, but our community and our country. With our work, we intend to further establish Yemen as a trusted global partner in the oil industry, bolstering its economic resilience and contributing to nation-building."
                    : "التزامنا هو تقديم حلول صديقة للبيئة من الدرجة الأولى لا تخدم عملائنا فحسب ، بل تخدم مجتمعنا وبلدنا. من خلال عملنا ، نعتزم زيادة ترسيخ اليمن كشريك عالمي موثوق به في صناعة النفط ، وتعزيز مرونتها الاقتصادية والمساهمة في بناء الدولة."}
                </p>
              </div>
            )}
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
