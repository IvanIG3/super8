import styled from 'styled-components';

const Spinner = styled.div`
    margin: 0;
    text-align: center;
    width: 5em;

    div {
        width: 1em;
        height: 1em;
        background-color: ${props => props.theme.colors.primary};
        border-radius: 100%;
        display: inline-block;
        -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    }

    @-webkit-keyframes sk-bouncedelay {
        0%, 80%, 100% { -webkit-transform: scale(0) }
        40% { -webkit-transform: scale(1.0) }
    }

    @keyframes sk-bouncedelay {
        0%, 80%, 100% { 
            -webkit-transform: scale(0);
            transform: scale(0);
        } 40% { 
            -webkit-transform: scale(1.0);
            transform: scale(1.0);
        }
    }
`;

const SpinnerDots = () => {
    return (
        <Spinner>
            <div style={{ animationDelay: "-.32s" }}></div>
            <div style={{ animationDelay: "-.16s" }}></div>
            <div></div>
        </Spinner>
    );
};

export default SpinnerDots;