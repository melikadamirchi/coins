import React from 'react'

export default function Body({name,symbol,price,icon}) {
  return (
    <div className=' font-monospace text-center '>
        <h4>Name: {name}</h4>
        <h5>Symbol: {symbol}</h5>
        <h6>Price: {price}</h6>
        <h5>a<img width={"100rem"} src={icon}/>
        </h5>
    </div>
  )
}
