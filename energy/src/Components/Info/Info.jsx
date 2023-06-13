import React, { useState, useContext } from "react";
import "./Info.css";
import LanguageContext from "../LanguageContext";

function Info() {
  const { language } = useContext(LanguageContext);
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (itemId) => {
    setExpandedItem(itemId === expandedItem ? null : itemId);
  };

  const closeModal = () => {
    setExpandedItem(null);
  };

  return (
    <section className="info-energy">
      <div className="contain">
        <div className="heading_info">
          <p>
            {language === "en"
              ? "Fostering Yemen's Vision for Prosperity, Peace, and Sustainability"
              : "تعزيز رؤية اليمن من أجل الرخاء والسلام والاستدامة"}
          </p>
          <p className="desc_heading_info">
            {language === "en"
              ? "We are deeply rooted in our love for Yemen, and our operations align seamlessly with the nation's vision for a future fueled by prosperity, peace, sustainability. We are passionately devoted to the betterment of our society and the preservation of our environment."
              : "نحن متجذرون بعمق في حبنا لليمن ، وتتماشى عملياتنا بسلاسة مع رؤية الأمة لمستقبل يغذيه الرخاء والسلام والاستدامة. نحن ملتزمون بشغف بتحسين مجتمعنا والحفاظ على بيئتنا."}
          </p>
        </div>
        <div className="desc_info">
          <div className="desc_r desc_r1 ">
            <div className="des_r1 desc_feature">
              <span className="feature">
                <i className="fa-solid fa-circle-check check_info"></i>
                <span className="feature-content">
                  <strong>{language === "en" ? "Mission" : "المهمه"}</strong>
                  <p className={expandedItem === "mission" ? "" : "truncate"}>
                    {language === "en"
                      ? "To be a leading energy and oil company in Yemen, delivering sustainable "
                      : "أن نكون شركة رائدة في مجال الطاقة والنفط في اليمن ، نقدم خدمات مستدامة"}
                  </p>
                  {!expandedItem && (
                    <span
                      className="read-more"
                      onClick={() => toggleExpand("mission")}
                    >
                      {language === "en" ? "Read More" : "اقرأ أكثر"}
                      <i class="fa-solid fa-angles-right"></i>
                    </span>
                  )}
                </span>
              </span>
              {expandedItem === "mission" && (
                <div className="read-div">
                  <div className="modal">
                    <div className="modal_title">
                      <strong>
                        {language === "en" ? "Mission" : "المهمه"}
                      </strong>
                    </div>
                    <div className="modal_p">
                      <p>
                        {language === "en"
                          ? "To be a leading energy and oil company in Yemen, delivering sustainable and reliable energy solutions while fostering socio-economic development and environmental stewardship."
                          : "أن نكون شركة رائدة في مجال الطاقة والنفط في اليمن ، حيث نقدم حلول طاقة مستدامة وموثوقة مع تعزيز التنمية الاجتماعية والاقتصادية والإشراف البيئي."}
                      </p>
                    </div>
                    <span className="close" onClick={closeModal}>
                      <i className="fa-solid fa-xmark"></i>
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="des_r1 desc_feature">
              <span className="feature">
                <i className="fa-solid fa-circle-check check_info"></i>
                <span className="feature-content">
                  <strong>{language === "en" ? "Vision" : "الرؤيه"}</strong>
                  <p className={expandedItem === "vision" ? "" : "truncate"}>
                    {language === "en"
                      ? "To empower Yemen's energy sector, driving economic growth, social progress"
                      : "لتمكين قطاع الطاقة في اليمن ، ودفع النمو الاقتصادي ، والتقدم الاجتماعي"}
                  </p>
                  {!expandedItem && (
                    <span
                      className="read-more"
                      onClick={() => toggleExpand("vision")}
                    >
                      {language === "en" ? "Read More" : "اقرأ أكثر"}{" "}
                      <i class="fa-solid fa-angles-right"></i>
                    </span>
                  )}
                </span>
              </span>
              {expandedItem === "vision" && (
                <div className="read-div">
                  <div className="modal">
                    <div className="modal_title">
                      <strong>{language === "en" ? "Vision" : "الرؤيه"}</strong>
                    </div>
                    <div className="modal_p">
                      <p>
                        {language === "en"
                          ? "To empower Yemen's energy sector, driving economic growth, social progress, and environmental sustainability through innovative and responsible oil exploration, production, and distribution."
                          : "لتمكين قطاع الطاقة في اليمن ، ودفع النمو الاقتصادي والتقدم الاجتماعي والاستدامة البيئية من خلال استكشاف النفط وإنتاجه وتوزيعه بطريقة مبتكرة ومسؤولة."}
                      </p>
                    </div>
                    <span className="close" onClick={closeModal}>
                      <i className="fa-solid fa-xmark"></i>
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="des_r1 desc_feature ">
              <span className="feature">
                <i className="fa-solid fa-circle-check check_info"></i>
                <span className="feature-content">
                  <strong>{language === "en" ? "Values" : "القيم"}</strong>
                  <p className={expandedItem === "values" ? "" : "truncate"}>
                    {language === "en"
                      ? " Establishing long-term partnerships based on confidentiality, reliability, and quality"
                      : "إقامة شراكات طويلة الأمد مبنية على السرية والموثوقية والجودة"}
                  </p>
                  {!expandedItem && (
                    <span
                      className="read-more"
                      onClick={() => toggleExpand("values")}
                    >
                      {language === "en" ? "Read More" : "اقرأ أكثر"}{" "}
                      <i class="fa-solid fa-angles-right"></i>
                    </span>
                  )}
                </span>
              </span>
              {expandedItem === "values" && (
                <div className="read-div">
                  <div className="modal">
                    <div className="modal_title">
                      <strong>{language === "en" ? "Values" : "القيم"}</strong>
                    </div>
                    <div className="modal_p">
                      <p>
                        {language === "en" ? (
                          <span className="modal_p-strong">Integrity: </span>
                        ) : (
                          <span className="modal_p-strong">نزاهة: </span>
                        )}
                        {language === "en"
                          ? "We conduct our business with the utmost honesty, transparency, and accountability, upholding the highest ethical standards in all our operations."
                          : "ندير أعمالنا بأقصى درجات الصدق والشفافية والمساءلة، مع التمسك بأعلى المعايير الأخلاقية في جميع عملياتنا."}
                      </p>
                      <p>
                        {language === "en" ? (
                          <span className="modal_p-strong">Excellence: </span>
                        ) : (
                          <span className="modal_p-strong">تفوق: </span>
                        )}
                        {language === "en"
                          ? "We strive for excellence in everything we do, consistently delivering top-tier products, services, and solutions to meet the evolving energy needs of Yemen and its people."
                          : "نسعى جاهدين للتميز في كل ما نقوم به، ونقدم باستمرار منتجات وخدمات وحلول من الدرجة الأولى لتلبية احتياجات الطاقة المتطورة لليمن وشعبه."}
                      </p>
                      <p>
                        <span className="modal_p-strong">
                          {language === "en"
                            ? "Sustainability: "
                            : "الاستدامة: "}
                        </span>
                        {language === "en"
                          ? "We are committed to sustainable practices that minimize our environmental footprint, protect natural resources, and contribute to a greener and cleaner future for Yemen."
                          : "نحن ملتزمون بممارسات مستدامة تقلل من أثرنا البيئي وتحمي الموارد الطبيعية وتساهم في مستقبل أكثر خضرة ونظافة لليمن."}
                      </p>
                      <p>
                        <span className="modal_p-strong">
                          {language === "en" ? "Safety: " : "السلامة: "}
                        </span>
                        {language === "en"
                          ? "We prioritize the safety and well-being of our employees, contractors, partners, and communities, adhering to rigorous safety standards and fostering a culture of continuous improvement."
                          : "نعطي أهمية قصوى لسلامة ورفاهية موظفينا والمقاولين والشركاء والمجتمعات، من خلال التزامنا بمعايير السلامة الصارمة وتعزيز ثقافة التحسين المستمر."}
                      </p>
                      <p>
                        <span className="modal_p-strong">
                          {language === "en" ? "Collaboration: " : "التعاون: "}
                        </span>
                        {language === "en"
                          ? "We foster strong partnerships and collaboration with local communities, government bodies, and industry stakeholders, working together to achieve shared goals and maximize socio-economic benefits for Yemen."
                          : "نحن نعزز الشراكات والتعاون القوي مع المجتمعات المحلية والهيئات الحكومية وأصحاب المصلحة في الصناعة، نعمل معًا لتحقيق الأهداف المشتركة وتحقيق أقصى فوائد اقتصادية واجتماعية لليمن."}
                      </p>
                      <p>
                        <span className="modal_p-strong">
                          {language === "en" ? "Empowerment: " : "تمكين: "}
                        </span>
                        {language === "en"
                          ? "We invest in the development and empowerment of our employees, providing them with the necessary tools, resources, and training to excel in their roles and contribute to Yemen's energy sector's growth."
                          : "نستثمر في تطوير وتمكين موظفينا، ونزودهم بالأدوات والموارد والتدريب اللازم للتفوق في دورهم والمساهمة في نمو قطاع الطاقة في اليمن."}
                      </p>
                      <p>
                        <span className="modal_p-strong">
                          {language === "en"
                            ? "Social Responsibility: "
                            : "المسؤولية الاجتماعية: "}
                        </span>
                        {language === "en"
                          ? "We are dedicated to making a positive impact on the communities we operate in, supporting local initiatives, promoting education, healthcare, and socio-economic development, and empowering Yemeni talent."
                          : "نحن ملتزمون بتحقيق تأثير إيجابي على المجتمعات التي نعمل فيها، ودعم المبادرات المحلية، وتعزيز التعليم والرعاية الصحية والتنمية الاجتماعية وتمكين المواهب اليمنية."}
                      </p>
                      <p>
                        {language === "en"
                          ? "By aligning our "
                          : "من خلال مواءمة "}
                        <span className="modal_p-strong">
                          {language === "en" ? "Mission" : "مهمه"}
                        </span>
                        ,{" "}
                        <span className="modal_p-strong">
                          {language === "en" ? "Vision" : "رؤيه"}
                        </span>
                        ,{" "}
                        <span className="modal_p-strong">
                          {language === "en" ? "Values" : "قيم"}
                        </span>{" "}
                        {language === "en"
                          ? "with Yemen's needs and aspirations, we aim to be a trusted partner in driving the sustainable energy future of Yemen, contributing to the prosperity and well-being of its people while preserving the country's natural heritage."
                          : "مع احتياجات وتطلعات اليمن، نهدف إلى أن نكون شريكًا موثوقًا في تعزيز مستقبل الطاقة المستدامة لليمن، والمساهمة في ازدهار ورفاهية شعبها مع الحفاظ على التراث الطبيعي للبلاد."}
                      </p>
                    </div>

                    <span className="close" onClick={closeModal}>
                      <i className="fa-solid fa-xmark"></i>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
