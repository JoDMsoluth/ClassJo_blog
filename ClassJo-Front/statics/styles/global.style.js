import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('//fonts.googleapis.com/earlyaccess/notosanskr.css');
    @import url('//cdn.jsdelivr.net/gh/velopert/font-d2coding@1.2.1/d2coding.css');
    body {
        padding : 0;
        margin : 0;
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    * {
        box-sizing : inherit;
    }

    a {
        text-decoration : inherit;
        color: inherit
    }
`;

export const PageContainer = styled.div`
  min-height: 500px;
`;
