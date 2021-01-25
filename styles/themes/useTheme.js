import { useContext } from 'react';
import themeContext from './themeContext';

const useTheme = () => useContext(themeContext);

export default useTheme;