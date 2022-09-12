import { createGlobalStyle } from "styled-components";
import Gilroy from "../assets/fonts/Gilroy-Light.otf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${Gilroy}') format('truetype');
    }
    * {
        font-family: 'Montserrat', sans-serif;
    }
    html {
        background: #0C0A18;
        line-height: 1.5;
        tab-size: 4;
    }
    body {
        font-family: inherit;
    }
    html, body, #__next {
        min-height: 100%;
        margin: 0px;
        background-repeat: no-repeat;
    }
    @media only screen and (min-width: 993px) {
        body, html {
            max-width: 100%;
        }
    }
    audio, canvas, embed, iframe, img, object, svg, video {
        display: block;
        vertical-align: middle;
    }
    blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
        margin: 0;
    }
    ::selection {
        background-color: rgb(21, 178, 229);
        color: rgb(255, 255, 255);
    }
    
    ul {
        display: block;
        list-style-type: disc;
        -webkit-margin-before: 1em;
        margin-block-start: 1em;
        -webkit-margin-after: 1em;
        margin-block-end: 1em;
        -webkit-margin-start: 0;
        margin-inline-start: 0;
        -webkit-margin-end: 0;
        margin-inline-end: 0;
        -webkit-padding-start: 40px;
        padding-inline-start: 40px;
    }
    li {
        display: list-item;
        text-align: -webkit-match-parent;
    }
    button, html input[type=button], input[type=reset], input[type=submit] {
        -webkit-appearance: button;
        cursor: pointer;
    }
    button, select {
        text-transform: none;
    }
    button {
        overflow: visible;
    }
    button, input, optgroup, select, textarea {
        color: inherit;
        font: inherit;
        margin: 0;
    }
    button[disabled], html input[disabled] {
        cursor: default;
    }
    img {
        border: 0;
    }
    img, video {
        max-width: 100%;
        height: auto;
    }
    input {
        line-height: normal;
    }
    *, ::before, ::after {
        box-sizing: border-box;
    }
    h1, h2 {
        line-height: 110%;
    }
    audio, canvas, progress, video {
        display: inline-block;
        vertical-align: baseline;
    }
    .item-enter {
        opacity: 0;
    }
    .item-enter-active {
        opacity: 1;
        transition: opacity 500ms ease-in;
    }
    .item-exit {
        opacity: 1;
    }
    .item-exit-active {
        opacity: 0;
        transition: opacity 500ms ease-in;
    }

    @keyframes mouse-scroll {
        0% {
            transform: translate(50%, 0px);
        }
        50% {
            transform: translate(50%, -10px);
        }
        100% {
            transform: translate(50%, 0px);
        }
    }
`;

export default GlobalStyle;
