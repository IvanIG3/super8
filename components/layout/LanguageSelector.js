import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../actions/languageActions';

const Select = styled.select`
    appearance: none;
    -webkit-appearance: none;
    border-radius: .3em;
    border: 1px solid ${props => props.theme.colors.body};
    background-color: transparent;
    color: ${props => props.theme.colors.body};
    text-align: center;
    text-align-last: center;
    height: 2.8em;
    width: 3.5em;
    option {
        background-color: ${props => props.theme.colors.dark};
    }
`;

const LanguageSelector = () => {
    // Translations
    const { i18n } = useTranslation();

    // Redux
    const dispatch = useDispatch();
    const language = useSelector(state => state.language.language);

    // Change language
    const handleChange = e => {
        i18n.changeLanguage(e.target.value);
        dispatch(setLanguage(e.target.value));
    };

    return (
        <Select 
            value={language}
            onChange={handleChange}
            aria-label="Language"
        >
            <option value="es-ES">ES</option>
            <option value="en-US">EN</option>
        </Select>
    );
}

export default React.memo(LanguageSelector);