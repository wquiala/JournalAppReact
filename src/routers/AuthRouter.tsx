import { Route, Routes } from 'react-router-dom';
import { LoginScreem } from '../components/auth/LoginScreem';
import { RegisterScreem } from '../components/auth/RegisterScreem';

export const AuthRouter = () => {
  return (
    <div className="auth_main">
      <div className="auth_box_container">
        <Routes>
          <Route path="/register" element={<RegisterScreem />} />
          <Route path="/login" element={<LoginScreem />} />
        </Routes>
      </div>
    </div>
  );
};
