import React, {useEffect, useState} from 'react'

const UseEffectClear = () => {

    const [time, setTime]= useState(new Date().toLocaleTimeString())
    
    useEffect(()=>{

        const timerID = setInterval(refresh, 1000);

        return ()=>{
            clearInterval(timerID);
        }
    },[]);

    const refresh = () => {
        setTime(new Date().toLocaleTimeString());
      };

  return (
    <div>{time}</div>
  )
}

export default UseEffectClear