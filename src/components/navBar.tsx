import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ham from '../resources/ham.svg';

import '../style/navBar.scss';

const NavBar  = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e:any)=>{
    setIsOpen(!isOpen);
  }

  const hamBtn = useRef(null);

  return (
    <nav id='navBar' className='deviceActive'>
      <div>
          <h2>Anastasiia</h2>
        <div>
          <div className={isOpen ? 'open' : ''}>
            <Link to="/" onClick={ handleClick }>Home</Link>
            <Link to="/about" onClick={ handleClick }>About</Link>
          </div>
          <img src={ham} ref={hamBtn} onClick={handleClick} alt="" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
