import CV from '../../assets/CV.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download>
        Download CV
      </a>
      {/* eslint-disable-next-line  */}
      <a href='#contact'>Contact me</a>
    </div>
  );
};

export default CTA;
