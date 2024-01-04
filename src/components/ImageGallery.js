import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const ImageG = (props) => {
  const images = [
    {
      original: props.data[0].image,
      thumbnail: props.data[0].image,
    },
    {
      original: "../icons/HKSCDA_logo.jpeg",
      thumbnail: "../icons/HKSCDA_logo.jpeg",
    },
  ];
  return (
    <div className="App">
      <ImageGallery items={images} />
    </div>
  );
};

export default ImageG;
