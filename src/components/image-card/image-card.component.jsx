import "./image-card.style.css";

const ImageCard = ({ image }) => {
  const { img, id } = image;
  return (
    <div className="imgDivWhite">
      <img src={img} alt="" className="tileImage" />
    </div>
  );
};

export default ImageCard;
