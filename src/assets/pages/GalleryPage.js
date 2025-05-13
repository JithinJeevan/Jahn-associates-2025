import React, { useState } from 'react';
import GalleryModal from '../components/GalleryModal';
import image1 from '../../images/img1.jpeg';
import image2 from '../../images/img2.jpeg';
import image3 from '../../images/img3.jpeg';
import image4 from '../../images/img4.jpeg';
import image5 from '../../images/img5.jpeg';
const GalleryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [image1,image2,image3,image4,image5];

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