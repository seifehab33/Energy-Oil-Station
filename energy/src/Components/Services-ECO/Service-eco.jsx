import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Service-eco.css";
import LazyLoad from "react-lazyload";
import LanguageContext from "../LanguageContext";

import service_eco_1 from "../../assests/service-2.png";
import service_eco_2 from "../../assests/service-4.jpg";
import service_eco_3 from "../../assests/service-1.jpg";
import service_eco_4 from "../../assests/service-3.jpg";

function Service_eco() {
  const [showFirstText, setShowFirstText] = useState(true);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showthirdText, setShowthirdText] = useState(false);
  const [showfourthText, setShowfourthText] = useState(false);
  const { language } = useContext(LanguageContext);

  const showFirstTextOnClick = () => {
    setShowFirstText(true);
    setShowSecondText(false);
    setShowthirdText(false);
    setShowfourthText(false);
  };

  const showSecondTextOnClick = () => {
    setShowFirstText(false);
    setShowSecondText(true);
    setShowthirdText(false);
    setShowfourthText(false);
  };

  const showthirdTextOnClick = () => {
    setShowFirstText(false);
    setShowSecondText(false);
    setShowthirdText(true);
    setShowfourthText(false);
  };

  const showfourthTextOnClick = () => {
    setShowFirstText(false);
    setShowSecondText(false);
    setShowthirdText(false);
    setShowfourthText(true);
  };

  return (
    <>
      <LazyLoad offset={20} height={100} debounce={500} throttle={200} fade>
        <section className="heading-service">
          <div className="overlay"></div>
          <div className="contain eco_contain">
            <div className="text_service eco_text">
              <p>{language === "en" ? "Services" : "خدماتنا"}</p>
              <p>
                {language === "en"
                  ? "Aligned with Yemen's vision for sustainable energy, Conda Energy offers a comprehensive range of services that support the country's energy goals"
                  : "متوافقة مع رؤية اليمن للطاقة المستدامة ، تقدم كوندا للطاقة مجموعة شاملة من الخدمات التي تدعم أهداف الطاقة في البلاد"}
              </p>
            </div>
            <div className="Links">
              <Link className="link_eco" to="/">
                {language === "en" ? "Home" : "الرئيسية "}
              </Link>{" "}
              /{" "}
              <Link className="link_eco">
                {language === "en" ? "Service" : "خدمات"}
              </Link>
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
              <p>{language === "en" ? "Trading " : "التجاره"}</p>
            </button>
            <button
              className={`world_about about_btn ${
                showSecondText ? "active" : ""
              }`}
              onClick={showSecondTextOnClick}
            >
              <i className="fa-solid fa-angle-right"></i>{" "}
              <p>
                {language === "en" ? "Shipping & Package" : "التعبئة والشحن"}
              </p>
            </button>
            <button
              className={`world_about about_btn ${
                showthirdText ? "active" : ""
              }`}
              onClick={showthirdTextOnClick}
            >
              <i className="fa-solid fa-angle-right"></i>{" "}
              <p>{language === "en" ? "Finance" : "التمويل"}</p>
            </button>
            <button
              className={`world_about about_btn ${
                showfourthText ? "active" : ""
              }`}
              onClick={showfourthTextOnClick}
            >
              <i className="fa-solid fa-angle-right"></i>{" "}
              <p>{language === "en" ? "Risk management" : "إدارة المخاطر"}</p>
            </button>
          </div>
          <div className="text_about_us">
            {showFirstText && (
              <div className="service-eco_text">
                <div className="texts-first">
                  <p>
                    {language === "en"
                      ? "Strong partnerships and global experience"
                      : "شراكات قوية وخبرة عالمية"}
                  </p>
                  <p>
                    {language === "en"
                      ? "We excel in trading petroleum products, petrochemicals, and commodities, actively participating in the global energy market while promoting Yemen's energy resources."
                      : "نتفوق في تداول منتجات البترول والبتروكيماويات والسلع ، مشاركين بنشاط في السوق العالمية للطاقة مع تعزيز موارد الطاقة في اليمن."}
                  </p>
                </div>
                <div className="img-service_eco">
                  <img src={service_eco_1} alt="" />
                </div>
              </div>
            )}
            {showSecondText && (
              <div className="service-eco_text">
                <div className="texts-first">
                  <p>
                    {language === "en"
                      ? "Reliable, cost-effective, solution-driven"
                      : "موثوقة وفعالة من حيث التكلفة وتعتمد على الحلول"}
                  </p>
                  <p>
                    {language === "en"
                      ? "Our efficient shipping and logistics solutions ensure the safe and reliable transportation of energy products, facilitating the growth of Yemen's energy exports."
                      : "تضمن حلول الشحن والخدمات اللوجستية لدينا نقل منتجات الطاقة بطريقة آمنة وموثوقة ، مما يسهم في نمو صادرات الطاقة في اليمن."}
                  </p>
                </div>
                <div className="img-service_eco">
                  <img src={service_eco_2} alt="" />
                </div>
              </div>
            )}
            {showthirdText && (
              <div className="service-eco_text">
                <div className="texts-first">
                  <p>
                    {language === "en"
                      ? "Innovative and effective financial solutions in trading"
                      : "حلول مالية مبتكرة وفعالة في التداول"}
                  </p>
                  <p>
                    {language === "en"
                      ? "We provide customized financial solutions to support energy projects, fostering investments and partnerships that contribute to Yemen's energy sector development."
                      : "نقدم حلولًا مالية مخصصة لدعم مشاريع الطاقة ، وتعزيز الاستثمارات والشراكات التي تسهم في تنمية قطاع الطاقة في اليمن."}
                  </p>
                </div>
                <div className="img-service_eco">
                  <img src={service_eco_3} alt="" />
                </div>
              </div>
            )}
            {showfourthText && (
              <div className="service-eco_text">
                <div className="texts-first">
                  <p>
                    {language === "en"
                      ? "Monitoring and managing risks with expertise for the best outcome"
                      : "مراقبة وإدارة المخاطر بخبرة للحصول على أفضل نتيجة"}
                  </p>
                  <p>
                    {language === "en"
                      ? "With our robust risk management strategies, we mitigate risks and ensure the security of energy operations, aligning with Yemen's vision for a stable and resilient energy industry."
                      : "مع استراتيجيات إدارة المخاطر القوية لدينا ، نقلل من المخاطر ونضمن أمان عمليات الطاقة ، متماشين مع رؤية اليمن لصناعة الطاقة الاستقرارية والمتينة."}
                  </p>
                </div>
                <div className="img-service_eco">
                  <img src={service_eco_4} alt="" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service_eco;
