import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700 };

    border: none;
    border-radius: 1rem; 
    padding: 2.4rem;
    margin-bottom: 1.6rem;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 500;
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.WHITE }
    }
    
    > footer {
        width: 100%;
        text-align: left;
    }
`;