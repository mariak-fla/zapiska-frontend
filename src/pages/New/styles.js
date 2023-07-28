import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;

    grid-template-rows: 10.5rem auto;
    grid-template-areas:
        "header"
        "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0 1rem;
    }
`;

export const Form = styled.form`
    max-width: 55rem;
    margin: 3.8rem auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 3.6rem;

        button {
            font-size: 1.8rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`;