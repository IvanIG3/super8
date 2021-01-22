import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Page = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5em;
    width: 2.5em;
    background-color: rgba(0, 0, 0, .2);
    border: 1px solid ${props => props.theme.colors.primary};
    ${props => !props.active && css`
        &:hover {
            cursor: pointer;
            background-color: rgba(255, 255, 255, .1);
        }
    `}
    ${props => props.active && css`
        background-color: rgba(255, 255, 255, .1);
    `};
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    div {
        &:first-of-type {
            border-top-left-radius: .3em;
            border-bottom-left-radius: .3em;
        }
        &:last-of-type {
            border-top-right-radius: .3em;
            border-bottom-right-radius: .3em;
        }
    }
`;

const Paginator = ({page, setPage, totalPages}) => {
    // Handle on page change
    const handleClick = e => {
        const value = e.currentTarget.innerText;
        switch(value) {
            case '>':
                setPage(page + 1);
                break;
            case '<':
                setPage(page - 1);
                break;
            case '>>':
                setPage(totalPages);
                break;
            case '<<':
                setPage(1);
                break;
            default:
                setPage(parseInt(value));
        }
    };
    
    // Create page
    const createPage = number => (
        <Page
            key={number}
            active={number === page}
            onClick={e => number !== page && handleClick(e)}
        >
            {number}
        </Page>
    );
    
    return (
        <Pagination>
            { page > 1 && createPage('<<') }
            { page > 1 && createPage('<') }
            { createPage(page) }
            { page < totalPages && createPage('>') }
            { page < totalPages && createPage('>>') }
        </Pagination>
    );
};

Paginator.propTypes = {
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired
};
 
export default Paginator;