import styled from "styled-components";
import WrongIcon from './assets/icone_erro.png'
import CorrectIcon from './assets/icone_certo.png'
import AlmostIcon from './assets/icone_quase.png'
import PlayIcon from './assets/seta_play.png'

import SadIcon from './assets/sad.png'
import PartyIcon from './assets/party.png'

const CounterContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    position: fixed;
    bottom: 0;
    left: 0;
    min-height: 70px;
    width: 100%;
    background-color: white;

    .finish-message{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 222px;
        text-align: center;

        p{
            margin-top: 15px;
            margin-bottom: 15px;
            width: 222px;
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
        }
    }

    .finish-title{
        display: flex;
        gap: 10px;
        margin-top: 10px;

        h1{
            font-family: 'Recursive', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 22px;
            color: #333333;
        }

        img{
            width: 23px;
            height: 23px;
        }
    }

`;

const CounterIcons = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    img{
        width: 23px;
        height: 23px;
    }

`;

export default function CounterQuestions(props)
{
    let questionsAmount = props.length;
    let questionsAnswered = 0;
    let congratsText = 'Parabéns!';
    let congratsImage = PartyIcon;
    let congratsDescription = 'Você não esqueceu de nenhum flashcard!';

    props.allCards.forEach(card =>{
        if(card.done == true)
        {
            questionsAnswered ++;
        }

        if(card.state == 3)
        {
            congratsText = 'Putz...';
            congratsImage = SadIcon;
            congratsDescription = 'Ainda faltam alguns... Mas não desanime!';
        }
    });




    return(
        <CounterContainer data-test="footer">
            {(questionsAmount == questionsAnswered) && 
                <div className="finish-message" data-test="finish-text">
                    <div className="finish-title">
                        <img src={congratsImage}/>
                        <h1 className="finish-text">{congratsText}</h1>
                    </div>
                    <p>{congratsDescription}</p>
                </div>
            }
            <p>{questionsAnswered}/{questionsAmount} CONCLUÍDOS</p>
            <CounterIcons>
                {props.cards.map((card,index) => {
                    if(card.state == 1)
                    {
                        return <img data-test="zap-icon" key={index} src={CorrectIcon}/>;
                    }
                    else if(card.state == 2)
                    {
                        return <img data-test="partial-icon" key={index} src={AlmostIcon}/>;
                    }
                    else if(card.state == 3)
                    {
                        return <img data-test="no-icon" key={index} src={WrongIcon}/>;
                    }
                })}
            </CounterIcons>
        </CounterContainer>
    );
}