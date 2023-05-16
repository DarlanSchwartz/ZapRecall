import styled from "styled-components";
import WrongIcon from './assets/icone_erro.png'
import CorrectIcon from './assets/icone_certo.png'
import AlmostIcon from './assets/icone_quase.png'
import PlayIcon from './assets/seta_play.png'

const CounterContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    min-height: 70px;
    width: 100%;
    background-color: white;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }

`;

const CounterIcons = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 6px;
    img{
        width: 23px;
        height: 23px;
    }

`;

export default function CounterQuestions(props)
{
    let questionsAmount = props.length;
    let questionsAnswered = 0;

    props.cards.forEach(card =>{
        if(card.done == true)
        {
            questionsAnswered ++;
        }
    });

    
    return(
        <CounterContainer>
            <p>{questionsAnswered}/{questionsAmount} CONCLUÍDOS</p>
            <CounterIcons>
                {props.cards.map((card) => {
                    if(card.state == 1)
                    {
                        return <img src={CorrectIcon}/>
                    }
                    else if(card.state == 2)
                    {
                        return <img src={AlmostIcon}/>;
                    }
                    else if(card.state == 3)
                    {
                        return <img src={WrongIcon}/>
                    }
                })}
            </CounterIcons>
        </CounterContainer>
    );
}