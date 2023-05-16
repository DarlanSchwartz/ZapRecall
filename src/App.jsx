import { Fragment, useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './globalStyles';
import Welcome from './Welcome.jsx';
import RecallScreen from './RecallScreen';

export default function App() {

  const [recallStarted , setRecallStarted] = useState(false);

  return (
    <Fragment>
        <GlobalStyle/>
        {!recallStarted && <Welcome startRecallAction = {setRecallStarted}></Welcome>}
        {recallStarted && <RecallScreen></RecallScreen>}
    </Fragment>
  )
}
