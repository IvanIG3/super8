import { useState } from 'react';
import languageContext from './languageContext';

const LanguageProvider = ({ children }) => {

    const [ language, setLanguage ] = useState('es-ES');

    return (
        <languageContext.Provider
            value={{
                language,
                setLanguage
            }}
        >
            { children }
        </languageContext.Provider>
    );
}
 
export default LanguageProvider;