import { useState, ReactNode } from 'react';
import '../styles/collapse.scss';

type CollapseProps = {
  title: string;
  content: ReactNode;
};

function Collapse(props: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(prev => !prev);
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleCollapse();
    }
  };

  return (
    <div className="collapse">
      <div
        tabIndex={0}
        className={`collapse_title ${isOpen ? 'open' : ''}`}
        onClick={toggleCollapse}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
      >
        {props.title}
        <div className="chevron"></div>
      </div>
      <div className={`collapse_text ${isOpen ? 'open' : ''}`}>
        {props.content}
      </div>
    </div>
  );
}

export default Collapse;
