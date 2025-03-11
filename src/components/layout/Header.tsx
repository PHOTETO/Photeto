import styled from 'styled-components';
import logo from '../../assets/images/header/logo.png';
import hanburgerBar from '../../assets/images/header/menu.png';
import { IHeaderProps } from './type';
import { useNavigate } from 'react-router-dom';

const Header = ({ theme, toggleTheme }: IHeaderProps) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Inner>
        <Logo
          src={logo}
          width={145}
          height={27}
          onClick={() => navigate('/')}
        />
        <ToggleThemeButton onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </ToggleThemeButton>
        <Menu src={hanburgerBar}></Menu>
      </Inner>
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

const Logo = styled.img`
  cursor: pointer;
`;

const ToggleThemeButton = styled.button`
  background: ${({ theme }) => theme.button.toggleThemeButtonColor};
  width: 40px;
  height: 40px;
  font-size: 15px;
  border-radius: 50%;
  box-sizing: border-box;
  margin-left: 30%;
  &:hover {
    background: ${({ theme }) => theme.button.toggleThemeButtonHoverColor};
  }
`;

const Menu = styled.img`
  cursor: pointer;
`;

export default Header;
