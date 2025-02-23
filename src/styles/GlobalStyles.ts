import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: all 0.3s
    }
    ul, li, ol {
        list-style: none;
    }

    /* 버튼 기본 스타일 */
    button {
        background: transparent;
        border: 0;
        box-sizing: border-box;
        cursor: pointer;
        transition: .3s;
    }
    
    /* swiper 공통 css */
    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 18px;
        background: #fff;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export default GlobalStyle;