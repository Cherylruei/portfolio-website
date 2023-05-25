import todolist from '../../assets/todolist.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio' className='container container_portfolio'>
      <h2>My Recent Work</h2>
      <h5>Portfolios</h5>
      <div className='projects'>
        <Project
          title='Taipei Parking Lots'
          github=''
          demo=''
          picture={todolist}
        />
        <Project title='React Twitter' github='' demo='' picture={todolist} />
        <Project
          title='Personal Website'
          github=''
          demo=''
          picture={todolist}
        />
      </div>
    </section>
  );
};

function Project({ title, github, demo, picture }) {
  return (
    <div className='card'>
      <img src={picture} alt='projectImg' className='picture' />
      <div>
        <h4 className='title'>
          <b>{title}</b>
        </h4>
        <div className='link'>
          <a href={github} className='btn'>
            Github
          </a>
          <a href={demo} className='btn btn-primary'>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
