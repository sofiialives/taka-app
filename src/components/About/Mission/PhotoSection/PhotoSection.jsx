import { images } from "../../../../utils/photoArray";
import { PhotoItem, PhotoList, PhotoTextDiv } from "./PhotoSection.styled";
import { Link, useLocation } from "react-router-dom";

const PhotoSection = () => {
  const location = useLocation();

  return (
    <PhotoList>
      {images.map((image, index) => (
        <PhotoItem key={index}>
          <Link to={`/about/${index}`} state={{ from: location }}>
            <PhotoTextDiv>
              <h3 className="photo-title">{image.title}</h3>
              <p className="photo-text">{image.text}</p>
            </PhotoTextDiv>
            <img src={image.img} alt="cloth" className="image" />
          </Link>
        </PhotoItem>
      ))}
    </PhotoList>
  );
};

export default PhotoSection;
