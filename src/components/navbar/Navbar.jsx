import nameWhite from '../../assets/nameWhite.png';
import { AiOutlineHome, AiOutlineProject } from 'react-icons/ai';
import { TbBulb } from 'react-icons/tb';
import { MdLibraryBooks } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';

const Navbar = () => {
  return (
    <>
      <div className='header'>
        <div>
          <img src={nameWhite} alt='name' className='name' />
        </div>
        <div className='navbar'>
          <a href='#about' className='link'>
            About
          </a>
          <a href='#experiences' className='link'>
            Experiences
          </a>
          <a href='#portfolio' className='link'>
            Portfolio
          </a>
          <a href='#blog' className='link'>
            Blog
          </a>
          <a href='#contact' className='link'>
            Contact
          </a>
          <a href='#about' className='smlink'>
            <AiOutlineHome className='icon' />
          </a>
          <a href='#experiences' className='smlink'>
            <TbBulb className='icon' />
          </a>
          <a href='#portfolio' className='smlink'>
            <AiOutlineProject className='icon' />
          </a>
          <a href='#blog' className='smlink'>
            <MdLibraryBooks className='icon' />
          </a>
          <a href='#contact' className='smlink'>
            <RiContactsLine />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
