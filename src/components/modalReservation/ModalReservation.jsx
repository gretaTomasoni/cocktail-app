import { useState } from "react";
import styles from "./index.module.scss";

const ModalReservation = ({
  cocktailList,
  setReservationVisibility,
  setPopupVisibility,
}) => {
  const [valueDrink, setValueDrink] = useState("");

  const submitFunc = (e) => {
    e.preventDefault();
    setReservationVisibility((prev) => !prev);
    setPopupVisibility(true);
    setTimeout(() => {
      setPopupVisibility(false);
    }, 1350);
  };

  const handleChange = (event) => {
    setValueDrink(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form className={styles.ModalReservation} onSubmit={submitFunc}>
      <h3 className={styles.title}>Choose your cocktail:</h3>
      <select
        name="cocktail"
        id="cocktail"
        value={valueDrink}
        onChange={handleChange}
      >
        {cocktailList.map((item) => (
          <option
            key={item.strDrink}
            value={valueDrink}
            onChange={handleChange}
          >
            {item.strDrink}
          </option>
        ))}
      </select>
      <h3 className={styles.title}>Select hour:</h3>
      <input type="time" />
      <div className={styles.straw}>
        <input type="checkbox" id="straw" name="straw" />
        <label className={styles.label} for="straw">
          Add straw
        </label>
      </div>
      <input
        onClick={submitFunc}
        type="submit"
        value="Order now"
        className={styles.button}
      />
    </form>
  );
};

export default ModalReservation;
