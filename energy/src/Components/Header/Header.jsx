import React, { useState, useEffect, useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import img1 from "../../assests/Oil-1.jpg";
import img2 from "../../assests/Oil-2.jpg";
import img3 from "../../assests/Oil-3.jpg";
import img4 from "../../assests/Oil-4.jpg";
import Info from "../Info/Info";
import Service from "../Services/Service";
import LanguageContext from "../LanguageContext";

SwiperCore.use([EffectFade, Navigation, Pagination]);

function Header() {
  const navigate = useNavigate();
  const [swiper, setSwiper] = useState(null);
  const { language } = useContext(LanguageContext);

  const handleButtonClick = (button) => {
    if (button === "About ECO" || button === "حول ECO") {
      navigate("/about");
    } else if (button === "ECO Service" || button === "خدمة ECO") {
      navigate("/services");
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (swiper) {
        swiper.slideNext();
      }
    }, 16000);

    return () => clearInterval(timer);
  }, [swiper]);
  const images = [
    {
      src: img1,
      text:
        language === "en"
          ? "Conda Energy's Regional Expansion in Yemen"
          : "توسع Conda Energy الإقليمي في اليمن",
      paragraph:
        language === "en"
          ? "As a leader in the energy industry, we are proud to have expanded our operations across Yemen, contributing to the growth and development of various regions. Our regional expansion efforts ensure that the benefits of Yemen's energy resources reach far and wide, empowering local communities and fostering economic prosperity."
          : "كشركة رائدة في صناعة الطاقة، نحن فخورون بتوسيع عملياتنا في جميع أنحاء اليمن، والمساهمة في نمو وتطور مختلف المناطق. تضمن جهودنا في التوسع الإقليمي أن تعم الفوائد المتعلقة بموارد الطاقة في اليمن مناطق واسعة، وتمكين المجتمعات المحلية وتعزيز الازدهار الاقتصادي.",
      button: language === "en" ? "About ECO" : "حول ECO",
    },
    {
      src: img2,
      text:
        language === "en"
          ? "Conda Energy: Driving Yemen's Energy Independence"
          : "Conda Energy: دفع استقلالية اليمن في مجال الطاقة",
      paragraph:
        language === "en"
          ? "At Conda Energy, we are committed to driving Yemen's energy independence. Our projects and initiatives aim to reduce reliance on imported energy sources and harness the rich potential of Yemen's own resources. By promoting sustainable energy solutions, we contribute to the country's economic stability and self-sufficiency."
          : "في Conda Energy، نلتزم بدفع استقلالية اليمن في مجال الطاقة. تهدف مشاريعنا ومبادراتنا إلى تقليل الاعتماد على مصادر الطاقة المستوردة واستغلال الإمكانات الغنية لموارد اليمن الخاصة. من خلال تعزيز حلول الطاقة المستدامة، نساهم في الاستقرار الاقتصادي والاكتفاء الذاتي للبلد.",
      button: language === "en" ? "ECO Service" : "خدمة ECO",
    },
    {
      src: img3,
      text:
        language === "en"
          ? "Transforming Yemen's Renewable Energy Landscape"
          : "تحويل المشهد اليمني للطاقة المتجددة",
      paragraph:
        language === "en"
          ? "We are proud to spearhead the transformation of Yemen's energy landscape towards renewable sources. Our renewable energy projects focus on harnessing solar and wind power to provide sustainable and clean energy solutions. By embracing renewable energy, we contribute to a greener and more sustainable future for Yemen."
          : "يسعدنا أن نقود تحويل المشهد اليمني للطاقة نحو مصادر متجددة. تركز مشاريعنا في مجال الطاقة المتجددة على استغلال الطاقة الشمسية والرياح لتوفير حلول طاقة مستدامة ونظيفة. من خلال اعتماد الطاقة المتجددة، نساهم في مستقبل أكثر خضرة وأكثر استدامة لليمن.",
      button: language === "en" ? "About ECO" : "حول ECO",
    },
    {
      src: img4,
      text:
        language === "en"
          ? "Empowering Communities Through Sustainable Energy"
          : "تمكين المجتمعات من خلال الطاقة المستدامة",
      paragraph:
        language === "en"
          ? "Our commitment to sustainable energy extends beyond environmental considerations. We believe in the power of energy to uplift communities and improve livelihoods. Through our initiatives, we empower local communities by providing access to clean energy sources, creating employment opportunities, and supporting social development programs."
          : "تمتد التزامنا بالطاقة المستدامة إلى ما هو أبعد من الاعتبارات البيئية. نحن نؤمن بقوة الطاقة في تحسين حياة المجتمعات وتعزيز سبل المعيشة. من خلال مبادراتنا، نمكن المجتمعات المحلية من خلال توفير الوصول إلى مصادر الطاقة النظيفة، وخلق فرص عمل، ودعم برامج التنمية الاجتماعية.",
      button: language === "en" ? "ECO Service" : "خدمة ECO",
    },
  ];
  return (
    <>
      <section className="header" id="header">
        <Swiper
          spaceBetween={30}
          effect="fade"
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          initialSlide={currentIndex}
          className="mySwiper"
          onSwiper={setSwiper}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="lazy-image-container">
                <LazyLoadImage
                  src={image.src}
                  className="image-heading"
                  alt=""
                  effect="opacity"
                />
              </div>
              <div className="image-text">
                <p>{image.text}</p>
                <p>{image.paragraph}</p>
                <div className="btn-heading">
                  <button onClick={() => handleButtonClick(image.button)}>
                    {image.button}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next swip_btn"></div>
        <div className="swiper-button-prev swip_btn"></div>
      </section>

      <Info />
      <Service />
    </>
  );
}

export default Header;
