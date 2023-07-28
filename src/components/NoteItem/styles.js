import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    
    margin-bottom: .8rem;
    border-radius: 222rem;
    padding-right: 1.6rem;
    
    > button {
        border: none;
        background: none;
        
        margin-top: .5rem;
    }
    
    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }
    
    .button-add {
        color: ${({ theme }) => theme.COLORS.MAIN};
    }
    
    > input {
        height: 3.5rem;
        width: 100%;
        
        padding: 1.5rem;
        
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;