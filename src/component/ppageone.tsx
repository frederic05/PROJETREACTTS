import React, { useState } from 'react'
import Formulaire from './formulaire'
import {Project} from '../interfaceTS/datainterface'

interface Props{

    data: Project[]
}
const Ppageone = ({data}: Props) => {

    const [curent, setCurent]= useState<Project[]>(data)
    
    function hanDlerClick(data: Project ) {
        //console.log('',JSON.stringify(data, null, ' '));
    }

  return (
    <div>
        <div className="row">
        {curent.map((items, index)=>(
         <div className="card" key={index}> 
            <img src={items.imageUrl} alt={items.name} className="iamg"/>
                <section className="section dark">
                <h5 className="strong">
                    <strong>{items.name}</strong>
                </h5>
                <p className='para'>{items.description}</p>
                <p>Budget : {items.budget?.toLocaleString()}</p>
                <button className="bordered" onClick={()=>hanDlerClick(items)}>
                    <span className="icon-edit "></span>
                    Éditer
                </button>
                </section>
         </div>
        ))}
         </div>
        {/**$$ FORMULAIRE D'ENREGISTREMENT ****** */}
        <Formulaire curent={curent} setCurent={setCurent}/>
    </div>
  )
}

export default Ppageone