import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./client/pages/LoginForm";
import RegisterForm from "./client/pages/RegisterForm";
import Home from "./client/pages/Home";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const App = () => {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
