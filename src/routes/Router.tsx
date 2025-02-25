import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '../layout';
import Login from '../pages/Login';

import PrivatePaths from './privatePaths';
import PublicPaths from './publicPaths';

const RouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PublicPaths.LOGIN} element={<Login />} />
      <Route path={PublicPaths.REGISTER} element={<>register</>} />

      <Route element={<Layout />}>
        <Route path={PrivatePaths.HOME} element={<>home</>} />
      </Route>

      <Route path="*" element={<>not found</>} />
    </Routes>
  </BrowserRouter>
);

export default RouterProvider;
