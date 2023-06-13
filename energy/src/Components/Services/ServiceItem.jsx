import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyLoad from "react-lazyload";

const ServiceItem = ({ service, showMore, toggleShowMore, closeShowMore }) => {
  const { src, title, subtitle, paragraphs } = service;
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };
  return (
    <div className={`service-container ${loaded ? "loaded" : ""}`}>
      <LazyLoadImage
        src={service.src}
        alt=""
        className="service"
        afterLoad={handleImageLoad}
        effect="opacity" // Apply opacity transition effect
      />
      <div className="overlay-eco">
        <p>{title}</p>
        <hr />
        <p>{subtitle}</p>
        <button className="view-more" onClick={toggleShowMore}>
          View More
        </button>
        {showMore && (
          <div className={`service-div ${showMore ? "show" : ""}`}>
            <div>
              <div className="service-eco">
                <button className="close-icon" onClick={closeShowMore}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="img-more">
                <img src={src} alt="" />
              </div>
              <div className="title_more">
                <p>{title}</p>
                <p>{subtitle}</p>
              </div>
              <div className="para_more">
                {paragraphs.map((paragraph, index) => (
                  <p className="first_more" key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceItem;
// import React, { useState } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import LazyLoad from "react-lazyload";

// const ServiceItem = ({
//   service,
//   showMore,
//   toggleShowMore,
//   closeShowMore,
//   language,
// }) => {
//   const { src, paragraphs } = service;
//   const [loaded, setLoaded] = useState(false);

//   const handleImageLoad = () => {
//     setLoaded(true);
//   };

//   const getTitle = () => {
//     return language === "en" ? service.title : service.titleArabic;
//   };

//   const getSubtitle = () => {
//     return language === "en" ? service.subtitle : service.subtitleArabic;
//   };
//   return (
//     <div className={`service-container ${loaded ? "loaded" : ""}`}>
//       <LazyLoadImage
//         src={service.src}
//         alt=""
//         className="service"
//         afterLoad={handleImageLoad}
//         effect="opacity" // Apply opacity transition effect
//       />
//       <div className="overlay-eco">
//         <p>{getTitle()}</p>
//         <hr />
//         <p>{getSubtitle()}</p>
//         <button className="view-more" onClick={toggleShowMore}>
//           View More
//         </button>
//         {showMore && (
//           <div className={`service-div ${showMore ? "show" : ""}`}>
//             <div>
//               <div className="service-eco">
//                 <button className="close-icon" onClick={closeShowMore}>
//                   <i className="fa-solid fa-xmark"></i>
//                 </button>
//               </div>
//               <div className="img-more">
//                 <img src={src} alt="" />
//               </div>
//               <div className="title_more">
//                 <p>{getTitle()}</p>
//                 <p>{getSubtitle()}</p>
//               </div>
//               <div className="para_more">
//                 {paragraphs.map((paragraph, index) => (
//                   <p className="first_more" key={index}>
//                     {language === "en" ? paragraph : paragraph.arabic}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServiceItem;
