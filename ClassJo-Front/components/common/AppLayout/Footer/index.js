import React from "react";
import { FooterContainer, IconContainer } from "./Footer.style";
export default function Header() {
  return (
    <>
      <FooterContainer>
        <div>Footer</div>
        <IconContainer>
          <i className="fas fa-envelope-square"></i>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-github-square"></i>
        </IconContainer>
      </FooterContainer>
    </>
  );
}
