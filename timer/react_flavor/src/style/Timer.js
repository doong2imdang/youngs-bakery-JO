import styled from "styled-components";

const Container = styled.div`
  padding: 64px 30px;
`;

const LogoImage = styled.h1`
  text-align: center;
`;

const MainBox = styled.div`
  position: relative;
`;

const MainBoxTop = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 50%);
`;

const MainBoxSide = styled.div`
  position: absolute;
  height: 370px;
  width: 168.01px;
  background: #92cd5f;
  top: 50%;
  left: 50%;
  transform: translate(-241.5%, 52.5%) skewY(38.5deg);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: var(--color-f-white);
    font-weight: bold;
    font-size: 48px;
  }
`;

const SideBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-300.5%, 482%);
  z-index: 10;
  transition: transform 0.5s ease-in-out;
`;

const MainBoxCenter = styled.div`
  position: absolute;
  width: 649px;
  height: 370px;
  background: var(--color-b-deepgreen);
  top: 15%;
  left: 50%;
  transform: translate(-37%, 70.5%);
`;

const TimeContainer = styled.div`
  padding: 27px 81px 43px 81px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const FlowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: var(--color-f-yellow);
    font-size: 21px;
    font-weight: bold;
  }

  input {
    width: 130px;
    height: 130px;
    background: #7abc49;
    color: var(--color-f-white);
    font-size: 90px;
    text-align: center;
    margin-top: 9px;
    outline: none;
    border: 10px solid var(--color-f-white);
    border-radius: 10px;
  }

  input::placeholder {
    color: var(--color-f-white);
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ButtonContainer = styled.div`
  padding: 0 126px 53px 126px;
  display: flex;
  justify-content: space-around;
`;

const StartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 171px;
  height: 78px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) =>
    props.disabled ? "var(--color-f-green)" : "var(--color-f-white)"};
  background: ${(props) =>
    props.disabled ? "var(--color-b-green)" : "var(--color-b-blue)"};
  cursor: ${(props) => (props.disabled ? "unset" : "pointer")};
`;

const PauseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 171px;
  height: 78px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: bold;
  color: var(--color-f-white);
  background: var(--color-b-yellow);
`;

const ResetButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 171px;
  height: 78px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) =>
    props.disabled ? "var(--color-f-green)" : "var(--color-f-white)"};
  background: ${(props) =>
    props.disabled ? "var(--color-b-green)" : "var(--color-b-red)"};
  cursor: ${(props) => (props.disabled ? "unset" : "pointer")};
`;

const Colon = styled.div`
  color: var(--color-f-yellow);
  font-size: 90px;
  display: flex;
  align-items: center;
`;

export {
  Container,
  LogoImage,
  MainBox,
  MainBoxTop,
  MainBoxSide,
  SideBox,
  MainBoxCenter,
  TimeContainer,
  FlowContainer,
  ButtonContainer,
  StartButton,
  ResetButton,
  PauseButton,
  Colon,
};
