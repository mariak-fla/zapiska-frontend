import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    border: none;

    color: ${({ theme, isActive }) => isActive ? theme.COLORS.MAIN : theme.COLORS.GRAY_100 };
    font-size: 16px;
`