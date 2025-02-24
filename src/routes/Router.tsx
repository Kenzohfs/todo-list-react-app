import { BrowserRouter, Route, Routes } from 'react-router';
import PrivatePaths from './privatePaths';
import PublicPaths from './publicPaths';

const RouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PublicPaths.LOGIN} element={<>login</>} />
      <Route path={PublicPaths.REGISTER} element={<>register</>} />

      <Route element={<>layout</>}>
        <Route path={PrivatePaths.HOME} element={<>home</>} />
      </Route>

      <Route path="*" element={<>not found</>} />
    </Routes>
  </BrowserRouter>
);

export default RouterProvider;
