import React from "react";
import styled from "styled-components";

type MainProps = {
    children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
    return (
        <MainContainer>
            {children}
        </MainContainer>
    )
};

const MainContainer = styled.main`
    flex-grow: 1;
    width: 100%;
    border: 1px solid #333;
`;

export default Main;
