import styled from "styled-components";
import logo from './assets/logo.png';
import Recall from "./Recall.jsx";

const RecallWindow = styled.div`

    display:  flex;
    position: relative;
    flex-direction:  column;
    align-items: center;
    justify-content: flex-start;
    height: 100svh;
    padding-bottom: 40px;
`;

const RecallWindowLogo = styled.div`

    width: 256px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    img{
        width: 52px;
        height: 60px;
    }

    h1{
        height: 44px;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        margin-left: 20px;
    }

`;

const Recalls = styled.div `
    display:  flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    justify-content: center;
    margin-top: 54px;
`;

export default function RecallScreen(props)
{
    return(

        <RecallWindow>
            <RecallWindowLogo>
                <img src={logo}/>
                <h1>ZapRecall</h1>
            </RecallWindowLogo>
            <Recalls>
                {props.cards.map((obj,i) => <Recall key={i} state = {obj.state} answer= {obj.answer} question = {obj.question} open = {obj.open} turned = {obj.turned} index = {i} setRecall = {(index,value) =>props.setRecall(index,value)} setTurned = {(index,value) => props.setTurned(index,value)} setState={(index,value) => props.setState(index,value)}></Recall>)}
            </Recalls>
        </RecallWindow>

    );
}