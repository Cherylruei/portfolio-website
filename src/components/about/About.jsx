import CTA from './CTA';
import MeOutside from '../../assets/meOutside.jpg';

const About = () => {
  return (
    <section id='about' className='container containerAbout'>
      <div className='intro'>
        {/* eslint-disable-next-line  */}
        <h5>Hello I'm</h5>
        <h1>Ruei Chun Li</h1>
        <h5>Front-End Engineer</h5>
        <CTA />
      </div>
      <div className='picture'>
        <img src={MeOutside} alt='meOutside' className='aboutMeImg' />
      </div>
    </section>
  );
};

export default About;
