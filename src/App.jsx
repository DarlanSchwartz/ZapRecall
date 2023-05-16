import { Fragment, useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './globalStyles';
import Welcome from './Welcome.jsx';

export default function App() {

  const [recallStarted , setRecallStarted] = useState(false);


  return (
    <Fragment>
        <GlobalStyle/>
        {!recallStarted && <Welcome startRecallAction = {setRecallStarted}></Welcome>}
    </Fragment>
  )
}
