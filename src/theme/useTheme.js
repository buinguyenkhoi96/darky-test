import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const useTheme = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return { isDarkMode, setIsDarkMode }
};

export default useTheme;
