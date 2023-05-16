import { Fragment, useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './globalStyles';
import Welcome from './Welcome.jsx';
import RecallScreen from './RecallScreen';
import CounterQuestions from './CounterQuestions';

const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript", state:0 , open: false, turned : false, done:false},
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces", state:0 ,open: false, turned : false, done:false},
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula", state:0 ,open: false, turned : false, done:false},
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões", state:0 ,open: false, turned : false, done:false},
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma", state:0 ,open: false, turned : false, done:false},
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" , state:0 ,open: false, turned : false, done:false},
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes", state:0 ,open: false, turned : false, done:false},
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" , state:0 ,open: false, turned : false, done:false}
]

export default function App() {

  const [recallStarted , setRecallStarted] = useState(false);
  const [currentCards, setCurrentCards] = useState([...cards]);
  const [answeredCards, setAnsweredCards] = useState ([]);

  function SetRecallOpen(recallIndex, value)
  {
    
    let newCards = [...currentCards];
    if(newCards[recallIndex].done == true)
    {
      return;
    }
    newCards[recallIndex].open = value;
    setCurrentCards(newCards);
  }

  function SetRecallTurned(recallIndex,value)
  {
    let newCards = [...currentCards];
    newCards[recallIndex].turned = value;
    setCurrentCards(newCards);
  }

  function SetRecallState(recallIndex,value)
  {
    let newCards = [...currentCards];
    newCards[recallIndex].state = value;
    newCards[recallIndex].turned = false;
    newCards[recallIndex].open = false;
    newCards[recallIndex].done = true;
    setAnsweredCards([...answeredCards,{state:value}])
    setCurrentCards(newCards);
  }

  return (
    <Fragment>
        <GlobalStyle/>
        {!recallStarted && <Welcome startRecallAction = {setRecallStarted}></Welcome>}
        {recallStarted && <RecallScreen cards = {currentCards} setRecall={(index,value) =>SetRecallOpen(index,value)} setTurned={(index,value)=> SetRecallTurned(index,value)} setState= {(index,value) => SetRecallState(index,value)}/>}
        {recallStarted && <CounterQuestions length = {currentCards.length} cards = {answeredCards}/>}
    </Fragment>
  )
}
