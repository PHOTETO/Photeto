import styled from "styled-components";
import UtterancesComment from "../common/UtterancesComment.tsx";

const Footer = () => {
    const footerObj = [
        {
            title: "Home",
            svg: <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.21071L6.41377 1L11.8275 5.21071V11.8275C11.8275 12.1466 11.7008 12.4526 11.4752 12.6782C11.2496 12.9038 10.9435 13.0306 10.6245 13.0306H2.20306C1.88399 13.0306 1.57799 12.9038 1.35237 12.6782C1.12675 12.4526 1 12.1466 1 11.8275V5.21071Z" stroke="#BBBBBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.60938 13.0309V7.01562H8.21855V13.0309" stroke="#BBBBBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
        }, 
        {
            title: "Gallery",
            svg: <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6245 1H2.20306C1.53863 1 1 1.53863 1 2.20306V10.6245C1 11.2889 1.53863 11.8275 2.20306 11.8275H10.6245C11.2889 11.8275 11.8275 11.2889 11.8275 10.6245V2.20306C11.8275 1.53863 11.2889 1 10.6245 1Z" stroke="#BBBBBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.30854 5.21084C4.80687 5.21084 5.21084 4.80687 5.21084 4.30854C5.21084 3.81022 4.80687 3.40625 4.30854 3.40625C3.81022 3.40625 3.40625 3.81022 3.40625 4.30854C3.40625 4.80687 3.81022 5.21084 4.30854 5.21084Z" stroke="#BBBBBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.8276 8.21859L8.81995 5.21094L2.20312 11.8278" stroke="#BBBBBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
        }, 
        {
            title: "Create",
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.08601 1L4.00781 10.0229C4.00781 10.342 4.13456 10.648 4.36018 10.8736C4.5858 11.0993 4.8918 11.226 5.21087 11.226H14.2338" stroke="#BBBBBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 4.08601L10.0229 4.00781C10.342 4.00781 10.648 4.13456 10.8736 4.36018C11.0993 4.5858 11.226 4.8918 11.226 5.21087V14.2338" stroke="#BBBBBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        }
    ];

    return (
        <FooterContainer>
            <ButtonList>
                {
                    footerObj.map((obj, index) => {
                        return (
                            <Button key={index}>
                                <IconCover>
                                    {obj.svg}
                                </IconCover>
                                <Text>{obj.title}</Text>
                            </Button>
                        )
                    })
                }
            </ButtonList>
            <UtterancesComment />
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    position: relative;
    width: 100%;
    height: 80px;
`;

const ButtonList = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    
`;

const IconCover = styled.div`
    
`;

const Text = styled.span`
    color: #BBBBBB;
`;

const Button = styled.button`
    width: 45px;
    height: 30px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.background};
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: .5s;
    &:hover {
        transition: .5s;
        ${Text} {
            color: #FF5050;
        }
        path {
            stroke: #FF5050;
        }
    }
`;

export default Footer;