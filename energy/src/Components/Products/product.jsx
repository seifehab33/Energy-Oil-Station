import React, { useContext } from "react";
import LazyLoad from "react-lazyload";
import "./product.css";
import { Link } from "react-router-dom";
import LanguageContext from "../LanguageContext";

function Product() {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <LazyLoad offset={50} height={200} debounce={500} throttle={200} fade>
        <section className="header-products">
          <div className="overlay"></div>

          <div className="contain eco_contain">
            <div>
              <h2 className="product_contents">
                {language == "en" ? "Products" : "منتجات"}
              </h2>
              <h5 className="trade">
                {language === "en"
                  ? "Conda Energy trades and invests all across the Oil&amp;Gas and petrochemical sector from crude to polymers"
                  : "تتاجر شركة Conda Energy وتستثمر في جميع أنحاء قطاع النفط والغاز والبتروكيماويات من النفط الخام إلى البوليمرات"}
              </h5>
            </div>
            <div className="linkss">
              <Link to="/" className="link link_eco">
                {language === "en" ? "Home" : "الرئيسية "}
              </Link>
              /
              <Link to="/products" className="link link_eco">
                {language === "en" ? " Product" : " منتحات"}
              </Link>
            </div>
          </div>
        </section>
      </LazyLoad>
      <section className="about_products">
        <div className="contain prod_content">
          <p className="text">
            <p>
              {language === "en"
                ? "Conda Energy trades and invests across the entire spectrum of the oil and gas as well as petrochemical sectors, focusing on enhancing Yemen's energy potential. Our product portfolio includes crude oil, petroleum derivatives, and polymers. Leveraging our expertise in upstream trading and downstream solutions, we contribute to the growth of Yemen's energy industry by ensuring price correlation, processing, and optimizing feedstock and derivative markets. This integrated approach, coupled with our extensive physical trade capabilities, strengthens Yemen's energy value chain."
                : "تتاجر شركة Conda Energy وتستثمر عبر مجموعة كاملة من قطاعات النفط والغاز وكذلك البتروكيماويات ، مع التركيز على تعزيز إمكانات الطاقة في اليمن. تشمل مجموعة منتجاتنا النفط الخام والمشتقات البترولية والبوليمرات. بالاستفادة من خبرتنا في التجارة الأولية وحلول المصب ، نساهم في نمو صناعة الطاقة في اليمن من خلال ضمان ارتباط الأسعار والمعالجة وتحسين أسواق المواد الأولية والمشتقات. هذا النهج المتكامل ، إلى جانب قدراتنا التجارية المادية الواسعة ، يعزز سلسلة قيمة الطاقة في اليمن."}
            </p>
            <p></p>
          </p>
          <ul className="product_categories">
            <li>{language === "en" ? "CRUDE & OIL" : "الخام والنفط"} </li>
            <li>
              {language === "en" ? "Petroleum derivatives" : "مشتقات النفط"}{" "}
            </li>
            <li>{language === "en" ? "Polymers" : "البوليمرات"}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Product;
