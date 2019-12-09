import React from "react";
import Link from "next/link";
import { HeaderContainer } from "./Header.style";
import ActiveLink from "./ActiveLink";

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <Link href="/">
          <ActiveLink href="/">Intro</ActiveLink>
        </Link>
      </div>
      <div>
        <Link href="/profile">
          <ActiveLink href="/profile">Profile</ActiveLink>
        </Link>
      </div>
      <div>
        <Link href="/project">
          <ActiveLink href="/project">Project</ActiveLink>
        </Link>
      </div>
      <div>
        <Link href="/blog">
          <ActiveLink href="/blog">Blog</ActiveLink>
        </Link>
      </div>
      <div>
        <a href="https://github.com/JoDMsoluth" target="_blank">
          GitHub
        </a>
      </div>
      <div>
        <a href="https://open.kakao.com/o/sNCD8wHb" target="_blank">
          KaKaoTalk
        </a>
      </div>
    </HeaderContainer>
  );
}
