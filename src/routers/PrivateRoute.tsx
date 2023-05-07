import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
  isAuthenticated: boolean;
}
export const PrivateRoute = (props: Props) => {
  return props.isAuthenticated ? (
    props.children
  ) : (
    <Navigate to={'/auth/login'} />
  );
};
