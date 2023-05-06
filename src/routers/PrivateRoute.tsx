import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
  isAuthenticated: boolean;
}
export const PrivateRoute = (props: Props) => {
  console.log(props.isAuthenticated);
  return props.isAuthenticated ? (
    props.children
  ) : (
    <Navigate to={'/auth/login'} />
  );
  /*  if (props.isAuthenticated) return props.children;
  else {
    return <Navigate to={'/auth/login'} />;
  } */
};
