import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Login } from './login/login';
import { Register } from './login/register';
import { Homepage } from './homepage/homepage';

const App = () => {
    return (
      <FluentProvider theme={webLightTheme}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/" element={<Navigate to="/homepage" />} />
          </Routes>
        </Router>
      </FluentProvider>
    );
};

export default App;