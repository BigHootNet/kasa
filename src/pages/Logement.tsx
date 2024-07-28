import { useParams } from 'react-router-dom';
import ErrorPage from './Error404';
import GetLogement from '../hooks/Getlogement';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Tags from '../components/Tags';
import Collapse from '../components/Collapse';
import Slideshow from '../components/Slideshow';
import '../logement.scss';


export const Logement = () => {
  const {id} = useParams();
  const logement = GetLogement(id);

  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <div className="logement">   
        <Slideshow pictures={logement.pictures} />
        <div className="logement_presentation">
          <div className="logement_presentation_text">
            <h2 className="logement_presentation_text_name">
              {logement.title}
            </h2>
            <p className="logement_presentation_text_location">
              {logement.location}
            </p>
            <Tags tags={logement.tags} />
          </div>
          <div className="logement_presentation_host">
            <Rating value={parseInt(logement.rating, 10)} />
            <Host name={logement.host.name} picture={logement.host.picture} />
          </div>
        </div>
        <div className="logement_collapse">
          <Collapse title="Description" content={logement.description} />
          <Collapse
            title="Équipements"
            content={
              <div>
                {logement.equipments.map((equip, index) => (
                  <div key={index}>{equip}</div>
                ))}
              </div>
            }
          />
        </div>   
    </div>
  );
}


export default Logement;


