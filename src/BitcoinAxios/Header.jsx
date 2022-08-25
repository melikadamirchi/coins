import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import Body from './Body';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Header({inn,setInn,fil,setFil}) {
    const fnc=(e)=>{
        const inp=e.target.value
        setInn(inp)

    }
    useEffect(()=>{
        axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((resp)=>{
            setFil(resp.data.coins)
        })

    },[])
    const filteri=fil.filter((coin)=>{return coin.name.toLowerCase().includes(inn.toLowerCase()) })

    
  return (
    <div className='container mt-5 w-50 mx-auto justify-content-center align-content-center d-flex flex-column bg-light text-opacity-25'>
        <input className='container form-control mt-3 ' type="text" name="" id="" onChange={fnc} placeholder="coin"/>
        <div className=' justify-content-center align-content-center mx-auto d-flex flex-column text-center mt-3'>
            {filteri.map((i)=>{return <Body name={i?.name} symbol={i?.symbol} price={i?.price} icon={i?.icon}/>})}
        </div>
    </div>
  )
}
