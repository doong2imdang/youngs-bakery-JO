import React, { useState, useEffect } from "react";
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
  StartButton,
  PauseButton,
  ResetButton,
  Colon,
} from "./style/Timer";
import logo from "./images/Logo.svg";
import mainBoxTop from "./images/main-box-top.svg";
import startButtonDisabled from "./images/start-button-disabled.svg";
import resetButtonDisabled from "./images/reset-button-disabled.svg";
import startButton from "./images/start-button.svg";
import resetButton from "./images/reset-button.svg";
import pauseButton from "./images/pause-button.svg";

function App() {
  const [isPaused, setIsPaused] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [inputs, setInputs] = useState({
    hour: "",
    minute: "",
    second: "",
  });

  const { hour, minute, second } = inputs;

  useEffect(() => {
    const isValidInput = hour > 0 || minute > 0 || second > 0;

    setDisabled(!isValidInput);
  }, [hour, minute, second]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value < 0) {
      alert("올바른 숫자를 입력해주세요!");
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: "",
      }));
      return;
    }

    if (name === "hour" && value >= 100) {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: "99",
      }));
      return;
    }

    if ((name === "minute" || name === "second") && value >= 60) {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: "59",
      }));
      return;
    }

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  function startCountdown() {
    const id = setInterval(() => {
      setTotalSeconds((prevTotalSeconds) => {
        if (prevTotalSeconds <= 0) {
          clearInterval(id);
          setIntervalId(0);
          alert("시간이 종료되었습니다.");
          setIsPaused(false);
          setInputs({
            hour: "",
            minute: "",
            second: "",
          });
          return 0;
        }

        const newTotalSeconds = prevTotalSeconds - 1;
        updateDisplay(newTotalSeconds);
        return newTotalSeconds;
      });
    }, 1000);
    setIntervalId(id);
  }

  function pauseCountdown() {
    clearInterval(intervalId);
  }

  function updateDisplay(newTotalSeconds) {
    const hours = Math.floor(newTotalSeconds / 3600);
    const minutes = Math.floor((newTotalSeconds % 3600) / 60);
    const seconds = newTotalSeconds % 60;

    setInputs({
      hour: hours.toString().padStart(2, "0"),
      minute: minutes.toString().padStart(2, "0"),
      second: seconds.toString().padStart(2, "0"),
    });
  }

  function handleButtonClick() {
    setIsPaused((prevIsPaused) => !prevIsPaused);

    if (!isPaused) {
      setTotalSeconds(
        Number(hour) * 3600 + Number(minute) * 60 + Number(second)
      );
      startCountdown();
    } else {
      pauseCountdown();
    }
  }

  function handleResetButtonClick() {
    setInputs({
      hour: "",
      minute: "",
      second: "",
    });

    setDisabled(true);
    setTotalSeconds(0);
    setIsPaused(false);
  }

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
                  <input
                    name="hour"
                    value={hour}
                    type="number"
                    placeholder="00"
                    onChange={handleInputChange}
                  />
                </div>
              </FlowContainer>
              <Colon>
                <p>:</p>
              </Colon>
              <FlowContainer>
                <p>MIN</p>
                <div>
                  <input
                    name="minute"
                    value={minute}
                    type="number"
                    placeholder="00"
                    onChange={handleInputChange}
                  />
                </div>
              </FlowContainer>
              <Colon>
                <p>:</p>
              </Colon>
              <FlowContainer>
                <p>SEC</p>
                <div>
                  <input
                    name="second"
                    value={second}
                    type="number"
                    placeholder="00"
                    onChange={handleInputChange}
                  />
                </div>
              </FlowContainer>
            </TimeContainer>
            <ButtonContainer>
              {disabled ? (
                <>
                  <StartButton disabled={disabled} type="button">
                    <img src={startButtonDisabled} alt="" />
                    <p>START</p>
                  </StartButton>
                  <ResetButton disabled={disabled} type="button">
                    <img src={resetButtonDisabled} alt="" />
                    <p>RESET</p>
                  </ResetButton>
                </>
              ) : (
                <>
                  {isPaused ? (
                    <PauseButton
                      disabled={disabled}
                      type="button"
                      onClick={handleButtonClick}
                    >
                      <img src={pauseButton} alt="" />
                      <p>PAUSE</p>
                    </PauseButton>
                  ) : (
                    <StartButton
                      disabled={disabled}
                      type="button"
                      onClick={handleButtonClick}
                    >
                      <img src={startButton} alt="" />
                      <p>START</p>
                    </StartButton>
                  )}
                  <ResetButton
                    onClick={handleResetButtonClick}
                    disabled={disabled}
                    type="button"
                  >
                    <img src={resetButton} alt="" />
                    <p>RESET</p>
                  </ResetButton>
                </>
              )}
            </ButtonContainer>
          </MainBoxCenter>
        </MainBox>
      </Container>
    </>
  );
}
export default App;

