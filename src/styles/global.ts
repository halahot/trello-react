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

    body { 
        background-color: #f4f5f7;
        position: relative;
        z-index: 0;
    }
    #root{
        margin:0 auto;
        height: 100%;
        overflow: hidden;
        background-color: rgb(0, 121, 191);
    }
    `