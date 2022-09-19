import React, { useState } from 'react'
import {Project} from '../interfaceTS/datainterface'

interface Props{
    curent: Project[];
    setCurent: React.Dispatch<React.SetStateAction<Project[]>>
}
interface Ojdg{
    id?: number;
    name?: string;
    description?: string;
    imageUrl?: string;
    contractTypeId?: number;
    contractSignedOn?: Date;
    budget?: number;
    isActive?: boolean;
} 

const nbround = (max: number, min: number)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const Formulaire = ({curent, setCurent}: Props) => {

    const [vobj,  setVobj]= useState<Ojdg>({id: nbround(5, 99), name: "", description: "", imageUrl: "",
        contractTypeId: 0, contractSignedOn: new Date(), budget: 0, isActive: false})

    const addItems = (e: React.FormEvent)=>{

        e.preventDefault()      
        setCurent([...curent, vobj])
        setVobj({id: 0, name: "", description: "", imageUrl: "",
        contractTypeId: 0, contractSignedOn: new Date(), budget: 0, isActive: false})

    }

  return (
    <div className="form">
     <form className="input-group vertical" onSubmit={(e)=>addItems(e)}>
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" id="name" value={vobj.name}  onChange={(e)=>setVobj({...vobj, name: e.target.value})} placeholder="enter name" />
      <label htmlFor="imageUrl">Image Url</label>
      <input name="imageUrl" value={vobj.imageUrl}  onChange={(e)=>setVobj({...vobj, imageUrl: e.target.value})}  placeholder="enter image url" />
      <label htmlFor="description">Project Description</label>
      <textarea name="description" value={vobj.description}  onChange={(e)=>setVobj({...vobj, description: e.target.value})}   placeholder="enter description" />
      <label htmlFor="budget">Project Budget</label>
      <input type="text" name="budget" value={vobj.budget}  onChange={(e)=>setVobj({...vobj, budget: Number(e.target.value)})} placeholder="enter budget"  />
      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActive"/>
      <div className="input-group">
        <button className="primary bordered medium">Enregistrer</button>
        <span />
        <button type="button" className="bordered medium">
          Annuler
        </button>
      </div>
    </form>
    </div>
  )
}

export default Formulaire