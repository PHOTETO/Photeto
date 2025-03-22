import {useNavigate} from "react-router-dom";
import {headerSideContent} from "../../constants/home.ts";
import styled from "styled-components";

const HeaderSideBar = ({theme, menuState}: { theme: string, menuState: boolean }) => {
    const navigate = useNavigate();

    return (
        <SideContainer theme={theme} menuState={menuState}>
            <SideInner>
                <SideTitle>메뉴</SideTitle>
                <SideList>
                    {
                        headerSideContent.map((sideObj, index) => {
                            return (
                                <SideContent
                                    onClick={() => navigate(sideObj.url)}
                                    key={index}
                                >{sideObj.content}</SideContent>
                            )
                        })
                    }
                </SideList>
            </SideInner>
        </SideContainer>
    )
}

const SideContainer = styled.div<{ theme: string, menuState: boolean }>`
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    font-weight: 700;
    z-index: 100;
    transition: .3s;
    transform: ${({menuState}) => menuState ? "translateX(0%)" : "translateX(100%)"};
    opacity: ${({menuState}) => menuState ? "1" : "0"};
    background: ${({theme}) => theme === "light"
            ? "rgba(255, 255, 255, .7)"
            : "rgba(0, 0, 0, 0.7)"};
`;

const SideInner = styled.div`
    position: absolute;
    right: 0;
    width: 275px;
    height: 100%;
    background: ${({theme}) => theme.background};
    opacity: 1;
    box-shadow: ${({theme}) => theme.shadow};
`;

const SideTitle = styled.p`
    margin: 40px 0 0 30px;
`;

const SideList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;
    margin-top: 40px;
`;

const SideContent = styled.li`
    cursor: pointer;
`;

export default HeaderSideBar;