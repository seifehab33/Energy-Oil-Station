import React, { useState, lazy, Suspense, useContext } from "react";
import "./Service.css";
import service1 from "../../assests/service-1.jpg";
import service2 from "../../assests/service-2.png";
import service3 from "../../assests/service-3.jpg";
import service4 from "../../assests/service-4.jpg";
import LanguageContext from "../LanguageContext";
const ServiceItem = lazy(() => import("./ServiceItem"));

function Service() {
  const { language } = useContext(LanguageContext);

  const services = [
    {
      id: 1,
      src: service1,
      title: language === "en" ? "Finance" : "التمويل",
      subtitle:
        language === "en"
          ? "Financial analysis and valuation are crucial in assessing the performance, profitability, and value of energy and oil companies."
          : "تحليل وتقييم المالي هي جوهرية في تقييم أداء وربحية وقيمة شركات الطاقة والنفط.",
      paragraphs: [
        language === "en"
          ? "We provide customized financial solutions to support energy projects, fostering investments and partnerships that contribute to Yemen's energy sector development."
          : "نقدم حلولًا مالية مخصصة لدعم مشاريع الطاقة ، وتعزيز الاستثمارات والشراكات التي تسهم في تنمية قطاع الطاقة في اليمن.",
      ],
    },
    {
      id: 2,
      src: service2,
      title: language === "en" ? "Trading" : "التداول",
      subtitle:
        language === "en"
          ? "Trading in the energy and oil industry is a significant aspect that drives global markets"
          : "التداول في صناعة الطاقة والنفط هو جانب هام يدفع الأسواق العالمية",
      paragraphs: [
        language === "en"
          ? "We excel in trading petroleum products, petrochemicals, and commodities, actively participating in the global energy market while promoting Yemen's energy resources."
          : "نتفوق في تداول منتجات البترول والبتروكيماويات والسلع ، مشاركين بنشاط في السوق العالمية للطاقة مع تعزيز موارد الطاقة في اليمن.",
      ],
    },
    {
      id: 3,
      src: service3,
      title: language === "en" ? "Risk Management" : "إدارة المخاطر",
      subtitle:
        language === "en"
          ? "The oil and energy industry is characterized by price volatility due to various factors such as geopolitical events"
          : "تتميز صناعة النفط والطاقة بتقلبات الأسعار بسبب عوامل مختلفة مثل الأحداث الجيوسياسية",
      paragraphs: [
        language === "en"
          ? "With our robust risk management strategies, we mitigate risks and ensure the security of energy operations, aligning with Yemen's vision for a stable and resilient energy industry."
          : "مع استراتيجيات إدارة المخاطر القوية لدينا ، نقلل من المخاطر ونضمن أمان عمليات الطاقة ، متماشين مع رؤية اليمن لصناعة الطاقة الاستقرارية والمتينة.",
      ],
    },
    {
      id: 4,
      src: service4,
      title: language === "en" ? "Shipping & Package" : "الشحن والتعبئة",
      subtitle:
        language === "en"
          ? "Shipping plays a vital role in the oil and energy industry, facilitating the transportation of crude oil, refined products, and natural gas"
          : "يلعب الشحن دورًا حيويًا في صناعة النفط والطاقة ، ويسهل نقل النفط الخام والمنتجات المكررة والغاز الطبيعي",
      paragraphs: [
        language === "en"
          ? "Our efficient shipping and logistics solutions ensure the safe and reliable transportation of energy products, facilitating the growth of Yemen's energy exports."
          : "تضمن حلول الشحن والخدمات اللوجستية لدينا نقل منتجات الطاقة بطريقة آمنة وموثوقة ، مما يسهم في نمو صادرات الطاقة في اليمن.",
      ],
    },
  ];

  const [showMoreMap, setShowMoreMap] = useState({});

  const closeShowMore = (id) => {
    setShowMoreMap((prevShowMoreMap) => ({
      ...prevShowMoreMap,
      [id]: false,
    }));
  };

  const toggleShowMore = (id) => {
    setShowMoreMap((prevShowMoreMap) => ({
      ...prevShowMoreMap,
      [id]: !prevShowMoreMap[id],
    }));
  };
  let serviceTitle = "";
  let serviceDescription = "";

  if (language === "en") {
    serviceTitle = "Service";
    serviceDescription =
      "Ignite your business and empower Yemen with Conda Energy's world-class oil export and import services, delivering top-quality crude oil globally and ensuring Yemen's industries operate at their peak.";
  } else if (language === "ar") {
    serviceTitle = "الخدمات";
    serviceDescription =
      "قم بتنشيط عملك ومكن اليمن مع خدمات تصدير واستيراد النفط العالمية لشركة كوندا للطاقة ، حيث نقوم بتوصيل النفط الخام عالي الجودة عالميًا وضمان تشغيل الصناعات اليمنية على قدم وساق.";
  }
  return (
    <section className="services">
      <div className="contain service-contain">
        <div className="text-service">
          <p>{serviceTitle}</p>
          <p>{serviceDescription}</p>
        </div>
        <div className="views-services scrollable-container">
          {services.map((service) => (
            <Suspense key={service.id} fallback={<div>Loading...</div>}>
              <ServiceItem
                service={service}
                showMore={showMoreMap[service.id]}
                toggleShowMore={() => toggleShowMore(service.id)}
                closeShowMore={() => closeShowMore(service.id)}
              />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
