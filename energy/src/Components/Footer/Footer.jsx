import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../LanguageContext";

import "./Footer.css";

function Footer() {
  const { language } = useContext(LanguageContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderText = () => {
    if (language === "en") {
      return (
        <>
          <div className="info-company first-info">
            <h1>
              Conda Energy <br />
              <span className="title_footer-first">
                Powering a Brighter, Sustainable Future
              </span>
            </h1>
            <div>
              <p>
                Connect with Conda Energy to discover our services in the oil
                export and import industry. With a commitment to Yemen's vision
                for prosperity, peace, and sustainability, we drive regional
                expansion and energy independence. We provide eco-friendly
                solutions that meet global energy needs while empowering local
                communities. Join us on this journey towards a brighter,
                sustainable future for Yemen and beyond.
              </p>
            </div>
          </div>
          <div className="info-company second-info">
            <h1>Quick Access</h1>
            <div className="link-access">
              <Link className="link1-access" to="/about" onClick={scrollToTop}>
                <i className="fa-solid fa-angle-right"></i> About Us
              </Link>
              <Link
                className="link1-access"
                to="/products"
                onClick={scrollToTop}
              >
                <i className="fa-solid fa-angle-right"></i> Products
              </Link>
              <Link
                className="link1-access"
                to="/services"
                onClick={scrollToTop}
              >
                <i className="fa-solid fa-angle-right"></i> Services
              </Link>
              <Link
                className="link1-access"
                to="/sustainability"
                onClick={scrollToTop}
              >
                <i className="fa-solid fa-angle-right"></i> Sustainability
              </Link>

              <Link
                className="link1-access"
                to="/contact"
                onClick={scrollToTop}
              >
                <i className="fa-solid fa-angle-right"></i> Contact
              </Link>
            </div>
          </div>
          <div className="info-company third-info">
            <h1>Contact</h1>
            <div>
              <p>Conda Energy</p>
              <p className="">
                Address <p className="title-contact">Yemen, Aden</p>
              </p>
              <p>
                Email: <span className="title-contact">info@conda.com</span>
              </p>
              <p>
                T: <span className="title-contact">+971554104018</span>
              </p>
            </div>
          </div>
        </>
      );
    } else if (language === "ar") {
      return (
        <>
          <div className="info-company first-info">
            <h1>
              انرجي كوندا <br />
              <span className="title_footer-first">
                تمكين مستقبل أفضل ومستدام
              </span>
            </h1>
            <div>
              <p>
                اتصل بـ انرجي كوندا لاستكشاف خدماتنا في صناعة تصدير واستيراد
                النفط. بالتزامنا برؤية اليمن للرخاء والسلام والاستدامة ، ندفع
                التوسع الإقليمي والاعتماد الذاتي في الطاقة. نحن نوفر حلولًا
                صديقة للبيئة تلبي احتياجات الطاقة العالمية مع تمكين المجتمعات
                المحلية. انضم إلينا في هذه الرحلة نحو مستقبل أفضل وأكثر استدامة
                لليمن وما بعدها.
              </p>
            </div>
          </div>
          <div className="info-company second-info">
            <h1>الوصول السريع</h1>
            <div className="link-access">
              <Link className="link1-access" to="/about" onClick={scrollToTop}>
                <i className="fa-solid fa-angle-right"></i> من نحن
              </Link>
              <Link
                className="link1-access"
                to="/products"
                onClick={scrollToTop}
              >
                <i className="fa-solid fa-angle-right"></i> المنتجات
              </Link>
              <Link
                className="link1-access"
                to="/services"
                onClick={scrollToTop}
              >
                <i className="fa-solid fa-angle-right"></i> الخدمات
              </Link>
              <Link
                className="link1-access"
                to="/sustainability"
                onClick={scrollToTop}
              >
                <i className="fa-solid fa-angle-right"></i> الاستدامة
              </Link>

              <Link
                className="link1-access"
                to="/contact"
                onClick={scrollToTop}
              >
                <i className="fa-solid fa-angle-right"></i> اتصل بنا
              </Link>
            </div>
          </div>
          <div className="info-company third-info">
            <h1>اتصل بنا</h1>
            <div>
              <p>انرجي كوندا</p>
              <p className="">
                العنوان <p className="title-contact">اليمن، عدن</p>
              </p>
              <p>
                البريد الإلكتروني:{" "}
                <span className="title-contact">info@conda.com</span>
              </p>
              <p>
                الهاتف: <span className="title-contact">+971554104018</span>
              </p>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <section className="footer">
        <div className="contain company-info">{renderText()}</div>
      </section>
      <hr className="hr" />
      <section className="small-footer ">
        <div className="contain sm-f">
          <p>
            ©2023 Conda. All rights reserved. Made by{" "}
            <span className="made_by">S|E</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
