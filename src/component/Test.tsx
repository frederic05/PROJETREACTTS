import React,{useState, useEffect} from 'react';


const getTime =(date: Date, minutes: number)=>{
    return new Date(date.getTime() + minutes * 60000)
}

const Test = () => {

    const [stime, setStime] = useState<Date>(new Date())
    

    const handLerTime = ()=>{

        setStime(getTime(stime, 10))

    }

    const halerCLik = (data:any)=>{
        console.log('Un useEffect vien dêtre lancer', data);
    }

    useEffect(()=>{

        const controller = new AbortController();
        const signal = controller.signal;

        let isChecd = true

        if(isChecd)  halerCLik(signal)

        return () => {
            isChecd = false
            controller.abort()
        }



    },[stime])




  return (
    <div>
        <p>il est {stime.toLocaleTimeString()}</p>
        <button type="button" className="bordered medium" onClick={handLerTime}>
          + 10 minutes 
        </button>
    </div>
  )
}

export default Test