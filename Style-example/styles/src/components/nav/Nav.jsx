import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/usestate">usestate</Link>
      <Link to="/useeffect">useeffect </Link>
      <Link to="/useeffectwin">useeffectWindows </Link>
      <Link to="/usereducer">useReducer </Link>
    </div>
  );
};

export default Nav;
