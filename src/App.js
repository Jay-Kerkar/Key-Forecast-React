import React, { useState } from 'react'
import Weather from './components/Weather'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0)
  return (
    <>
      <LoadingBar color='#f11946' progress={progress} height={3} />
      <Weather setProgress={setProgress} />
    </>
  )
}

export default App