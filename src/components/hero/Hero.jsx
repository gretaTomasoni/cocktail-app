import { useState } from "react";
import styles from "./index.module.scss";

const Hero = ({ category, setCategory, setLetter }) => {
  const onHandleClick = (value) => {
    setCategory(value);
  };
  const [selectedLetter, setSelectedLetter] = useState("");

  const handleChange = (event) => {
    setSelectedLetter(event.target.value);
    setLetter(event.target.value);
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTVWYZ";

  return (
    <div className={styles.Hero}>
      <h1 className={styles.title}>
        Find <em>your</em> best cocktail
      </h1>
      <div className={styles.HeroContent}>
        <p className={styles.subtitle}>with letter</p>
        <form className={styles.form}>
          <select
            value={selectedLetter}
            onChange={handleChange}
            defaultValue="m"
          >
            <option value="">Select</option>
            {alphabet.split("").map((letter) => (
              <option key={letter} value={letter}>
                {letter}
              </option>
            ))}
          </select>
        </form>
      </div>
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
