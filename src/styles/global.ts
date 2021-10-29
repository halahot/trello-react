import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }

    body, html {
        height: 100%;
        overflow: hidden;
    }
    #root{
        margin:0 auto;
        height: 100%;
    }
    `