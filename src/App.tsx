import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./components/layout/Layout.tsx";


function App() {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Layout>
    </Router>
  )
}

export default App
