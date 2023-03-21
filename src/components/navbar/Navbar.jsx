import { FiSearch } from "react-icons/fi";

import "./index.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <span className="Navbar__logo">Cocktail</span>
      <ul>
        <li>Home</li>
        <li>Popular</li>
        <li>Search</li>
        <li>Collections</li>
        <li>Articles</li>
      </ul>
      <FiSearch className="Navbar__search" />
    </div>
  );
};

export default Navbar;
