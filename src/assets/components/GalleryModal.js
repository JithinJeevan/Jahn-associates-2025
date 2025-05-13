import React from 'react';

const GalleryModal = ({ image, showModal, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content">
        <img src={image} alt="Enlarged view" />
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default GalleryModal;