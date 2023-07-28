import styled from 'styled-components';

import backgroundImg from '../../assets/background.jpg';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 13.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {
        font-family: "Ubuntu", sans-serif;
        color: ${({ theme }) => theme.COLORS.MAIN};
        font-size: 4.8rem;
    }
    
    > h2 {
        font-size: 2.4rem;
        margin: 8.4rem 0 2.4rem;
    }
    
    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    
    > a {
        color: ${({ theme }) => theme.COLORS.MAIN};

        margin-top: 12.4rem;
    }
`;

export const Background = styled.div`
    flex: 1; 
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: .4;
`;