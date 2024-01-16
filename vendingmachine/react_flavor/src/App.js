import React, { useState } from "react";
import GlobalStyles from "./style/GlobalStyle";
import LogoMobile from "./images/logo-mobile.svg";
import LogoPC from "./images/logo-pc.svg";
import OriginalCola from "./images/Original_Cola.svg";
import VioletCola from "./images/Violet_Cola.svg";
import YellowCola from "./images/Yellow_Cola.svg";
import CoolCola from "./images/Cool_Cola.svg";
import GreenCola from "./images/Green_Cola.svg";
import OrangeCola from "./images/Orange_Cola.svg";

import {
  Cotainer,
  ImageLogo,
  VendingMachine,
  DrinkSelection,
  DrinkItems,
  DrinkLists,
  DrinkItem,
  DrinkName,
  DrinkPrice,
  BalanceDisplay,
  ReturnButton,
  AmountInput,
  DepositButton,
  SelectedDrinks,
  SelectedDrink,
  SelectedStock,
  AcqurieButton,
  WalletDisplay,
  WalletCotent,
  DrinkAcquired,
  AcquiredItems,
  AcquiredItem,
  TotalAmount,
  AcquiredStock,
} from "./style/VendingMachine";

function App() {
  const [balanceDisplay, setBalanceDisplay] = useState(0);
  const [amountInput, setAmountInput] = useState("");
  const [walletDisplay, setWalletDispaly] = useState(25000);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [acquiredItems, setAcquiredItems] = useState([]);
  const [selectedStock, setSelectedStock] = useState({
    Original_Cola: 1,
    Violet_Cola: 1,
    Yellow_Cola: 1,
    Cool_Cola: 1,
    Green_Cola: 1,
    Orange_Cola: 1,
  });

  const handleInputValue = (e) => {
    let value = e.target.value;
    value = Number(value.replaceAll(",", ""));
    const formatValue = value.toLocaleString();
    setAmountInput(formatValue);
  };

  const handleDepositButtonClick = () => {
    const depositAmount = Number(amountInput.replaceAll(",", ""));

    if (depositAmount <= walletDisplay) {
      setWalletDispaly(walletDisplay - depositAmount);
      setBalanceDisplay(balanceDisplay + depositAmount);
      setAmountInput("");
    } else {
      alert("유효한 입금 금액을 입력하세요!");
      setAmountInput("");
    }
  };

  const handleReturnButtonClick = () => {
    if (balanceDisplay > 0) {
      setWalletDispaly(walletDisplay + balanceDisplay);
      setBalanceDisplay(0);
    } else {
      alert("반환할 거스름돈이 없습니다!");
    }
  };

  const handleDrinkItemClick = (drinkName) => {
    const drinkIndex = selectedDrinks.findIndex((drink) => drink === drinkName);

    if (drinkIndex === -1) {
      setSelectedDrinks([...selectedDrinks, drinkName]);
    } else {
      setSelectedStock((prevStock) => ({
        ...prevStock,
        [drinkName]: prevStock[drinkName] + 1,
      }));
    }
  };

  const DrinkImages = {
    Original_Cola: OriginalCola,
    Violet_Cola: VioletCola,
    Yellow_Cola: YellowCola,
    Cool_Cola: CoolCola,
    Green_Cola: GreenCola,
    Orange_Cola: OrangeCola,
  };

  const handleAcquireButtonClick = () => {
    const acquiredItemsToAdd = selectedDrinks.map((drink) => ({
      name: drink,
      stock: selectedStock[drink],
    }));

    setAcquiredItems((prevItems) => [...prevItems, ...acquiredItemsToAdd]);
    setSelectedDrinks([]);
  };

  return (
    <>
      <GlobalStyles />
      <Cotainer>
        <header>
          <h1>
            <picture>
              <source srcSet={LogoMobile} media="(max-width: 792px)" />
              <ImageLogo src={LogoPC} alt="로고" />
            </picture>
          </h1>
        </header>
        <VendingMachine>
          <DrinkSelection>
            <DrinkItems>
              <DrinkLists>
                <DrinkItem>
                  <button
                    type="button"
                    onClick={() => handleDrinkItemClick("Original_Cola")}
                  >
                    <img src={OriginalCola} alt="" />
                    <DrinkName>Original_Cola</DrinkName>
                    <DrinkPrice type="button">1000원</DrinkPrice>
                  </button>
                </DrinkItem>
                <DrinkItem>
                  <button
                    type="button"
                    onClick={() => handleDrinkItemClick("Violet_Cola")}
                  >
                    <img src={VioletCola} alt="" />
                    <DrinkName>Violet_Cola</DrinkName>
                    <DrinkPrice type="button">1000원</DrinkPrice>
                  </button>
                </DrinkItem>
                <DrinkItem>
                  <button
                    type="button"
                    onClick={() => handleDrinkItemClick("Yellow_Cola")}
                  >
                    <img src={YellowCola} alt="" />
                    <DrinkName>Yellow_Cola</DrinkName>
                    <DrinkPrice type="button">1000원</DrinkPrice>
                  </button>
                </DrinkItem>
                <DrinkItem>
                  <button
                    type="button"
                    onClick={() => handleDrinkItemClick("Cool_Cola")}
                  >
                    <img src={CoolCola} alt="" />
                    <DrinkName>Cool_Cola</DrinkName>
                    <DrinkPrice type="button">1000원</DrinkPrice>
                  </button>
                </DrinkItem>
                <DrinkItem>
                  <button
                    type="button"
                    onClick={() => handleDrinkItemClick("Green_Cola")}
                  >
                    <img src={GreenCola} alt="" />
                    <DrinkName>Green_Cola</DrinkName>
                    <DrinkPrice type="button">1000원</DrinkPrice>
                  </button>
                </DrinkItem>
                <DrinkItem>
                  <button
                    type="button"
                    onClick={() => handleDrinkItemClick("Orange_Cola")}
                  >
                    <img src={OrangeCola} alt="" />
                    <DrinkName>Orange_Cola</DrinkName>
                    <DrinkPrice type="button">1000원</DrinkPrice>
                  </button>
                </DrinkItem>
                <li>
                  <BalanceDisplay>
                    <span>잔액 : </span>
                    <strong>{balanceDisplay.toLocaleString()}원</strong>
                  </BalanceDisplay>
                </li>
                <li>
                  <ReturnButton type="button" onClick={handleReturnButtonClick}>
                    거스름돈 변환
                  </ReturnButton>
                </li>
                <li>
                  <AmountInput
                    type="text"
                    value={amountInput}
                    placeholder="입금액 입력"
                    onChange={handleInputValue}
                  />
                </li>
                <li>
                  <DepositButton
                    type="button"
                    onClick={handleDepositButtonClick}
                  >
                    입금
                  </DepositButton>
                </li>
                <li>
                  <SelectedDrinks>
                    {selectedDrinks.map((drink, index) => (
                      <SelectedDrink key={index}>
                        <img src={DrinkImages[drink]} alt="" />
                        <span> {drink} </span>
                        <SelectedStock>
                          <strong>{selectedStock[drink]}</strong>
                        </SelectedStock>
                      </SelectedDrink>
                    ))}
                    {/* <SelectedDrink>
                      <img src={OriginalCola} alt="" />
                      <span> Original_Cola </span>
                      <SelectedStock>
                        <strong>1</strong>
                      </SelectedStock>
                    </SelectedDrink>
                    <SelectedDrink>
                      <img src={GreenCola} alt="" />
                      <span> Green_Cola </span>
                      <SelectedStock>
                        <strong>2</strong>
                      </SelectedStock>
                    </SelectedDrink> */}
                  </SelectedDrinks>
                </li>
                <li>
                  <AcqurieButton
                    type="button"
                    onClick={handleAcquireButtonClick}
                  >
                    획득
                  </AcqurieButton>
                </li>
              </DrinkLists>
            </DrinkItems>
          </DrinkSelection>
          <WalletDisplay>
            <WalletCotent>
              <span>소지금 : </span>
              <strong>{walletDisplay.toLocaleString()}원</strong>
            </WalletCotent>
          </WalletDisplay>
          <DrinkAcquired>
            <h2>획득한 음료</h2>
            <AcquiredItems>
              {acquiredItems.map((item, index) => (
                <AcquiredItem key={index}>
                  <img src={DrinkImages[item.name]} alt="" />
                  <span> {item.name} </span>
                  <AcquiredStock>
                    <strong>{item.stock}</strong>
                  </AcquiredStock>
                </AcquiredItem>
              ))}
              {/* <AcquiredItem>
                <img src={OriginalCola} alt="" />
                <span> Original_Cola </span>
                <AcquiredStock>
                  <strong>1</strong>
                </AcquiredStock>
              </AcquiredItem>
              <AcquiredItem>
                <img src={GreenCola} alt="" />
                <span> Green_Cola </span>
                <AcquiredStock>
                  <strong>2</strong>
                </AcquiredStock>
              </AcquiredItem>
              <AcquiredItem>
                <img src={OrangeCola} alt="" />
                <span> Orange_Cola </span>
                <AcquiredStock>
                  <strong>1</strong>
                </AcquiredStock>
              </AcquiredItem>
              <AcquiredItem>
                <img src={VioletCola} alt="" />
                <span> Violet_Cola </span>
                <AcquiredStock>
                  <strong>1</strong>
                </AcquiredStock>
              </AcquiredItem>
              <AcquiredItem>
                <img src={OriginalCola} alt="" />
                <span> Original_Cola </span>
                <AcquiredStock>
                  <strong>1</strong>
                </AcquiredStock>
              </AcquiredItem>
              <AcquiredItem>
                <img src={GreenCola} alt="" />
                <span> Green_Cola </span>
                <AcquiredStock>
                  <strong>2</strong>
                </AcquiredStock>
              </AcquiredItem>
              <AcquiredItem>
                <img src={OrangeCola} alt="" />
                <span> Orange_Cola </span>
                <AcquiredStock>
                  <strong>1</strong>
                </AcquiredStock>
              </AcquiredItem>
              <AcquiredItem>
                <img src={VioletCola} alt="" />
                <span> Violet_Cola </span>
                <AcquiredStock>
                  <strong>1</strong>
                </AcquiredStock>
              </AcquiredItem> */}
            </AcquiredItems>
            <TotalAmount>
              <span>
                총금액: <strong>0</strong>원
              </span>
            </TotalAmount>
          </DrinkAcquired>
        </VendingMachine>
      </Cotainer>
    </>
  );
}
export default App;

