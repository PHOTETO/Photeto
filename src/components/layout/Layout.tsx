import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { LayoutProps } from './type';

const Layout = ({ toggleTheme, theme, children }: LayoutProps) => {
  return (
    <Container>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 415px;
  margin: auto;
`;

export default Layout;
