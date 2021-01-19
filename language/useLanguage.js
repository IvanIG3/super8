import { useContext } from 'react';
import languageContext from './languageContext';

const useLanguage = () => useContext(languageContext);
export default useLanguage;