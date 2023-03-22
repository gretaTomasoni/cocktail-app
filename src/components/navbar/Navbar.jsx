import { FiSearch } from "react-icons/fi";

import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <span className={styles.logo}>Cocktail</span>
      <ul>
        <li>Home</li>
        <li>Popular</li>
        <li>Search</li>
        <li>Collections</li>
        <li>Articles</li>
      </ul>
      <FiSearch className={styles.search} />
    </div>
  );
};

export default Navbar;
