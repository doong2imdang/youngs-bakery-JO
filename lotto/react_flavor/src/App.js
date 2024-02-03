import React, { useState, useEffect } from "react";
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
  const [showNumbers, setShowNumbers] = useState(false);
  const [lottoNumbers, setLottoNumbers] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState([]);
  const [bonusNumber, setBonusNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [matchingCount, setMatchingCount] = useState([]);

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

  // 랜덤한 로또 번호 생성
  const generateRandomNumbers = (count) => {
    const lottoTickets = Array.from({ length: count / 6 }, () =>
      createLottoNumbers()
    ).flat();
    return lottoTickets;
  };

  const createLottoNumbers = () => {
    var numbers = Array.from({ length: 45 }, (_, i) => i + 1);
    var lottoNumbers = [];

    for (var i = 0; i < 6; i++) {
      var index = Math.floor(Math.random() * numbers.length);
      var number = numbers.splice(index, 1)[0];
      lottoNumbers.push(number);
    }

    return lottoNumbers.sort(function (a, b) {
      return a - b;
    });
  };

  // 로또만큼 생성한 로또 번호 배열 저장
  useEffect(() => {
    if (totalLottoTickets > 0) {
      setLottoNumbers(generateRandomNumbers(totalLottoTickets * 6));
    }
  }, [totalLottoTickets]);

  // 당첨 번호 자동입력 버튼 클릭
  const handleAutoDraw = () => {
    const randomNumbers = generateRandomNumbers(6);
    const bonusNumbers = generateRandomNumbers(6);
    setWinningNumbers(randomNumbers.slice(0, 6));

    const newBonusNumber = bonusNumbers.find(
      (number) => !randomNumbers.includes(number)
    );
    setBonusNumber(newBonusNumber);
  };

  useEffect(() => {
    console.log(winningNumbers, bonusNumber);
  }, [winningNumbers, bonusNumber]);

  // 결과 확인하기 버튼
  const handleCheckResult = () => {
    setShowModal(true);

    // 당첨통계
    console.log(lottoNumbers, winningNumbers, bonusNumber);
    const chunk = 6;
    const lottoNumbersArray = splitLotto(lottoNumbers, chunk);

    const matchingCountsArray = [0, 0, 0, 0, 0, 0];

    let matchingBonus;
    for (let i = 0; i < lottoNumbersArray.length; i++) {
      let count = 0;
      matchingBonus = 0;
      for (let j = 0; j < lottoNumbersArray[i].length; j++) {
        console.log(lottoNumbersArray[i], winningNumbers[j]);
        if (winningNumbers.includes(lottoNumbersArray[i][j])) {
          count++;
        }

        if (lottoNumbers.includes(bonusNumber)) {
          matchingBonus = 1;
        }
      }
      console.log("count", count, "matchingBonus", matchingBonus);

      if (count <= 2) {
        matchingCountsArray[0] += 1;
      } else if (count === 3) {
        matchingCountsArray[1] += 1;
      } else if (count === 4) {
        matchingCountsArray[2] += 1;
      } else if (count === 5 && matchingBonus === 0) {
        matchingCountsArray[3] += 1;
      } else if (count === 5 && matchingBonus === 1) {
        matchingCountsArray[4] += 1;
      } else if (count === 6) {
        matchingCountsArray[5] += 1;
      }

      console.log(matchingCountsArray);

      setMatchingCount([...matchingCountsArray]);
      console.log(matchingCount);
    }

    // 수익률 구하기
  };

  const splitLotto = (arr, chunk) => {
    const result = [];

    for (let i = 0; i < arr.length; i += chunk) {
      let tempArray;
      tempArray = arr.slice(i, i + chunk);
      result.push(tempArray);
    }
    return result;
  };

  return (
    <>
      <GlobalStyles />
      {showModal && (
        <>
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
                      <span className="result-underTwo">
                        {matchingCount[0]}
                      </span>
                      개
                    </td>
                  </tr>
                  <tr>
                    <td>3개</td>
                    <td>5,000</td>
                    <td>
                      <span className="result-three">{matchingCount[1]}</span>개
                    </td>
                  </tr>
                  <tr>
                    <td>4개</td>
                    <td>50,000</td>
                    <td>
                      <span className="result-four">{matchingCount[2]}</span>개
                    </td>
                  </tr>
                  <tr>
                    <td>5개</td>
                    <td>1,500,000</td>
                    <td>
                      <span className="result-five">{matchingCount[3]}</span>개
                    </td>
                  </tr>
                  <tr>
                    <td>5개 + 보너스볼</td>
                    <td>30,000,000</td>
                    <td>
                      <span className="result-five-bonus">
                        {matchingCount[4]}
                      </span>
                      개
                    </td>
                  </tr>
                  <tr>
                    <td>6개</td>
                    <td>2,000,000,000</td>
                    <td>
                      <span className="result-six">{matchingCount[5]}</span>개
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3">
                      당신의 총 수익률은{" "}
                      <span className="result-benefit">0</span>
                      %입니다.
                    </td>
                  </tr>
                </tfoot>
              </table>
            </ModalTable>
            <button type="button" onClick={() => setShowModal(false)}>
              다시 시작하기
            </button>
          </Modal>
          <ModalBg onClick={() => setShowModal(false)}></ModalBg>
        </>
      )}

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
                  총 <strong>{totalLottoTickets}</strong>
                  개를 구매하였습니다
                </p>
              </TicketText>
              <TicketNumberContainer>
                <ul>
                  {imageActive &&
                    lottoNumbers.map((number, index) => (
                      <li key={index}>
                        {showNumbers ? <span>{number}</span> : <span>복</span>}
                      </li>
                    ))}
                </ul>
              </TicketNumberContainer>
              <NumberCheck>
                <p>번호확인</p>
                <input
                  type="checkbox"
                  id="toggle-slider"
                  checked={showNumbers}
                  onChange={() =>
                    setShowNumbers((prevShowNumbers) => !prevShowNumbers)
                  }
                />
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
          <ul>
            <li>
              <div>
                <p>{winningNumbers[0]}</p>
              </div>
            </li>
            <li>
              <div>
                <p>{winningNumbers[1]}</p>
              </div>
            </li>
            <li>
              <div>
                <p>{winningNumbers[2]}</p>
              </div>
            </li>
            <li>
              <div>
                <p>{winningNumbers[3]}</p>
              </div>
            </li>
            <li>
              <div>
                <p>{winningNumbers[4]}</p>
              </div>
            </li>
            <li>
              <div>
                <p>{winningNumbers[5]}</p>
              </div>
            </li>
          </ul>
          <BonusContainer>
            <h2>뽀나스번호</h2>
            <BonusAndButton>
              <BonusNumber>
                <p>{bonusNumber}</p>
              </BonusNumber>
              <BonusButtons>
                <button type="button" onClick={handleAutoDraw}>
                  당첨 번호 자동입력
                </button>
                <button type="button" onClick={handleCheckResult}>
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

