import styled from "styled-components";

const Container = styled.div`
  background: var(--color-black);
  max-width: 400px;
  margin: 100px auto;
  border-radius: 40px;
  border: 6px solid #a3a3a3;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ValueContainer = styled.div`
  padding: 40px 50px 0 50px;

  .calculating-value,
  .input-value {
    text-align: right;
  }

  .calculating-value,
  .previousResult-value {
    color: var(--color-lightgrey);
    font-size: 23px;
  }

  .input-value {
    padding: 7px 0 20px 0;
    font-size: 40px;
    color: var(--color-white);
  }
`;

const BtnContainer = styled.div`
  button {
    width: 78px;
    height: 78px;
    border-radius: 50%;
  }

  padding: 23px;
  display: grid;
  grid-template-areas:
    "a c"
    "b c";
`;

const BtnControl = styled.ul`
  grid-area: a;
  display: flex;
  flex-direction: row;
  gap: 13px;
  color: var(--color-black);

  li button {
    background: var(--color-lightgrey);
    font-size: 22px;
  }
`;

const BtnNumber = styled.ul`
  grid-area: b;

  li {
    display: flex;
    gap: 15px;

    button {
      background: var(--color-darkgrey);
      color: var(--color-white);
      font-size: 30px;
      margin-bottom: 15px;
    }
  }

  .first-content {
    margin-top: 20px;
  }

  .fourth-content button:first-child {
    width: 170px;
    border-radius: 50px;
  }
`;

const BtnSign = styled.ul`
  grid-area: c;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 10px;

  li button {
    background: var(--color-orange);
    color: var(--color-white);
    font-size: 30px;
  }
`;

export {
  Container,
  ValueContainer,
  BtnContainer,
  BtnControl,
  BtnNumber,
  BtnSign,
};
