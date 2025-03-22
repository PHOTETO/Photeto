import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Layout from './components/layout/Layout.tsx';
import GlobalStyle from './styles/GlobalStyles.ts';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './styles/Theme.ts';
import { useState } from 'react';
import CreateKakao from './pages/CreateKakao.tsx';
import Feedback from "./components/feedback/Feedback.tsx";

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <GlobalStyle />
        <Layout theme={theme} toggleTheme={toggleTheme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createKakao" element={<CreateKakao />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
