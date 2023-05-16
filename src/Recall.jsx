import styled from "styled-components";
import CorrectIcon from './assets/icone_certo.png'
import WrongIcon from './assets/icone_erro.png'
import AlmostIcon from './assets/icone_quase.png'
import TurnIcon from './assets/seta_virar.png'
import PlayIcon from './assets/seta_play.png'


const RecalComponent = styled.div`

    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display:  flex;
    justify-content: space-between;
    align-items: center;

    img
    {
        width: 23px;
        height: 23px;
        margin-right: 15px;
        cursor: pointer;
    }

    h1{
        width: 87px;
        height: 19px;

        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        color: #333333;
        margin-left: 15px;
    }

`;

export default function Recall(props)
{
    return(
        <RecalComponent>
            <h1>Pergunta {props.index}</h1>
            <img src={PlayIcon}/>
        </RecalComponent>
    );
}