import styled from "styled-components";
import {IHeaderProps} from "../layout/type.ts";

// 다크 / 라이트 모드 토글 버튼
const ToggleThemeButton = ({theme, toggleTheme}: IHeaderProps) => {
    return (
        <ThemeButtonBox onClick={toggleTheme}>
            <ThemeInner theme={theme}>
                {theme === 'light' ? '🌙' : '🌞'}
            </ThemeInner>
        </ThemeButtonBox>
    )
}

const ThemeButtonBox = styled.div`
    position: relative;
    background: ${({theme}) => theme.button.toggleThemeButtonColor};
    width: 50px;
    height: 25px;
    font-size: 15px;
    border-radius: 30px;
    box-sizing: border-box;
    background: ${({theme}) => theme.hoverBackground};
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .3s;

    &:hover {
        background: ${({theme}) => theme.hoverBackground}
    }
`;

const ThemeInner = styled.span<{ theme: string }>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${({theme}) => (theme === "light" ? "translateX(120%)" : "translateX(20%)")};
    transition: .3s;
    width: 20px;
    height: 20px;
    background: ${({theme}) => (theme === "light" ? "#fff" : "#000")};
    border-radius: 50%;
    font-size: 12px;
`;

export default ToggleThemeButton;