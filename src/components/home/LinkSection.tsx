import { linkButtons } from "../../constants/home";
import styled from "styled-components";

const LinkSection = () => {
    return (
        <Container>
            <LinkButtons>
                {
                    linkButtons.map((obj, index) => {
                        return (
                            <LinkButton key={index} color={obj.color}>
                                <ButtonIcon src={obj.image}/>
                                <ButtonTitle>{obj.title}</ButtonTitle>
                            </LinkButton>
                        )
                    })
                }
            </LinkButtons>
        </Container>
    );
};

const Container = styled.section`
    position: relative;
    width: 100%;
    margin: 20px 0;
`;

const LinkButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const LinkButton = styled.button<{ color: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 60px;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    background: ${props => props.color};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

const ButtonIcon = styled.img`
    width: 25px;
    height: 25px;
`;

const ButtonTitle = styled.span`
    color: #fff;
    font-size: 16px;
`;

export default LinkSection;
