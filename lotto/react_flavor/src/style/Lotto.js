import styled, { css } from "styled-components";

const Modal = styled.div`
  position: fixed;
  background: var(--color-red);
  border-radius: 10px;
  text-align: center;
  top: 50%;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);
  padding: 100px 54px 44px 54px;

  h2 {
    color: var(--color-white);
    font-size: 50px;
    padding-bottom: 74px;

    strong {
      color: var(--color-yellow);
    }
  }

  button {
    background: var(--color-blue);
    color: var(--color-white);
    font-size: 30px;
    font-weight: bold;
    border-radius: 10px;
    width: 250px;
    height: 70px;
    margin-top: 35px;
  }

  @media screen and (max-width: 1020px) {
    padding: 50px 50px 22px 50px;

    h2 {
      font-size: 35px;
      padding-bottom: 50px;
    }

    button {
      font-size: 16px;
      width: 140px;
      height: 55px;
    }
  }
`;

const ModalTable = styled.div`
  background: var(--color-white);
  padding: 20px;

  table {
    margin: 0 auto;
    width: 365px;

    thead,
    tfoot {
      font-weight: bold;
    }

    tr {
      border-bottom: 1px solid #bdbdbd;

      td {
        padding: 15px 10px;
      }
    }
  }

  @media screen and (max-width: 1020px) {
    table {
      width: 280px;
    }

    table tr td {
      padding: 10px 5px;
    }
  }
`;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #000000;
  opacity: 0.85;
  z-index: 30;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  place-items: center;
  padding: 67px 100px;

  h1 {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 23px;
  }

  @media screen and (min-width: 1020px) and (max-width: 1770px) {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 1020px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 67px 10px;
  }
`;

const LogoText = styled.p`
  text-align: center;

  span {
    &:nth-child(1) {
      font-size: 110px;
      color: var(--color-white);
      background: var(--color-red);
      border-radius: 50%;
      padding: 9px 20px;
      vertical-align: 18px;

      @media screen and (max-width: 1020px) {
        font-size: 55px;
        padding: 4px 10px;
        vertical-align: 10px;
      }
    }

    &:nth-child(2) {
      font-size: 40px;
      font-weight: bold;
      color: var(--color-white);
      background: var(--color-red);
      border-radius: 50%;
      padding: 9px 13px;
      @media screen and (max-width: 1020px) {
        font-size: 25px;
        padding: 4px 6px;
        vertical-align: 2px;
      }
    }

    &:nth-child(3) {
      font-size: 110px;
      font-weight: bold;

      @media screen and (max-width: 1020px) {
        font-size: 55px;
      }
    }
  }
`;

const LottoPurchaseContainer = styled.div`
  padding-top: 45px;
  padding-left: 70px;

  @media screen and (max-width: 1020px) {
    padding: 25px 10px;
  }
