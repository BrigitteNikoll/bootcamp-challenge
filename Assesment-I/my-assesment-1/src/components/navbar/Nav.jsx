import { Link } from 'react-router-dom';
import './_Nav.scss';

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <h1>Logo</h1>
        <ul className='nav-links'>
          <li className='nav-item'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
