
import { Link } from "react-router-dom";
import './_Nav.css'

const Nav = () => {
  return (
    <div >
      <Link to="/paint" className="nav__link">Paint</Link>
      <Link to="/emoji" className="nav__link">Text Emoji</Link>
      <Link to="/gif" className="nav__link">Gif Generator</Link>
    </div>
  );
}

export default Nav;
