import React from "react";
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import imgSlide from "../../assets/images/chuck-slide.png";


const slideSettings = () => ({
  className: "center",
  centerMode: true,
  infinite: true,
  dots: true,
  centerPadding: "60px",
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

export default ({ categorias, handleCommand}) => {
  
  const categoriaItem = (categorias || []).map((item, index) => {
    return (
      <div className="card" key={index}>
        <div className="card-body">
          <img src={imgSlide} title="Chuck Norris" alt="Chuck Norris talk..." />
          <p>about:</p>
          <h3>{item}</h3>
          <button 
            className="btn-cs" 
            onClick={e => {
                  handleCommand({ op: "categoria-detalhe", params: `${item}` });
            }}>Answer</button>
        </div>
      </div>
    );
  });
  
  return (
    <div className="galeria">
      <Slider {...slideSettings()}>
        {categoriaItem}
      </Slider>
    </div>
  );
};
