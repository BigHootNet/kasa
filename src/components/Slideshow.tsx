import { useState } from 'react';
import '../styles/slideshow.scss';

type SlideProps = {
  pictures: string[];
}

function Slideshow({ pictures }: SlideProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (newIndex: number) => {
    setTimeout(() => {
      setCurrentIndex(newIndex);
    }, 500);
  };

  const handleNext = () => {
    if (currentIndex < pictures.length - 1) {
      changeSlide(currentIndex + 1);
    } else {
      changeSlide(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      changeSlide(currentIndex - 1);
    } else {
      changeSlide(pictures.length - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, callback: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      callback();
    }
  };

  return (
    <div className="logement_slideshow">
      <img src={pictures[currentIndex]} alt={`Image ${currentIndex}`} />
      {pictures.length > 1 && (
        <div className="logement_slideshow_arrows">
          <button
            className="prev"
            onClick={handlePrev}
            onKeyDown={(e) => handleKeyDown(e, handlePrev)}
            aria-label="Image précédente"
          ></button>
          <button
            className="next"
            onClick={handleNext}
            onKeyDown={(e) => handleKeyDown(e, handleNext)}
            aria-label="Image suivante"
          ></button>
        </div>
      )}
      {pictures.length > 1 && (
        <div className="logement_slideshow_indicator">
          {`${currentIndex + 1}/${pictures.length}`}
        </div>
      )}
    </div>
  );
}

export default Slideshow;
