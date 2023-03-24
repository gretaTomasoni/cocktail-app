import { useState } from "react";
import styled, { css } from "styled-components";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const HeroTitle = styled.h1`
  font-family: "DM Serif Display", serif;
  font-size: 5rem;
  color: #fafafa;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const HeroSubtitle = styled.p`
  font-family: "DM Serif Display", serif;
  font-size: 2rem;
  color: #fafafa;
`;

const HeroForm = styled.form`
  display: flex;
  flex-direction: column;
  & select {
    width: 70px;
    height: 40px;
    border: none;
    padding: 5px 5px;

    &:focus {
      outline: none;
    }
  }
`;

const HeroSecondList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 0;
  list-style-type: none;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const HeroLi = styled.li`
  font-family: "Montserrat", sans-serif;
  padding: 4px 8px;
  border: 1px solid transparent;
  cursor: pointer;
  color: #fafafa;
  background-color: transparent;

  ${(props) =>
    props.isSelected &&
    css`
      color: #150f0f;
      background-color: #ff6d16;
      border: 1px solid red;
    `}

  &:hover {
    border: 1px solid #ff6d16;
  }
`;

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
    <HeroWrapper>
      <HeroTitle>
        Find <em>your</em> best cocktail
      </HeroTitle>
      <HeroContent>
        <HeroSubtitle>with letter</HeroSubtitle>
        <HeroForm>
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
        </HeroForm>
      </HeroContent>
      <HeroSecondList>
        <HeroLi
          onClick={() => onHandleClick("Cocktail")}
          isSelected={category === "Cocktail"}
        >
          Cocktail
        </HeroLi>
        <HeroLi
          onClick={() => onHandleClick("Ordinary Drink")}
          isSelected={category === "Ordinary Drink"}
        >
          Ordinary Drink
        </HeroLi>
        <HeroLi
          onClick={() => onHandleClick("Shot")}
          isSelected={category === "Shot"}
        >
          Shot
        </HeroLi>

        <HeroLi
          onClick={() => onHandleClick("Punch / Party Drink")}
          isSelected={category === "Punch / Party Drink"}
        >
          Punch
        </HeroLi>
        <HeroLi
          onClick={() => onHandleClick("Coffee / Tea")}
          isSelected={category === "Coffee / Tea"}
        >
          Coffee
        </HeroLi>
      </HeroSecondList>
    </HeroWrapper>
  );
};

export default Hero;
