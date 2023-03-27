import styles from "./index.module.scss";

const ModalDrink = ({ data, setSingleItemContext, filteredList }) => {
  const onHandleClick = () =>
    setSingleItemContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

  const onHandleNextBtn = () => {
    setSingleItemContext((prev) => ({
      ...prev,
      payload: filteredList[prev.positionList + 1],
      positionList: prev.positionList + 1,
    }));
    if (data.positionList === filteredList.length - 1) {
      setSingleItemContext((prev) => ({
        ...prev,
        payload: filteredList[filteredList[0]],
        positionList: filteredList[0],
      }));
    }
  };

  const onHandlePrevBtn = () => {
    setSingleItemContext((prev) => ({
      ...prev,
      payload: filteredList[prev.positionList - 1],
      positionList: prev.positionList - 1,
    }));
    if (data.positionList === 0) {
      setSingleItemContext((prev) => ({
        ...prev,
        payload: filteredList[filteredList.length - 1],
        positionList: filteredList.length - 1,
      }));
    }
  };

  const getIngredients = () => {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      let ingredient = data.payload[`strIngredient${i}`];
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
        <img src={data.payload.strDrinkThumb} alt={data.payload.idDrink} />
        <div className={styles.text}>
          <h1>{data.payload.strDrink}</h1>
          <p>Glass: {data.payload.strGlass}</p>
          <ul className={styles.list}>
            <h3>Ingredients:</h3>
            {getIngredients().map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <ul className={styles.list}>
            <h3>Instructions:</h3>
            <p>{data.payload.strInstructions}</p>
          </ul>
          <div className={styles.carouselButton}>
            <button onClick={onHandlePrevBtn}>Previous</button>
            <button onClick={onHandleNextBtn}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDrink;
