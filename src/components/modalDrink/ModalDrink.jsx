import "./index.scss";

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
    <div className="ModalDrink">
      <div>
        <button onClick={onHandleClick} className="ModalDrink_button">
          ← Go back
        </button>
      </div>
      <div className="ModalDrink_card">
        <img src={data.strDrinkThumb} alt={data.idDrink} />
        <div className="SingleItem__text">
          <h1>{data.strDrink}</h1>
          <p>Glass: {data.strGlass}</p>
          <ul className="SingleItem__text--lists">
            <h3>Ingredients:</h3>
            {getIngredients().map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <ul className="SingleItem__text--lists">
            <h3>Instructions:</h3>
            <span>{data.strInstructions}</span>
          </ul>
          <div className="SingleItem__image--carousel">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDrink;
