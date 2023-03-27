import styles from "./index.module.scss";

const Navbar = ({ setReservationVisibility, reservationVisibility }) => {
  const onHandleClick = () => {
    setReservationVisibility((prev) => !prev);
  };
  return (
    <div className={styles.Navbar}>
      <span className={styles.logo}>Cocktail</span>
      <ul className={styles.list}>
        <li>Home</li>
        <li>Popular</li>
        <li>Search</li>
        <li>Collections</li>
        <li>Articles</li>
      </ul>
      <div>
        <button className={styles.button} onClick={onHandleClick}>
          {reservationVisibility ? (
            <span>X</span>
          ) : (
            <>
              <span>Cocktail</span> at home
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
