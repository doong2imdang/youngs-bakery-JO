import styled from "styled-components";

const Cotainer = styled.div`
  margin: 0 10px;
`;

const ImageLogo = styled.img`
  max-width: 434px;
  display: block;
  margin: 0 auto 45.5px auto;

  @media screen and (max-width: 792px) {
    max-width: 188px;
    margin: 0 auto;
    position: relative;
  }
`;

const VendingMachine = styled.main`
  display: grid;
  grid-template-areas:
    "selection wallet"
    "selection acquired";
  gap: 28px;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 792px) {
    display: grid;
    place-items: center;
    grid-template-areas:
      "selection "
      "wallet "
      "acquired";
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const DrinkSelection = styled.div`
  grid-area: selection;
  justify-self: end;
  align-self: center;
  background: var(--color-brown);
  max-width: 360px;
  border: 10px solid var(--color-darkgrey);
  border-radius: 10px;
  padding: 8px;

  @media screen and (max-width: 792px) {
    justify-self: center;
    margin-top: -10px;
    border: 0;
    border-radius: 0px;
    max-width: 336px;
    min-width: 334px;
  }
`;

const DrinkItems = styled.div`
  justify-content: center;
  padding: 12px 9px;
  border-radius: 10px;
  background: var(--color-darkgrey);

  @media screen and (max-width: 792px) {
    padding: 12px;
    margin-top: 6px;
  }
`;

const DrinkLists = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 94px);
  justify-content: center;
  gap: 12px;
  position: relative;

  li:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  li:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  li:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  li:nth-child(4) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  li:nth-child(5) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  li:nth-child(6) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }

  li:nth-child(7) {
    grid-column: span 2;
    grid-row: 3 / 4;
  }

  li:nth-child(8) {
    grid-column: span 1;
    grid-row: 3 / 4;
  }

  li:nth-child(9) {
    grid-column: span 2;
    grid-row: 4 / 5;
  }

  li:nth-child(10) {
    grid-column: span 1;
    grid-row: 4 / 5;
  }

  li:nth-child(11) {
    grid-column: span 2;
    grid-row: 5 / 6;
  }

  li:nth-child(12) {
    grid-column: span 1;
    grid-row: 5 / 6;
  }
`;

const DrinkItem = styled.li`
  text-align: center;
  background: var(--color-lightgrey);
  padding: 9px 0;
  border-radius: 10px;

  &:active {
    box-shadow: 0 0 0 3px var(--color-orange);
  }
`;

const DrinkName = styled.p`
  padding: 0 0 7px 0;
  font-size: 11px;
`;

const DrinkPrice = styled.button`
  background: var(--color-orange);
  width: 70px;
  border-radius: 50px;
  color: var(--color-lightgrey);
  padding: 3px 0;
  font-size: 13px;
`;

const BalanceDisplay = styled.div`
  background: var(--color-lightorange);
  margin-top: 8px;
  padding: 8px 10px;
  border-radius: 5px;
  color: var(--color-darkgrey);
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

const ReturnButton = styled.button`
  background: var(--color-lightgrey);
  margin-top: 8px;
  font-size: 13px;
  border-radius: 5px;
  font-weight: bold;
  color: var(--color-darkgrey);
  padding: 7px 6px;
`;

const AmountInput = styled.input`
  background: var(--color-lightgrey);
  border-radius: 5px;
  border: 1px solid var(--color-grey);
  width: 180px;
  padding: 9px 10px;
  color: var(--color-darkgrey);
  font-size: 13px;
  text-align: right;
  font-weight: bold;

  &::placeholder {
    color: var(--color-grey);
    font-size: 13px;
    font-weight: bold;
  }
`;

const DepositButton = styled.button`
  background: var(--color-lightgrey);
  width: 94px;
  padding: 8px 0;
  border-radius: 5px;
  font-size: 14px;
  color: var(--color-darkgrey);
  font-weight: bold;
`;

const SelectedDrinks = styled.div`
  background: var(--color-lightorange);
  padding: 12px 12px 0 12px;
  height: 91px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid var(--color-grey);
  cursor: pointer;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-white);
    border-radius: 50px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
`;

const SelectedDrink = styled.div`
  width: 150px;
  padding: 6px 10px;
  background: var(--color-lightgrey);
  margin-bottom: 6px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  align-items: center;

  img {
    width: 18px;
  }

  span {
    font-size: 11px;
    font-weight: bold;
  }
`;

const SelectedStock = styled.div`
  border: 1px solid var(--color-grey);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`;

const AcqurieButton = styled.button`
  background: var(--color-orange);
  color: var(--color-lightgrey);
  width: 94px;
  height: 104px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
`;

const WalletDisplay = styled.div`
  grid-area: wallet;
  background: var(--color-darkgrey);
  width: 360px;
  border-radius: 10px;
`;

const WalletCotent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 10px;
  margin: 9px 27px;
  background: var(--color-lightorange);
  border-radius: 5px;
  font-weight: bold;
`;

const DrinkAcquired = styled.div`
  grid-area: acquired;
  background: var(--color-darkgrey);
  width: 307px;
  border-radius: 10px;
  padding: 24px 27px;

  h2 {
    font-size: 16px;
    text-align: center;
    color: var(--color-lightgrey);
    padding-bottom: 8px;
  }
`;

const AcquiredItems = styled.div`
  height: 344px;
  background: var(--color-lightorange);
  margin: 8px 0 9px 0;
  padding: 12px;
  border-radius: 5px;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-white);
    border-radius: 50px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
`;

const AcquiredItem = styled.div`
  padding: 6px 10px;
  background: var(--color-lightgrey);
  margin-bottom: 6px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 0.5fr 3.5fr 0.5fr;
  align-items: center;
  font-size: 11px;
  font-weight: bold;

  img {
    width: 18px;
  }
`;

const AcquiredStock = styled.div`
  border: 1px solid var(--color-grey);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`;

const TotalAmount = styled.div`
  color: var(--color-lightgrey);
  font-size: 14px;
  text-align: end;
`;

export {
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
};
