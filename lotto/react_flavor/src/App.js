import React, { useState } from "react";
import GlobalStyles from "./style/GlobalStyles";
import {
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
} from "./style/Lotto";

function App() {
  const [inputPrice, setInputPrice] = useState("");
  const [totalLottoTickets, setTotalLottoTickets] = useState(0);
  const [imageActive, setImageActive] = useState(false);

  // 로또 티켓 발급
  const setPrice = (amount) => {
    setInputPrice(amount);
  };

  const onChange = (e) => {
    setInputPrice(e.target.value);
  };

  // 입력 버튼
  const purchasePrice = () => {
    let balance = 0;
    let lottoTickets = 0;

    if (inputPrice === "0" || inputPrice === "") {
      alert("올바른 값을 입력하세요");
      setInputPrice("");
    } else {
      balance = inputPrice % 1000;
      lottoTickets = Math.floor(inputPrice / 1000);
      setTotalLottoTickets(
        (prevTotalLottoTickets) => prevTotalLottoTickets + lottoTickets
      );
      alert(`총 ${lottoTickets}장 구매되었으며 ${balance}원 입니다.`);
      setInputPrice("");
    }

    if (lottoTickets > 0) {
      setImageActive(true);
    } else {
      setImageActive(false);
    }

    console.log(totalLottoTickets, lottoTickets);
  };

  // 구매한 로또 티켓 이미지

  return (
    <>
      <GlobalStyles />
      <Modal>
        <h2>
          <strong>★</strong> 당첨 통계 <strong>★</strong>
        </h2>
        <ModalTable>
          <table>
            <thead>
              <tr>
                <td>일치 갯수</td>
                <td>당첨금</td>
                <td>당첨 갯수</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0 ~ 2개</td>
                <td>0</td>
                <td>
                  <span className="result-underTwo">0</span>개
                </td>
              </tr>
              <tr>
                <td>3개</td>
                <td>5,000</td>
                <td>
                  <span className="result-three">0</span>개
                </td>
              </tr>
              <tr>
                <td>4개</td>
                <td>50,000</td>
                <td>
                  <span className="result-four">0</span>개
                </td>
              </tr>
              <tr>
                <td>5개</td>
                <td>1,500,000</td>
                <td>
                  <span className="result-five">0</span>개
                </td>
              </tr>
              <tr>
                <td>5개 + 보너스볼</td>
                <td>30,000,000</td>
                <td>
                  <span className="result-five-bonus">0</span>개
                </td>
              </tr>
              <tr>
                <td>6개</td>
                <td>2,000,000,000</td>
                <td>
                  <span className="result-six">0</span>개
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">
                  당신의 총 수익률은 <span className="result-benefit">0</span>
                  %입니다.
                </td>
              </tr>
            </tfoot>
          </table>
        </ModalTable>
        <button className="restart-button" type="button">
          다시 시작하기
        </button>
      </Modal>
      <ModalBg></ModalBg>

      <Container>
        <div>
          <div>
            <h1>★ ★행운의로또★ ★</h1>
            <LogoText>
              <span>복</span>
              <span>권</span>
              <span>나눠드립니다</span>
            </LogoText>
          </div>
          <LottoPurchaseContainer>
            <LottoPrice>
              <p>구!입@할$금^액을 입#력$하%기</p>
              <ul>
                <li>
                  <button type="button" onClick={() => setPrice(1000)}>
                    1,000원
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => setPrice(5000)}>
                    5,000원
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => setPrice(10000)}>
                    10,000원
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => setPrice(50000)}>
                    50,000원
                  </button>
                </li>
              </ul>
              <InputContainer>
                <input
                  type="number"
                  id="input-price"
                  placeholder="구입 금액 입력"
                  value={inputPrice}
                  onChange={onChange}
                />
                <button type="button" onClick={purchasePrice}>
                  입력
                </button>
              </InputContainer>
            </LottoPrice>
            <LottoTicket>
              <TicketText>
                <p>
                  총{" "}
                  <strong className="ticket-number">{totalLottoTickets}</strong>
                  개를 구매하였습니다
                </p>
              </TicketText>
              <TicketNumberContainer>
                <ul>
                  {imageActive ? (
                    <>
                      <li className="ticket-front">
                        <span>복</span>
                      </li>
                      <li className="ticket-back flipped">
                        <span>0</span>
                      </li>
                      <li className="ticket-front">
                        <span>복</span>
                      </li>
                      <li className="ticket-back flipped">
                        <span>0</span>
                      </li>
                      <li className="ticket-front">
                        <span>복</span>
                      </li>
                      <li className="ticket-back flipped">
                        <span>0</span>
                      </li>
                      <li className="ticket-front">
                        <span>복</span>
                      </li>
                      <li className="ticket-back flipped">
                        <span>0</span>
                      </li>
                    </>
                  ) : (
                    ""
                  )}
                </ul>
              </TicketNumberContainer>
              <NumberCheck>
                <p>번호확인</p>
                <input type="checkbox" id="toggle-slider" />
                <label htmlFor="toggle-slider">번호확인</label>
              </NumberCheck>
            </LottoTicket>
          </LottoPurchaseContainer>
        </div>
        <LottoWinning>
          <StartText>
            <p>
              충격! <br />
              당첨
            </p>
          </StartText>
          <StartSix></StartSix>
          <StarSixMedia></StarSixMedia>
          <h2>당첨번호</h2>
          <ul className="winning-numbers">
            <li className="winning-number">
              <div>
                <p></p>
              </div>
            </li>
            <li className="winning-number">
              <div>
                <p></p>
              </div>
            </li>
            <li className="winning-number">
              <div>
                <p></p>
              </div>
            </li>
            <li className="winning-number">
              <div>
                <p></p>
              </div>
            </li>
            <li className="winning-number">
              <div>
                <p></p>
              </div>
            </li>
            <li className="winning-number">
              <div>
                <p></p>
              </div>
            </li>
          </ul>
          <BonusContainer>
            <h2>뽀나스번호</h2>
            <BonusAndButton>
              <BonusNumber>
                <p></p>
              </BonusNumber>
              <BonusButtons>
                <button className="number-draw-button" type="button">
                  당첨 번호 자동입력
                </button>
                <button type="button" className="check-result-button">
                  결과 확인하기
                </button>
              </BonusButtons>
            </BonusAndButton>
          </BonusContainer>
        </LottoWinning>
      </Container>
    </>
  );
}
export default App;

