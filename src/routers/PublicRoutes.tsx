import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
  isAuthenticated: boolean;
}

export const PublicRoutes = (props: Props) => {
  return props.isAuthenticated ? <Navigate to={'/'} /> : props.children;
};
