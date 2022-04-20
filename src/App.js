import React, { useState } from 'react'
import Weather from './components/Weather'
import LoadingBar from 'react-top-loading-bar'
import Alert from './components/Alert'

const App = () => {
  const [progress, setProgress] = useState(0)

  const [alert, setAlert] = useState(null)
  const configAlert = (alertMessage, type) => {
    setAlert({
      alertMessage: alertMessage,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }
  return (
    <>
      <Alert alert={alert} />
      <LoadingBar color='#f11946' progress={progress} height={3} />
      <Weather setProgress={setProgress} configAlert={configAlert} />
    </>
  )
}

export default App