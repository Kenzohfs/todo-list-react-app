import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '../layout';
import Login from '../pages/Login';

import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import PrivatePaths from './privatePaths';
import PublicPaths from './publicPaths';

const RouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PublicPaths.LOGIN} element={<Login />} />
      <Route path={PublicPaths.REGISTER} element={<Register />} />

      <Route element={<Layout />}>
        <Route path={PrivatePaths.HOME} element={<>home</>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default RouterProvider;
