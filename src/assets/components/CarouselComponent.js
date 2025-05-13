import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../images/img1.jpeg';
import image2 from '../../images/img2.jpeg';
import image3 from '../../images/img3.jpeg';
import image4 from '../../images/img4.jpeg';
import image5 from '../../images/img5.jpeg';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image4} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image5} alt="Fifth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;