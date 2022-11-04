import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{
        background-color: #1E192C;
        color: #FFFF;
        font-family: 'Open Sans';
    }
    ul{
        list-style-type: none;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
`