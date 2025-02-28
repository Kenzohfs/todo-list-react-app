import React, { useMemo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import PublicPaths from '../publicPaths';

interface IPrivatePathWrapper {}

const PrivatePathWrapper: React.FC<IPrivatePathWrapper> = ({}) => {
  const { isAuthenticated } = useAuth();

  const isAuthenticatedState = useMemo(
    () => isAuthenticated(),
    [isAuthenticated]
  );

  if (!isAuthenticatedState) {
    return <Navigate to={PublicPaths.LOGIN} />;
  }

  return <Outlet />;
};

export default PrivatePathWrapper;
