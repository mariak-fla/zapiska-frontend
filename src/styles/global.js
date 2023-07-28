import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    ::selection {
        background-color:  ${({ theme }) => theme.COLORS.MAIN};
        color:  ${({ theme }) => theme.COLORS.WHITE};
    }

    body {
        background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color:  ${({ theme }) => theme.COLORS.WHITE};
        font-family: "Roboto Slab", serif;

        -webkit-font-smoothing: antialised;
    }

    input, button, textarea {
        font-family: "Prompt", sans-serif;
    }

    body, input, button, textarea {
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter .2s;
    }

    button:hover, a:hover {
        filter: brightness(.9);
    }
`;