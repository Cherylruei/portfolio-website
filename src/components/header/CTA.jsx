import { NavLink } from 'react-router-dom';
import CV from '../../assets/CV.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download>
        Download CV
      </a>
      {/* eslint-disable-next-line  */}
      <NavLink to='/contact'>Let's contact</NavLink>
    </div>
  );
};

export default CTA;
