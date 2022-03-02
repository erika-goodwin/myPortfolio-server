import React from "react";
import ImageGallery from "react-image-gallery";

const ProjectImageGallery = ({ imageData }) => {
  let images = [];
  const data = imageData;

  if (imageData) {
    for (let index = 0; index < data.length; index++) {
      images.push(data[index]);
    }
  }

  return <ImageGallery items={images} />;
};

export default ProjectImageGallery;
