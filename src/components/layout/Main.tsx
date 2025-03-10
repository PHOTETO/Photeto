import React from 'react';
import styled from 'styled-components';

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <MainContainer>
      <Inner>{children}</Inner>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  position: relative;
  flex-grow: 1;
  padding-top: 80px;
  padding-bottom: 40px;

  width: 100%;
  background: ${({ theme }) => theme.sectionBackground};
  transition: 0.3s;
`;

const Inner = styled.div`
  margin: auto;
  inset: 0;
  height: 100%;
`;

export default Main;
