import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    background-color: lightblue;
    height: 250px;
    padding: 15px 50px;
    border-radius: 15px;

.container__header{
    h1 {
        text-transform: uppercase;
    }
}

.container__input{
    width: 100%;
    display: flex;
    flex-direction: column;

    .input {
        width: 100%;
        display: flex;
        align-items: center;
        border: 1px solid #000;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;

        svg {
            font-size: 18px;
        }
    }
    .input:focus-within {
        border: 1px solid black;
    }

    .input__email {
        
    }
    .input__password {}

    input {
        width: 100%;
        border: none;
        background-color: transparent;
        padding-left: 5px;
    }

    input:focus {
        box-shadow: none;
        outline: none;
    }


}

.container__button{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        color: white;
        background-color: #000;
        padding: 6px;
        width: 100%;
        border-radius: 5px;
        font-size: 19px;
    }
}

`

