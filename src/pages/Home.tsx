
import GalleryItem from '../components/GalleryItem';
import banner_img from '../assets/banner.svg';
import GetLogements from "../hooks/Getlogements";
import Banner from "../components/Banner";

import '../home.scss';



export const Home = () => {
  const data = GetLogements();

  return (
    <div className="home">
      <Banner src={banner_img} alt="bannière accueil" text="Chez vous, partout et ailleurs" />
      <div className="gallery">
        {data.map(item =>
          <GalleryItem key={item.id} title={item.title} imgSrc={item.cover} id={item.id} />
        )}
      </div>
    </div>
  )
};


export default Home;