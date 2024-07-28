import { Link } from 'react-router-dom';

type GalleryItemProps = {
    title: string;
    imgSrc: string;
    id: string;
  }
  
  
  const GalleryItem = ({ title, imgSrc, id }: GalleryItemProps) => {
    return (
      <Link to={`/logement/${id}`}>
        <div className="gallery_element">
          <span className="gallery_element_title">{title}</span>
          <div className="gallery_element_gradient"></div>
          <img src={imgSrc} alt={title}></img>
        </div>
      </Link>
    );
  }

  export default GalleryItem 
