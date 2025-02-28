import RouterProvider from './routes/Router';

import 'react-toastify/dist/ReactToastify.css';
import './config/firebase';

import HooksProvider from './hooks';

function App() {
  return (
    <HooksProvider>
      <RouterProvider />
    </HooksProvider>
  );
}

export default App;
