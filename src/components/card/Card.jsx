import styles from "./index.module.scss";

const Card = ({ data, setSingleItemContext }) => {
  const onHandleClick = () =>
    setSingleItemContext((prev) => ({
      ...prev,
      payload: data,
      isVisible: true,
    }));

  return (
    <div className={styles.Card}>
      <img
        onClick={onHandleClick}
        src={data.strDrinkThumb}
        alt={data.strDrink}
      />
      <div className={styles.text}>
        <h2 onClick={onHandleClick} className={styles.title}>
          {data.strDrink}
        </h2>
      </div>
    </div>
  );
};

export default Card;