`;

const LottoPrice = styled.div`
  p {
    font-size: 40px;
    font-weight: bold;

    @media screen and (max-width: 1020px) {
      font-size: 25px;
    }
  }

  ul {
    display: flex;
    padding: 13px 0;
    gap: 18px;

    @media screen and (max-width: 1020px) {
      gap: 10px;
    }

    li {
      button {
        font-size: 20px;
        font-weight: bold;
        color: var(--color-white);
        background: var(--color-blue);
        width: 120px;
        height: 40px;
        border-radius: 30px;

        @media screen and (max-width: 1020px) {
          font-size: 16px;
          width: 90px;
          height: 30px;
        }
      }
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 44px;

  @media screen and (max-width: 1020px) {
    gap: 20px;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    background: var(--color-white);
    outline: none;
    padding: 11px 27px;
    width: 600px;
    font-size: 30px;
    outline: none;
    border: none;

    @media screen and (max-width: 1020px) {
      width: 270px;
      font-size: 25px;
    }

    &::placeholder {
      color: #878787;
      font-weight: bold;
    }

    @media screen and (max-width: 1020px) {
      gap: 20px;
    }
  }

  button {
    width: 100px;
    height: 70px;
    border-radius: 10px;
    color: var(--color-white);
    background: var(--color-blue);
    font-size: 30px;
    font-weight: bold;
  }
`;

const LottoTicket = styled.div`
  display: grid;
  grid-template-areas:
    "text check"
    "image check";
  margin-top: 46px;

  @media screen and (max-width: 1020px) {
    grid-template-areas:
      "text check"
      "image image";
  }
`;

const TicketText = styled.div`
  grid-area: text;
  margin-bottom: 29px;

  p {
    font-size: 30px;
    font-weight: bold;

    @media screen and (max-width: 1020px) {
      font-size: 25px;
    }
  }
`;

const TicketNumberContainer = styled.div`
  grid-area: image;
  margin-top: 20px;
  height: 255px;
  width: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
  background: var(--color-white);
  padding: 10px 30px 10px 20px;

  @media screen and (max-width: 1020px) {
    width: 410px;
    justify-self: center;
    height: 215px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;
    gap: 10px;
    margin-bottom: 15px;
    position: relative;

    li {
      color: var(--color-white);
      background: #ff0000;
      width: 60px;
      padding: 10px 5px;
      font-size: 50px;
      font-weight: bold;
      height: 60px;
      text-align: center;
      border-radius: 50%;
      line-height: 55px;

      ${(props) =>
        props.flipped &&
        css`
          transform: rotateY(180deg);
          opacity: 0;
          position: absolute;
        `}

      @media screen and (max-width: 1020px) {
        font-size: 40px;
        padding: 0;
      }
    }
  }
`;

const NumberCheck = styled.div`
  grid-area: check;
  justify-self: end;

  p {
    font-size: 30px;
    color: var(--color-blue);
    font-weight: bold;
    margin-bottom: 16px;

    @media screen and (max-width: 1020px) {
      font-size: 20px;
    }
  }

  input {
    display: none;

    &:checked ~ label {
      background-color: var(--color-blue);
    }

    &:checked ~ label::after {
      left: calc(100% - 15px);
      background-color: var(--color-white);
    }
  }

  label {
    display: flex;
    text-indent: -999em;
    cursor: pointer;
    width: 60px;
    height: 25px;
    background: #d9d9d9;
    border-radius: 50px;
    position: relative;
    left: 28px;
    transition: 0.5s ease-out;

    &::after {
      content: "";
      width: 40px;
      height: 40px;
      background-color: var(--color-white);
      position: absolute;
      border-radius: 50%;
      top: 0;
      left: 0;
      transform: translate(-30%, -20%);
      transition: 0.5s ease-out;
    }

    @media screen and (max-width: 1020px) {
      left: 9px;
    }
  }

  @media screen and (max-width: 1020px) {
    justify-self: center;
  }
`;

const LottoWinning = styled.div`
  background: var(--color-red);
  color: var(--color-white);
  padding: 160px 45px 23px 45px;
  text-align: center;
  border-radius: 10px;
  position: relative;

  h2 {
    font-size: 55px;
    font-weight: bold;
    text-align: center;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin: 35px 0 24px 0;

    @media screen and (max-width: 1020px) {
      place-items: center;
      gap: 20px;
      margin: 35px 0;
    }

    li div {
      width: 120px;
      height: 130px;
      background: var(--color-white);
      border-radius: 10px;

      @media screen and (max-width: 1020px) {
        width: 90px;
        height: 100px;
      }

      p {
        font-size: 70px;
        color: var(--color-black);
        font-weight: bold;
        text-align: center;
        line-height: 120px;

        @media screen and (max-width: 1020px) {
          font-size: 45px;
          line-height: 90px;
        }
      }
    }
  }

  @media screen and (min-width: 1020px) and (max-width: 1770px) {
    margin: 100px auto 0 auto;
    padding: 160px 75px 23px 75px;
  }

  @media screen and (max-width: 1020px) {
    margin: 60px auto 0 auto;
    padding: 100px 45px 23px 45px;
    h2 {
      font-size: 35px;
    }
  }
`;

const BonusContainer = styled.div`
  h2 {
    font-size: 55px;
    margin-bottom: 25px;

    @media screen and (max-width: 1020px) {
      font-size: 35px;
    }
  }
`;

const BonusAndButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BonusNumber = styled.div`
  width: 140px;
  height: 150px;
  background: var(--color-white);
  border-radius: 50%;

  @media screen and (max-width: 1020px) {
    width: 100px;
    height: 110px;
  }

  p {
    color: var(--color-black);
    font-weight: bold;
    font-size: 70px;
    line-height: 135px;

    @media screen and (max-width: 1020px) {
      font-size: 60px;
      line-height: 100px;
    }
  }
`;

const BonusButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  button {
    width: 245px;
    height: 70px;
    font-size: 25px;
    background: #004bff;
    color: #ffffff;
    border-radius: 10px;

    @media screen and (max-width: 1020px) {
      width: 150px;
      height: 55px;
      font-size: 16px;
    }
  }
`;

const StartSix = styled.div`
  width: 0;
  height: 0;
  border-left: 170px solid transparent;
  border-right: 170px solid transparent;
  border-bottom: 220px solid #004bff;
  position: absolute;
  top: -60px;
  left: -120px;
  transform: rotate(-10deg);

  &:after {
    width: 0;
    height: 0;
    border-left: 170px solid transparent;
    border-right: 170px solid transparent;
    border-top: 220px solid #004bff;
    position: absolute;
    content: "";
    top: 65px;
    left: -170px;
  }

  @media screen and (max-width: 1020px) {
    display: none;
  }
`;

const StartText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  font-size: 65px;
  font-weight: bold;
  transform: translate(-10%, 10%);

  @media screen and (max-width: 1020px) {
    font-size: 45px;
    transform: translate(25%, -10%);
  }
`;

const StarSixMedia = styled.div`
  @media screen and (max-width: 1020px) {
    width: 0;
    height: 0;
    border-left: 130px solid transparent;
    border-right: 130px solid transparent;
    border-bottom: 150px solid #004bff;
    position: absolute;
    top: -70px;
    left: -55px;
    transform: rotate(-10deg);

    &:after {
      width: 0;
      height: 0;
      border-left: 130px solid transparent;
      border-right: 130px solid transparent;
      border-top: 150px solid #004bff;
      position: absolute;
      content: "";
      top: 55px;
      left: -130px;
    }
  }
`;

export {
  Modal,
  ModalTable,
  ModalBg,
  Container,
  LogoText,
  LottoPurchaseContainer,
  LottoPrice,
  InputContainer,
  LottoTicket,
  TicketText,
  TicketNumberContainer,
  NumberCheck,
  LottoWinning,
  BonusAndButton,
  BonusContainer,
  BonusNumber,
  BonusButtons,
  StartSix,
  StartText,
  StarSixMedia,
};
