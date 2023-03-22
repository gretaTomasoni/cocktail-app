import styles from "./index.module.scss";

const ModalDrink = ({ data, setSingleItemContext }) => {
  const onHandleClick = () =>
    setSingleItemContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

  const getIngredients = () => {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      let ingredient = data[`strIngredient${i}`];
      if (ingredient !== null) {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  };
  return (
    <div className={styles.ModalDrink}>
      <div>
        <button onClick={onHandleClick} className={styles.button}>
          ← Go back
        </button>
      </div>
      <div className={styles.card}>
        <img src={data.strDrinkThumb} alt={data.idDrink} />
        <div className={styles.text}>
          <h1>{data.strDrink}</h1>
          <p>Glass: {data.strGlass}</p>
          <ul className={styles.list}>
            <h3>Ingredients:</h3>
            {getIngredients().map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <ul className={styles.list}>
            <h3>Instructions:</h3>
            <span>{data.strInstructions}</span>
          </ul>
          <div className={styles.carouselButton}>
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDrink;
