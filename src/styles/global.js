import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins';
    }

    button {
        font-family: 'Poppins', sans-serif;
        border: none;
    }

    .switch {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        svg {
            font-size: 30px;
        }
    }

    .container__page {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100vh;
    }

    //Themes
    #light {
        background-color: #add8e6;

        .main {
            background-color: #ececec;
        }
    }

    #dark {
        background-color: black;
    
        .switch {
            svg {
                color: #FFF;
            }
        }
    
    }
`