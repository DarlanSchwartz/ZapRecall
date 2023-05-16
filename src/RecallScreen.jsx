import styled from "styled-components";
import logo from './assets/logo.png';
import Recall from "./Recall.jsx";

const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

const RecallWindow = styled.div`

    display:  flex;
    position: relative;
    flex-direction:  column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const RecallWindowLogo = styled.div`

    width: 256px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 48px;
    transform: translateX(-50%);

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
    margin-top: 400px;
`;

// {cards.map((obj,index) => Recall(...obj,index))}

export default function RecallScreen(props)
{
    return(

        <RecallWindow>
            <RecallWindowLogo>
                <img src={logo}/>
                <h1>ZapRecall</h1>
            </RecallWindowLogo>
            <Recalls>
                {cards.map((obj,index) => Recall({...obj,index}))}
            </Recalls>
            
        </RecallWindow>

    );
}