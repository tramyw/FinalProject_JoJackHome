import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const ImageG = () => {
  const images = [
    {
      original:
        "https://main.spca.org.hk/Welfare/HOMING2/animalphotos/l/542970.jpg",
      thumbnail:
        "https://main.spca.org.hk/Welfare/HOMING2/animalphotos/l/542970.jpg",
    },
    {
      original:
        "https://main.spca.org.hk/Welfare/HOMING2/animalphotos/l/544392.jpg",
      thumbnail:
        "https://main.spca.org.hk/Welfare/HOMING2/animalphotos/l/544392.jpg",
    },
    {
      original:
        "https://www.spca.org.hk/wp-content/uploads/2023/02/spca_blue.png",
      thumbnail:
        "https://www.spca.org.hk/wp-content/uploads/2023/02/spca_blue.png",
    },
    {
      original:
        "https://static.wikia.nocookie.net/rickandmorty/images/7/70/Snuffles-helmet.jpg",
      thumbnail:
        "https://static.wikia.nocookie.net/rickandmorty/images/7/70/Snuffles-helmet.jpg",
    },
  ];
  return (
    <div className="App">
      <ImageGallery items={images} />
    </div>
  );
};

export default ImageG;
