import CV from '../../assets/CV.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>
        Download CV
      </a>
      {/* eslint-disable-next-line  */}
      <a href='#contact' className='btn btnPrimary'>
        Contact me
      </a>
    </div>
  );
};

export default CTA;
