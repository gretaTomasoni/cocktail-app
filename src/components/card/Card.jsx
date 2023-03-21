import "./index.scss";

const Card = ({ data, setSingleItemContext }) => {
  const onHandleClick = () =>
    setSingleItemContext((prev) => ({
      ...prev,
      payload: data,
      isVisible: true,
    }));

  return (
    <div className="Card">
      <img
        onClick={onHandleClick}
        src={data.strDrinkThumb}
        alt={data.strDrink}
      />
      <div className="Card__text">
        <h2 onClick={onHandleClick} className="Card__text--title">
          {data.strDrink}
        </h2>
      </div>
    </div>
  );
};

export default Card;
