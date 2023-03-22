import styles from "./index.module.scss";

const Hero = ({ category, setCategory }) => {
  const onHandleClick = (value) => {
    setCategory(value);
  };

  return (
    <div className={styles.Hero}>
      <h1 className={styles.title}>
        Find <em>your</em> best cocktail
      </h1>
      <ul className={styles.secondList}>
        <li
          onClick={() => onHandleClick("Cocktail")}
          className={category === "Cocktail" && styles.active}
        >
          Cocktail
        </li>
        <li
          onClick={() => onHandleClick("Ordinary Drink")}
          className={category === "Ordinary Drink" && styles.active}
        >
          Ordinary Drink
        </li>
        <li
          onClick={() => onHandleClick("Shot")}
          className={category === "Shot" && styles.active}
        >
          Shot
        </li>
        <li
          onClick={() => onHandleClick("Punch / Party Drink")}
          className={category === "Punch / Party Drink" && styles.active}
        >
          Punch
        </li>
        <li
          onClick={() => onHandleClick("Coffee / Tea")}
          className={category === "Coffee / Tea" && styles.active}
        >
          Coffee
        </li>
      </ul>
    </div>
  );
};

export default Hero;
