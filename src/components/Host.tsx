import '../styles/host.scss';

type HostProps = {
    name: string;
    picture: string;
  }

function Host({ name, picture }: HostProps) {
  const [firstName, lastName] = name.split(' ');

  return (
    <div className="logement_presentation_host_profil">
      <p className="logement_presentation_host_profil_name">
        {firstName} <br /> {lastName}
      </p>
      <div className="logement_presentation_host_profil_img">
        <img src={picture} alt={name} />
      </div>
    </div>
  );
}

export default Host;