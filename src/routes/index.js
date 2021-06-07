import Home from './App';
import { ThemeProvider } from '../theme';

const Routes = () => (
  <ThemeProvider>
    <Home />
  </ThemeProvider>
);

export default Routes;
