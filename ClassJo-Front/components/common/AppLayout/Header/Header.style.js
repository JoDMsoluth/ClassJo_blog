import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  & div {
    cursor: pointer;
    border: 1px solid black;
    color: black;
    &:hover {
      transform: scale(1.1);
    }
    & a {
      text-decoration: none;
    }
  }
`;
