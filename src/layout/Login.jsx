import { Outlet } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h1>From Login</h1>
      <Outlet />
    </div>
  );
};

export default Login;
