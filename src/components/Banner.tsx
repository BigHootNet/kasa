type BannerProps = {
  src: string;
  alt?: string;
  text: string;
}

const Banner = ({ src, alt, text }: BannerProps) => {
  return (
    <div className="banner">
      <div className="banner_container">
        <img src={src} alt={alt} />
        <h1 className="banner_text">{text}</h1>
      </div>
    </div>
  );
}

export default Banner