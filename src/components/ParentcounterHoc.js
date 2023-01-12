import { useState } from "react";

const ParentcounterHoc = (ParentFunction)=>{
    function ParentCounterHoc() {

        const [counter,setCounter] = useState(0);

        const handleCounter = ()=>{
          setCounter(counter+1)
        }
      return (
        <ParentFunction handleCounter = {handleCounter} counter = {counter}/>
      )
    }
    
    return ParentCounterHoc
}
export default ParentcounterHoc