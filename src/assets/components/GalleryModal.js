import React from 'react';

const GalleryModal = ({ image, showModal, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="modal" onClick={closeModal} style={{margin:".5em"}}>
      <div className="modal-content">
        <img src={image} alt="Enlarged view" />
        <button onClick={closeModal} style={{backgroundColor: "#002244",color:"white"}}>Close</button>
      </div>
    </div>
  );
};

export default GalleryModal;