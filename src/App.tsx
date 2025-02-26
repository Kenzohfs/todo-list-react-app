import { ThemeProvider } from 'styled-components';

import RouterProvider from './routes/Router';
import theme from './style/theme';

import './App.css';

function App() {

  return (
    <ThemeProvider theme={theme}>
        <RouterProvider />
    </ThemeProvider>
  );
}

export default App;
