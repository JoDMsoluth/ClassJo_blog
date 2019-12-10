import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  background: gray;
  height: 100px;
  & > div {
    cursor: pointer;
    display: flex;
    border: 1px solid black;
    color: black;
    height: inherit;
    width: 100px;
    &:hover {
      transform: scale(1.1);
    }
    & a {
      text-decoration: none;
      height: inherit;
      width: inherit;
      display: flex;
      align-items: flex-end;
    }
    & a span {
      flex: 1;
      padding-bottom: 10px;
    }
  }
`;
