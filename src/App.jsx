import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import { filteredList } from "./utils/funcs";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import ModalDrink from "./components/modalDrink";
import ModalReservation from "./components/modalReservation";
import Popup from "./components/popup";
import styles from "./App.module.scss";

const App = () => {
  const [cocktailList, setCocktailList] = useState([]);
  const [category, setCategory] = useState("Cocktail");
  const [singleItemContext, setSingleItemContext] = useState({
    isVisible: false,
    payload: {},
    positionList: null,
  });
  const [letter, setLetter] = useState("m");
  const [reservationVisibility, setReservationVisibility] = useState(false);
  const [popupVisibility, setPopupVisibility] = useState(false);

  useEffect(() => {
    GET(`/search.php?f=${letter}`).then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, [letter]);

  return (
    <div className={styles.App}>
      <Navbar
        setReservationVisibility={setReservationVisibility}
        reservationVisibility={reservationVisibility}
      />
      {reservationVisibility ? (
        <ModalReservation
          cocktailList={cocktailList}
          setReservationVisibility={setReservationVisibility}
          setPopupVisibility={setPopupVisibility}
        />
      ) : (
        <>
          {singleItemContext.isVisible ? (
            <ModalDrink
              data={singleItemContext}
              setSingleItemContext={setSingleItemContext}
              filteredList={filteredList(cocktailList, "strCategory", category)}
            />
          ) : (
            <>
              <Hero
                category={category}
                setCategory={setCategory}
                setLetter={setLetter}
              />
              <Content
                data={filteredList(cocktailList, "strCategory", category)}
                setSingleItemContext={setSingleItemContext}
              />
              {popupVisibility && <Popup />}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
