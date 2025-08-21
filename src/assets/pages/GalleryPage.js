import React, { useState } from 'react';
import GalleryModal from '../components/GalleryModal';
import image1 from '../../images/Image6.jpg';
import image2 from '../../images/Image7.jpg';
import image3 from '../../images/Image8.jpg';
import image4 from '../../images/Image9.jpg';
import image5 from '../../images/Image10.jpg';
import image6 from '../../images/Image11.jpg';
import image7 from '../../images/Image12.jpg';
import image8 from '../../images/Image13.jpg';
import image9 from '../../images/Image14.jpg';
import image10 from '../../images/Image15.jpg';
import image11 from '../../images/Image16.jpg';
import image12 from '../../images/Image17.jpg';
import image13 from '../../images/Image18.jpg';
import image14 from '../../images/Image19.jpg';
import image15 from '../../images/Image20.jpg';


const GalleryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Gallery</h1>
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
      <GalleryModal image={selectedImage} showModal={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default GalleryPage;