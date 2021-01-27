import { useRef } from 'react';
import PropTypes from 'prop-types';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';

import styled from 'styled-components';
import Input from '../styled/Input';
import Button from '../styled/Button';

const SearchFormContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1em;
    margin-bottom: 1em;
`;

const Form = styled.form`
    flex: 1;
    display: flex;
    max-width: 320px;
`;

const SearchForm = ({ query, setQuery, placeholder }) => {
    const ref = useRef(query);

    const handleSubmit = e => {
        e.preventDefault();
        e.target.blur();
        setQuery(ref.current);
    };

    const handleChange = e => ref.current = e.target.value;

    return (
        <SearchFormContainer>
            <Form onSubmit={handleSubmit}>
                <Input 
                    style={{ borderRadius: '.3em 0 0 .3em'}}
                    onChange={handleChange}
                    placeholder={placeholder}
                    aria-label={placeholder}
                />
                <Button
                    style={{ borderRadius: '0 .3em .3em 0'}}
                    aria-label="Submit search query"
                >
                    <SearchAlt2 style={{ width: '1.5em'}} />
                </Button>
            </Form>
        </SearchFormContainer>
    );
};

SearchForm.propTypes = {
    query: PropTypes.string,
    setQuery: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};
 
export default SearchForm;