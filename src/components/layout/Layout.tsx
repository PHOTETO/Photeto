import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <Container>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 576px;
    margin: auto;
`;

export default Layout;
