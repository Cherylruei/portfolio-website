import nameWhite from '../../assets/nameWhite.png';

const Navbar = () => {
  return (
    <>
      <div className='header'>
        <div>
          <img src={nameWhite} alt='name' className='name' />
        </div>
        <div className='navbar'>
          <a href='#about'>About</a>
          <a href='#experiences'>Experiences</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#blog'>Blog</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
