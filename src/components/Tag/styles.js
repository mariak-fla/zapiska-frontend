import styled from 'styled-components';

export const Container = styled.span`
    font-size: 12px;
    padding: 2px 15px;
    border-radius: 75px;
    margin-right: 8px;
    background-color: ${({ theme }) => theme.COLORS.MAIN};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;