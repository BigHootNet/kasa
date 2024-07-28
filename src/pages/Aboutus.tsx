import aboutus from '../aboutus.json';
import banner_img from '../assets/banner_aboutus.svg'
import Collapse from '../components/Collapse';
import Banner from '../components/Banner';
import '../aboutus.scss';




function Aboutus() {
  return (
    <main className="about">
      <div className="banner">
      <Banner src={banner_img} alt="bannière à propos" text=""/>
      </div>
      <div className="collapse">
        <ul>
          {aboutus.map((item, index) => (
            <li key={index}>
              <Collapse title={item.aboutTitle} content={item.aboutText}/>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Aboutus;