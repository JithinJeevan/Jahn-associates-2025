import React, { useState } from 'react';
import GalleryModal from '../components/GalleryModal';
import image1 from '../../images/Image6.jpg';
import image2 from '../../images/Image7.jpg';
import image3 from '../../images/Image8.jpg';
import image4 from '../../images/Image9.jpg';
import image6 from '../../images/Image11.jpg';
import image7 from '../../images/Image12.jpg';
import image9 from '../../images/Image14.jpg';
import image10 from '../../images/Image15.jpg';
import image11 from '../../images/Image16.jpg';
import image12 from '../../images/Image17.jpg';
import image13 from '../../images/Image18.jpg';
import image14 from '../../images/Image19.jpg';
import image15 from '../../images/Image20.jpg';
import image16 from '../../images/Image21.jpg';
import imageR1 from '../../images/Image.R1.jpg';
import imageR2 from '../../images/Image.R2.jpg';
import imageR3 from '../../images/Image.R3.jpg';
import imageR4 from '../../images/Image.R4.jpg';
import imageR5 from '../../images/Image.R5.jpg';
import imageR6 from '../../images/Image.R6.jpg';
import imageR7 from '../../images/Image.R7.jpg';
import imageR8 from '../../images/Image.R8.jpg';
import imageR9 from '../../images/Image.R9.jpg';
import imageR10 from '../../images/Image.R10.jpg';
import imageC1 from '../../images/ImageC1.jpg';
import imageC2 from '../../images/ImageC2.jpg';
import imageC3 from '../../images/ImageC3.jpg';
import imageC4 from '../../images/ImageC4.jpg';
import imageC5 from '../../images/ImageC5.jpg';


const GalleryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [image1,image2,image3,image4,image6,image7,image9,image10,image11,image12,image13,image14,image15,image16];
  const imagesR = [imageR1,imageR2,imageR3,imageR4,imageR5,imageR6,imageR7,imageR8,imageR9,imageR10];
  const imagesC =[imageC1,imageC2,imageC3,imageC4,imageC5];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2 style={{
        display: 'flex',
        justifyContent: 'center', // Centers horizontally
        alignItems: 'center',    // Centers vertically
        color: "#002244",
        textDecoration: 'underline'
      }}>Commercial</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Gallery"
            onClick={() => openModal(image)}
            className="gallery-image"
          />
        ))}
      </div>
      <h2 style={{
        display: 'flex',
        justifyContent: 'center', // Centers horizontally
        alignItems: 'center',    // Centers vertically
        color: "#002244",
        marginTop: "1.5em",
        textDecoration: 'underline'
      }}>Residential</h2>
      <div className="gallery">
        {imagesR.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Gallery"
            onClick={() => openModal(image)}
            className="gallery-image"
          />
        ))}
      </div>
      <h2 style={{
        display: 'flex',
        justifyContent: 'center', // Centers horizontally
        alignItems: 'center',    // Centers vertically
        color: "#002244",
        marginTop: "1.5em",
        textDecoration: 'underline'
      }}>Commercial</h2>
      <div className="gallery">
        {imagesC.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Gallery"
            onClick={() => openModal(image)}
            className="gallery-image"
          />
        ))}
      </div>
      <GalleryModal image={selectedImage} showModal={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default GalleryPage;