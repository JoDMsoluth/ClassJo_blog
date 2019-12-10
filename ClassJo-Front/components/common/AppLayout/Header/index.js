import React from "react";
import Link from "next/link";
import { HeaderContainer } from "./Header.style";
import ActiveLink from "./ActiveLink";

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <Link href="/">
          <a>
            <ActiveLink href="/">Intro</ActiveLink>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/profile">
          <a>
            <ActiveLink href="/profile">Profile</ActiveLink>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/project">
          <a>
            <ActiveLink href="/project">Project</ActiveLink>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/blog">
          <a>
            <ActiveLink href="/blog">Blog</ActiveLink>
          </a>
        </Link>
      </div>
      <div>
        <a href="https://github.com/JoDMsoluth" target="_blank">
          <span>GitHub</span>
        </a>
      </div>
      <div>
        <a href="https://open.kakao.com/o/sNCD8wHb" target="_blank">
          <span>KaKaoTalk</span>
        </a>
      </div>
    </HeaderContainer>
  );
}
