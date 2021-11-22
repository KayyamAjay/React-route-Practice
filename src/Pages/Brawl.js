import { Link } from "react-router-dom";
const Brawl = () => {
  return (
    <ul>
      <li>
        <Link to="/brawl/piper">Piper</Link>
      </li>
      <li>
        <Link to="/brawl/amber">Amber</Link>
      </li>
      <li>
        <Link to="/brawl/lola">Lola</Link>
      </li>
    </ul>
  );
};

export default Brawl;
