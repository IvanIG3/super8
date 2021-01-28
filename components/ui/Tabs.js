import { cloneElement, Children } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    flex: 1;
    display: grid;
    grid-template-rows: auto 1fr;
`;

const TabsContainer = styled.div`
    display: grid;
    border-bottom: 1px solid ${props => `${props.theme.colors.textcolor}80`};
    margin-bottom: 2em;

    @media (min-width: 768px) {
        grid-auto-flow: column;
    }
`;

const Tabs = ({ children, idxTab, setIdxTab }) => (
    <Container>
        <TabsContainer>
            {Children.map(children, (tab, idx) => (
                cloneElement(tab, {
                    isActive: idx === idxTab,
                    setActive: () => setIdxTab(idx),
                })
            ))}
        </TabsContainer>
        <div>
            {children[idxTab] ?
                children[idxTab].props.children :
                children.props.children
            }
        </div>
    </Container>
);

Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    idxTab: PropTypes.number.isRequired,
    setIdxTab: PropTypes.func.isRequired,
};

export default Tabs;