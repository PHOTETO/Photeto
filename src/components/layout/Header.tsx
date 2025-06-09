import styled from 'styled-components';
import {IHeaderProps} from './type';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import ToggleThemeButton from "../header/ToggleThemeButton.tsx";
import HeaderSideBar from "../header/HeaderSideBar.tsx";

const Header = ({theme, toggleTheme}: IHeaderProps) => {
    const navigate = useNavigate();
    const [menuState, setMenuState] = useState(false);

    const logo =
        <svg width="76" height="13" viewBox="0 0 76 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0113636 12V0.363636H4.60227C5.48485 0.363636 6.23674 0.532197 6.85795 0.869318C7.47917 1.20265 7.95265 1.66667 8.27841 2.26136C8.60795 2.85227 8.77273 3.53409 8.77273 4.30682C8.77273 5.07955 8.60606 5.76136 8.27273 6.35227C7.93939 6.94318 7.45644 7.40341 6.82386 7.73295C6.19508 8.0625 5.43371 8.22727 4.53977 8.22727H1.61364V6.25568H4.14205C4.61553 6.25568 5.00568 6.17424 5.3125 6.01136C5.62311 5.8447 5.85417 5.61553 6.00568 5.32386C6.16098 5.02841 6.23864 4.68939 6.23864 4.30682C6.23864 3.92045 6.16098 3.58333 6.00568 3.29545C5.85417 3.00379 5.62311 2.77841 5.3125 2.61932C5.00189 2.45644 4.60795 2.375 4.13068 2.375H2.47159V12H0.0113636ZM10.3707 12V0.363636H12.831V5.16477H17.8253V0.363636H20.2798V12H17.8253V7.19318H12.831V12H10.3707ZM33.0014 6.18182C33.0014 7.45076 32.7609 8.5303 32.2798 9.42045C31.8026 10.3106 31.151 10.9905 30.3253 11.4602C29.5033 11.9261 28.5791 12.1591 27.5526 12.1591C26.5185 12.1591 25.5904 11.9242 24.7685 11.4545C23.9465 10.9848 23.2969 10.3049 22.8196 9.41477C22.3423 8.52462 22.1037 7.44697 22.1037 6.18182C22.1037 4.91288 22.3423 3.83333 22.8196 2.94318C23.2969 2.05303 23.9465 1.375 24.7685 0.909091C25.5904 0.439394 26.5185 0.204545 27.5526 0.204545C28.5791 0.204545 29.5033 0.439394 30.3253 0.909091C31.151 1.375 31.8026 2.05303 32.2798 2.94318C32.7609 3.83333 33.0014 4.91288 33.0014 6.18182ZM30.5071 6.18182C30.5071 5.35985 30.384 4.66667 30.1378 4.10227C29.8954 3.53788 29.5526 3.10985 29.1094 2.81818C28.6662 2.52652 28.1473 2.38068 27.5526 2.38068C26.9579 2.38068 26.4389 2.52652 25.9957 2.81818C25.5526 3.10985 25.2079 3.53788 24.9616 4.10227C24.7192 4.66667 24.598 5.35985 24.598 6.18182C24.598 7.00379 24.7192 7.69697 24.9616 8.26136C25.2079 8.82576 25.5526 9.25379 25.9957 9.54545C26.4389 9.83712 26.9579 9.98295 27.5526 9.98295C28.1473 9.98295 28.6662 9.83712 29.1094 9.54545C29.5526 9.25379 29.8954 8.82576 30.1378 8.26136C30.384 7.69697 30.5071 7.00379 30.5071 6.18182ZM33.8494 2.39205V0.363636H43.4062V2.39205H39.8438V12H37.4119V2.39205H33.8494ZM44.9801 12V0.363636H52.821V2.39205H47.4403V5.16477H52.4176V7.19318H47.4403V9.97159H52.8438V12H44.9801ZM54.3338 2.39205V0.363636H63.8906V2.39205H60.3281V12H57.8963V2.39205H54.3338ZM75.6264 6.18182C75.6264 7.45076 75.3859 8.5303 74.9048 9.42045C74.4276 10.3106 73.776 10.9905 72.9503 11.4602C72.1283 11.9261 71.2041 12.1591 70.1776 12.1591C69.1435 12.1591 68.2154 11.9242 67.3935 11.4545C66.5715 10.9848 65.9219 10.3049 65.4446 9.41477C64.9673 8.52462 64.7287 7.44697 64.7287 6.18182C64.7287 4.91288 64.9673 3.83333 65.4446 2.94318C65.9219 2.05303 66.5715 1.375 67.3935 0.909091C68.2154 0.439394 69.1435 0.204545 70.1776 0.204545C71.2041 0.204545 72.1283 0.439394 72.9503 0.909091C73.776 1.375 74.4276 2.05303 74.9048 2.94318C75.3859 3.83333 75.6264 4.91288 75.6264 6.18182ZM73.1321 6.18182C73.1321 5.35985 73.009 4.66667 72.7628 4.10227C72.5204 3.53788 72.1776 3.10985 71.7344 2.81818C71.2912 2.52652 70.7723 2.38068 70.1776 2.38068C69.5829 2.38068 69.0639 2.52652 68.6207 2.81818C68.1776 3.10985 67.8329 3.53788 67.5866 4.10227C67.3442 4.66667 67.223 5.35985 67.223 6.18182C67.223 7.00379 67.3442 7.69697 67.5866 8.26136C67.8329 8.82576 68.1776 9.25379 68.6207 9.54545C69.0639 9.83712 69.5829 9.98295 70.1776 9.98295C70.7723 9.98295 71.2912 9.83712 71.7344 9.54545C72.1776 9.25379 72.5204 8.82576 72.7628 8.26136C73.009 7.69697 73.1321 7.00379 73.1321 6.18182Z"/>
        </svg>;

    const menuLineLoop = () => {
        const lines = [];

        for(let i = 0; i < 3; i++) {
            lines.push(<span key={i} />);
        }

        return lines;
    }


    useEffect(() => {
        setMenuState(false);
    }, [navigate]);

    return (
        <HeaderContainer>
            <Inner>
                <Logo onClick={() => navigate('/')}>
                    {logo}
                </Logo>
                <ToggleGroup>
                    <ToggleThemeButton theme={theme} toggleTheme={toggleTheme}/>
                    <Menu onClick={() => setMenuState(prev => !prev)} $menuState={menuState}>
                        {menuLineLoop()}
                    </Menu>
                </ToggleGroup>
            </Inner>
            {
                <HeaderSideBar theme={theme} menuState={menuState}/>

            }
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1004; // ?? 어디서 내려온 천사..
    width: 90%;
    height: 80px;
`;

const Inner = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    inset: 0;
    margin: auto;
`;

const Logo = styled.div`
    cursor: pointer;
    width: 145px;
    height: 27px;

    svg {
        fill: ${({theme}) => theme.text}
    }
`;

const ToggleGroup = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const Menu = styled.div<{$menuState: boolean}>`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 1000;
    cursor: pointer;
    padding: 10px;
    span {
        transition: transform .3s;
        &:first-child {
            position: ${({$menuState}) => $menuState ? "absolute" : "static"};
            transform: ${({$menuState}) => $menuState ? "rotate(130deg)" : "rotate(0deg)"};
        }
        &:nth-child(2) {
            opacity: ${({$menuState}) => $menuState ? "0" : "1"};
        }
        &:last-child {
            position: ${({$menuState}) => $menuState ? "absolute" : "static"};
            transform: ${({$menuState}) => $menuState ? "rotate(50deg)" : "rotate(0deg)"};
        }
        width: 20px;
        height: 2px;
        background: ${({theme}) => theme.text};
        border-radius: 1px;
    }
`;

export default Header;
