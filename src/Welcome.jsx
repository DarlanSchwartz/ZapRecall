import styled from "styled-components";
import logo from './assets/logo.png';

const WelcomeScreen = styled.div`
    display: flex;
    justify-content:  center;
    flex-direction: column;
    color: white;
    align-items: center;
    height: 100svh;
    width: 100%;

    button{
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        width: 246px;
        height: 54px;
        background: white;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #D70900;
        margin-top: 30px;
        transition: all 200ms;
        cursor: pointer;
    }

    button:hover{
        color:  white;
        background-color: lightgray;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 13px;

    img{
        width: 136px;
        height: 161px;
    }

    h1{
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        text-align: center;
        width: 257px;
        height: 59px;
    }
`;

export default function Welcome(props)
{
    return(
        <WelcomeScreen>
            <Logo>
                <img src={logo}/>
                <h1>ZapRecall</h1>
            </Logo>
            <button data-test="start-btn" onClick={() => props.startRecallAction(true)} >Inciar Recall!</button>
        </WelcomeScreen>
    );
}