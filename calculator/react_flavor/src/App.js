import React from "react";
import GlobalStyles from "./style/GlobalStyles";
import {
  Container,
  ValueContainer,
  BtnContainer,
  BtnControl,
  BtnNumber,
  BtnSign,
} from "./style/Calculator";
import { useState } from "react";

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [calculatingValue, setCalculatingValue] = useState("0");
  const [previousResultValue, setPreviousResultValue] = useState("0");

  const handleAppendToDisplay = (value) => {
    if (currentValue === "0") {
      setCurrentValue(value);
    } else {
      setCurrentValue(currentValue + value);
      setCalculatingValue(currentValue + value);
    }
  };

  const handleChangeSign = () => {
    if (currentValue !== "" && currentValue !== "0") {
      setCurrentValue(currentValue * -1);
    }
  };

  const handleCalculatingPercentage = () => {
    if (currentValue !== "" && currentValue !== "0") {
      setCurrentValue(currentValue / 100);
    }
  };

  const handlePerformOperation = (a, operator, b) => {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b === 0) {
          return "오류";
        }
        return a / b;
      default:
        throw new Error("Error");
    }
  };

  const handleCalculateResult = () => {
    if (currentValue !== "" && currentValue !== "0") {
      let modifiedInput = currentValue.replace(/x/g, "*").replace(/÷/g, "/");
      const tokens = modifiedInput
        .split(/([+\-*/])/)
        .map((token) => (token === "" ? "0" : token));

      let result = parseFloat(tokens[0]);

      for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const operand = parseFloat(tokens[i + 1]);

        result = handlePerformOperation(result, operator, operand);
      }
      setCalculatingValue(result);
      setPreviousResultValue(result);
      setCurrentValue(result);
    }
  };

  const handleResetClick = () => {
    setCurrentValue("0");
    setPreviousResultValue("0");
    setCalculatingValue("0");
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <ValueContainer>
          <div className="calculating-value">{calculatingValue}</div>
          <div className="input-value">{currentValue}</div>
          <div className="previousResult-value">{previousResultValue}</div>
        </ValueContainer>
        <BtnContainer>
          <BtnControl>
            <li>
              <button type="button" onClick={handleResetClick}>
                AC
              </button>
            </li>
            <li>
              <button type="button" onClick={handleChangeSign}>
                ±
              </button>
            </li>
            <li>
              <button type="button" onClick={handleCalculatingPercentage}>
                %
              </button>
            </li>
          </BtnControl>
          <BtnNumber>
            <li className="first-content">
              <button type="button" onClick={() => handleAppendToDisplay("7")}>
                7
              </button>
              <button type="button" onClick={() => handleAppendToDisplay("8")}>
                8
              </button>
              <button type="button" onClick={() => handleAppendToDisplay("9")}>
                9
              </button>
            </li>
            <li className="second-content">
              <button type="button" onClick={() => handleAppendToDisplay("4")}>
                4
              </button>
              <button type="button" onClick={() => handleAppendToDisplay("5")}>
                5
              </button>
              <button type="button" onClick={() => handleAppendToDisplay("6")}>
                6
              </button>
            </li>
            <li className="third-content">
              <button type="button" onClick={() => handleAppendToDisplay("1")}>
                1
              </button>
              <button type="button" onClick={() => handleAppendToDisplay("2")}>
                2
              </button>
              <button type="button" onClick={() => handleAppendToDisplay("3")}>
                3
              </button>
            </li>
            <li className="fourth-content">
              <button type="button" onClick={() => handleAppendToDisplay("0")}>
                0
              </button>
              <button type="button" onClick={() => handleAppendToDisplay(".")}>
                .
              </button>
            </li>
          </BtnNumber>
          <BtnSign>
            <li>
              <button type="button" onClick={() => handleAppendToDisplay("÷")}>
                ÷
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleAppendToDisplay("x")}>
                x
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleAppendToDisplay("-")}>
                -
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleAppendToDisplay("+")}>
                +
              </button>
            </li>
            <li>
              <button type="button" onClick={handleCalculateResult}>
                =
              </button>
            </li>
          </BtnSign>
        </BtnContainer>
      </Container>
    </>
  );
}
export default App;

