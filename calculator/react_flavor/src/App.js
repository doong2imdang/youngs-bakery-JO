import GlobalStyles from "./style/GlobalStyles";
import {
  Container,
  ValueContainer,
  BtnContainer,
  BtnControl,
  BtnNumber,
  BtnSign,
} from "./style/Calculator";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <ValueContainer>
          <div className="calculating-value">0</div>
          <div className="input-value">0</div>
          <div className="previousResult-value">0</div>
        </ValueContainer>
        <BtnContainer>
          <BtnControl>
            <li>
              <button type="button" className="btn-reset">
                AC
              </button>
            </li>
            <li>
              <button type="button">±</button>
            </li>
            <li>
              <button type="button">%</button>
            </li>
          </BtnControl>
          <BtnNumber>
            <li className="first-content">
              <button type="button">7</button>
              <button type="button">8</button>
              <button type="button">9</button>
            </li>
            <li className="second-content">
              <button type="button">4</button>
              <button type="button">5</button>
              <button type="button">6</button>
            </li>
            <li className="third-content">
              <button type="button">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
            </li>
            <li className="fourth-content">
              <button type="button">0</button>
              <button type="button">.</button>
            </li>
          </BtnNumber>
          <BtnSign>
            <li>
              <button type="button">÷</button>
            </li>
            <li>
              <button type="button">x</button>
            </li>
            <li>
              <button type="button">-</button>
            </li>
            <li>
              <button type="button">+</button>
            </li>
            <li>
              <button type="button">=</button>
            </li>
          </BtnSign>
        </BtnContainer>
      </Container>
    </>
  );
}
export default App;

