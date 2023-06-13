import React, { useContext } from "react";
import "./Sustainability.css";
import image1 from "../../assests/flowerr.jpg";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LanguageContext from "../LanguageContext";

function Sustainability() {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <section className="header-Sustainability">
        <div className="overlay"></div>
        <div className="contain sus_tex">
          <div>
            <h2 className="sus_contents">
              {language === "en" ? "Sustainability" : "الاستدامة"}
            </h2>
            <h5 className="purpose_sus">
              {language === "en"
                ? "Fueling the Future, Sustaining the Planet"
                : "تغذية المستقبل ، والحفاظ على الكوكب"}
            </h5>
          </div>
          <div className="links_sus">
            <Link to="/" className="link_eco">
              {" "}
              {language === "en" ? "Home" : "الرئيسية "}
            </Link>{" "}
            /{" "}
            <a href="#" className="link_eco">
              {language === "en" ? "Sustainability" : "الاستدامة"}
            </a>
          </div>
        </div>
      </section>
      <section className="sustainability">
        <div className="contain sus_cont">
          <div className="sustainability-info">
            <p className="sustainability-paragraph">
              {language === "en"
                ? "For Conda Energy, sustainability is more than just a business strategy—it's a commitment to our shared future. We integrate sustainable practices into every aspect of our operations, aiming to minimize environmental impact while maximizing societal value."
                : "بالنسبة لـ Conda Energy ، الاستدامة هي أكثر من مجرد استراتيجية تجارية - إنها التزام بمستقبلنا المشترك. ندمج الممارسات المستدامة في كل جانب من جوانب عملياتنا ، بهدف تقليل الأثر البيئي وتحقيق القيمة المجتمعية القصوى."}
            </p>
            <p className="sustainability-paragraph">
              {language === "en"
                ? "We believe that in aligning with Yemen's vision of sustainable growth, we not only fortify our economy but also secure the welfare of future generations. We adhere to strict environmental standards, investing in technologies that reduce emissions and practices that protect our biodiversity."
                : "نحن نعتقد أنه بالتوافق مع رؤية اليمن للنمو المستدام ، لا نقوي اقتصادنا فحسب ، بل نضمن أيضًا رفاهية الأجيال القادمة. نلتزم بمعايير بيئية صارمة ، ونستثمر في التكنولوجيات التي تقلل من انبعاثات الغازات الدفيئة والممارسات التي تحمي تنوعنا البيولوجي."}
            </p>
          </div>
          <div className="sustainability-img">
            <LazyLoadImage
              src={image1}
              alt=""
              effect="blur"
              className="lazy-loaded-image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Sustainability;
