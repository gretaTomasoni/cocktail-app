import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import { filteredList } from "./utils/funcs";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import ModalDrink from "./components/modalDrink";
import "./App.scss";

const App = () => {
  const [cocktailList, setCocktailList] = useState([]);
  const [category, setCategory] = useState("Cocktail");
  const [singleItemContext, setSingleItemContext] = useState({
    isVisible: false,
    payload: {},
  });

  useEffect(() => {
    GET("/search.php?f=m").then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      {singleItemContext.isVisible ? (
        <ModalDrink
          data={singleItemContext.payload}
          setSingleItemContext={setSingleItemContext}
        />
      ) : (
        <>
          <Hero category={category} setCategory={setCategory} />
          <Content
            data={filteredList(cocktailList, "strCategory", category)}
            setSingleItemContext={setSingleItemContext}
          />
        </>
      )}
    </div>
  );
};

export default App;
