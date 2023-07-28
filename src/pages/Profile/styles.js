import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    > header {
        width: 100%;
        height: 14rem;

        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        
        display: flex;
        align-items: center;
        padding: 0 12.4rem;
        
        svg {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 2.4rem;
        }

        button {
            background: none;
            border: none;
        }
    }
`;

export const Form = styled.form`
    max-width: 34rem;
    margin: -8.4rem auto 0;

    > div:nth-child(4) {
        margin-top: 2.4rem;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 3.2rem;

    width: 18rem;
    height: 18rem;

    > img {
        width: 18rem;
        height: 18rem;
        border-radius: 50%;
    }
    
    > label {
        width: 4.8rem;
        height: 4.8rem;
        
        background-color: ${({ theme }) => theme.COLORS.MAIN};
        border-radius: 50%;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        position: absolute;
        bottom: .7rem;
        right: .7rem;
        
        cursor: pointer;
        
        input {
            display: none;
        }
        
        svg {
            font-size: 2.4rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
    }
`;