import RouterProvider from './routes/Router';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import HooksProvider from './hooks';

function App() {
  return (
    <HooksProvider>
      <RouterProvider />
    </HooksProvider>
  );
}

export default App;
