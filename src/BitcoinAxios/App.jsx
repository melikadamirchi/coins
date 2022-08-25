import React from 'react'
import Body from './Body'
import Header from './Header'
import { useState } from 'react'


function App() {

    const[inn,setInn]=useState("")
    const[fil,setFil]=useState([])
  return (
 
    <div>
      <h1>salam</h1>
        <Header inn={inn} setInn={setInn} fil={fil} setFil={setFil}/>
        <Body/>
    </div>

  )
}

export default App