import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900 };
    color: ${({ theme }) => theme.COLORS.GRAY_300 };
    
    margin-bottom: .8rem;
    border-radius: 555px;

    > input {
        height: 3.5rem;
        width: 100%;

        padding: 0 1.5rem;

        color: ${({ theme }) => theme.COLORS.WHITE };
        background: transparent;
        border: none;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300 };
        }
    }

    > svg {
         margin-left: 1.6rem;
         display: flex;
    }
`