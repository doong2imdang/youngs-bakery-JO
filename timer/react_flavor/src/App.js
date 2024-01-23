import React from "react";
import GlobalStyles from "./style/GlobalStyles";
import {
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
  ButtonStyle,
  Colon,
} from "./style/Timer";
import logo from "./images/Logo.svg";
import mainBoxTop from "./images/main-box-top.svg";
import startButtonDisabled from "./images/start-button-disabled.svg";
import resetButtonDisabled from "./images/reset-button-disabled.svg";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <LogoImage>
          <img src={logo} alt="" />
        </LogoImage>
        <MainBox>
          <MainBoxTop>
            <img src={mainBoxTop} alt="" />
          </MainBoxTop>
          <MainBoxSide>
            <p>TIMER</p>
          </MainBoxSide>
          <SideBox>
            <img src="./images/side-box.svg" alt="" />
          </SideBox>
          <MainBoxCenter>
            <TimeContainer>
              <FlowContainer>
                <p>HRS</p>
                <div>
                  <input id="hour" type="number" placeholder="00" />
                </div>
              </FlowContainer>
              <Colon>
                <p>:</p>
              </Colon>
              <FlowContainer>
                <p>MIN</p>
                <div>
                  <input id="minute" type="number" placeholder="00" />
                </div>
              </FlowContainer>
              <Colon>
                <p>:</p>
              </Colon>
              <FlowContainer>
                <p>SEC</p>
                <div>
                  <input id="second" type="number" placeholder="00" />
                </div>
              </FlowContainer>
            </TimeContainer>
            <ButtonContainer>
              <ButtonStyle disabled type="button">
                <img src={startButtonDisabled} alt="" />
                <p>START</p>
              </ButtonStyle>
              <ButtonStyle disabled type="button">
                <img src={resetButtonDisabled} alt="" />
                <p>RESET</p>
              </ButtonStyle>
            </ButtonContainer>
          </MainBoxCenter>
        </MainBox>
      </Container>
    </>
  );
}
export default App;

