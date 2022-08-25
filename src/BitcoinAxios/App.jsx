import React from 'react'
import Body from './Body'
import Header from './Header'
import { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'


function App() {

    const[inn,setInn]=useState("")
    const[fil,setFil]=useState([])
  return (
 
    <div>
     
        <Header inn={inn} setInn={setInn} fil={fil} setFil={setFil}/>
        <Body/>
    </div>

  )
}

export default App