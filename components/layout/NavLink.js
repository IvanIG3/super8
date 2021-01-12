import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const StyledLink = styled.a`
    font-size: 1.1em;
    text-align: center;
    margin: .5em 0;

    ${props => props.active && css`
        border-bottom: 1px solid;
    `}

    @media (min-width: 768px) {
        margin: 0 0 0 1.5em;
    }

    &:hover {
        border-bottom: 1px solid;
    }
`;

const NavLink = ({ children, href }) => {
    const router = useRouter();
    return (
        <Link href={href}>
            <StyledLink active={router.pathname === href}>
                {children}
            </StyledLink>
        </Link>
    );
};

export default NavLink;