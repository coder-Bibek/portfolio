import React from "react";
import Slick from "react-slick";
import Typical from "react-typical";
import developer_image2 from "../../images/developer_image2.jpeg";
import image_dev from "../../images/image_dev.jfif";
const Slider = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    autoplay: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slick">
      <Slick {...settings}>
        <div className="img-div">
          <div className="slick-text">
            <h1>
              A
              <Typical
                steps={[
                  " MERN STACK DEVELOPER",
                  500,
                  " NODE JS DEVELOPER",
                  500,
                  " FULL STACK DEVELOPER",
                  500,
                ]}
                loop={Infinity}
                wrapper="b"
              />
            </h1>
          </div>
          <section className="slick-btns">
            <button className="btn1">
              <a href="tel:9819342206">HIRE ME</a>
            </button>
            <button className="btn2">
              <a
                href="https://pdfhost.io/v/oQLs0ysso_Bibek_Kumar_Bidari.pdf"
                target="_blank"
                rel="noreferrer"
                download="true"
              >
                Download CV
              </a>
            </button>
          </section>
          <img src={image_dev} alt="background-img" className="slick-img" />
        </div>
        <div className="img-div">
          <div className="slick-text">
            <h1>
              A
              <Typical
                steps={[
                  " MERN STACK DEVELOPER",
                  2000,
                  " NODE JS DEVELOPER",
                  2000,
                  " FULL STACK DEVELOPER",
                  2000,
                ]}
                loop={Infinity}
                wrapper="b"
              />
            </h1>
          </div>
          <section className="slick-btns">
            <button className="btn1">
              <a href="tel:9819342206">HIRE ME</a>
            </button>
            <button className="btn2">
              <a
                href="https://pdfhost.io/v/oQLs0ysso_Bibek_Kumar_Bidari.pdf"
                target="_blank"
                rel="noreferrer"
                download="true"
              >
                Download CV
              </a>
            </button>
          </section>

          <img
            src={developer_image2}
            alt="background-img"
            className="slick-img"
          />
        </div>
      </Slick>
    </div>
  );
};
export default Slider;
