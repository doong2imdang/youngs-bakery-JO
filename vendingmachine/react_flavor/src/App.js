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
  const [amountInput, setAmountInput] = useState("");

  const handleInputValue = (e) => {
    let value = e.target.value;
    value = Number(value.replaceAll(",", ""));
    const formatValue = value.toLocaleString();
    setAmountInput(formatValue);
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
                  <button type="button">
                    <img src={OriginalCola} alt="" />
                    <DrinkName>Original_Cola</DrinkName>
                    <DrinkPrice type="button">1000원</DrinkPrice>
                  </button>
                </DrinkItem>
                <DrinkItem>
                  <button type="button">
                    <img src={VioletCola} alt="" />
                    <DrinkName>Violet_Cola</DrinkName>
                    <DrinkPrice type="button">1000원</DrinkPrice>
                  </button>
                </DrinkItem>
                <DrinkItem>
                  <button type="button">
                    <img src={YellowCola} alt="" />
                    <DrinkName>Yellow_Cola</DrinkName>
                    <DrinkPrice type="button">1000원</DrinkPrice>
                  </button>
                </DrinkItem>
                <DrinkItem>
                  <button type="button">
                    <img src={CoolCola} alt="" />
                    <DrinkName>Cool_Cola</DrinkName>
                    <DrinkPrice type="button">1000원</DrinkPrice>
                  </button>
                </DrinkItem>
                <DrinkItem>
                  <button type="button">
                    <img src={GreenCola} alt="" />
                    <DrinkName>Green_Cola</DrinkName>
                    <DrinkPrice type="button">1000원</DrinkPrice>
                  </button>
                </DrinkItem>
                <DrinkItem>
                  <button type="button">
                    <img src={OrangeCola} alt="" />
                    <DrinkName>Orange_Cola</DrinkName>
                    <DrinkPrice type="button">1000원</DrinkPrice>
                  </button>
                </DrinkItem>
                <li>
                  <BalanceDisplay>
                    <span>잔액 : </span>
                    <strong>0원</strong>
                  </BalanceDisplay>
                </li>
                <li>
                  <ReturnButton type="button">거스름돈 변환</ReturnButton>
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
                  <DepositButton type="button">입금</DepositButton>
                </li>
                <li>
                  <SelectedDrinks>
                    <SelectedDrink>
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
                    </SelectedDrink>
                  </SelectedDrinks>
                </li>
                <li>
                  <AcqurieButton type="button">획득</AcqurieButton>
                </li>
              </DrinkLists>
            </DrinkItems>
          </DrinkSelection>
          <WalletDisplay>
            <WalletCotent>
              <span>소지금 : </span>
              <strong>25000원</strong>
            </WalletCotent>
          </WalletDisplay>
          <DrinkAcquired>
            <h2>획득한 음료</h2>
            <AcquiredItems>
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
              </AcquiredItem>
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

