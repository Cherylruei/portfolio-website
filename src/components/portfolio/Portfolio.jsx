import TPEL from '../../assets/TaipeiParkingLotsCover.png';
import Twitter from '../../assets/twitterCover.png';
import Cover from '../../assets/cover.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio' className='container containerPortfolio'>
      <h5>Portfolios</h5>
      <h2>My Recent Work</h2>
      <div className='projects'>
        <Project
          title='Taipei Parking Lots'
          github='https://github.com/Cherylruei/taipei-parking-lots'
          demo='https://cherylruei.github.io/taipei-parking-lots/'
          picture={TPEL}
        />
        <Project
          title='React Twitter'
          github='https://github.com/LJBL22/react_twitter'
          demo='https://ljbl22.github.io/react_twitter/login'
          picture={Twitter}
        />
        <Project
          title='Personal Website'
          github='https://github.com/Cherylruei/portfolio-website`'
          demo='https://cherylruei.github.io/portfolio-website/'
          picture={Cover}
        />
      </div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
function Project({ title, github, demo, picture }) {
  return (
    <div className='project'>
      <div className='projectImg'>
        <img src={picture} alt='projectImg' />
      </div>
      <div>
        <h4 className='title'>
          <b>{title}</b>
        </h4>
        <div className='link'>
          <a href={github} className='btn'>
            Github
          </a>
          <a href={demo} className='btn btnPrimary'>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
