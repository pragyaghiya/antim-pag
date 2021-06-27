import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const images = [
    "https://english.cdn.zeenews.com/sites/default/files/2019/07/04/800949-army-3-970.jpg",
    "https://www.thestatesman.com/wp-content/uploads/2020/05/Army-new-1024x683.jpg",
    "https://lh3.googleusercontent.com/proxy/H8yCFWd8n6gSoEibNaXPZUHQ8stLuowLTBct6ce0DAHPqIB7Huz4lAe5DU55mIXkKEsnQaDDVrrliESs9h3ByYg1ddkYrru9D0YbDD457zSyIbF0ZJ1FCU5p1UpHK42D9XDWLpJGM4_Yfpv-olDJhsL0vdY7laAd-rMJfo18-z21JpLZfxdbbYMbCR8fwJytQ6WpEYSQNSbLZRe0lYtIrTtCy1SLj6uFBNsyqw",
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="h-96">
      {images.map((link) => (
        <Carousel.Item>
          <img
            className="d-block w-100 object-contain h-96 object-center"
            src={link}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
