import React, {useRef} from 'react'
import "./block.css"
export default function Block({tracker, setTracker, index}) {
const nameRef = useRef()

    function addOne(e) {
        e.preventDefault();
      const copyTracker = [...tracker]
      const copy = {...copyTracker[index]}
        copy.num = copy.num + 1
        copyTracker[index] = copy 
        setTracker(copyTracker)

    }
   
    function saveName(e) {
   e.preventDefault();
   const copyTracker = [...tracker]
   const copy = {...copyTracker[index]}
     copy.name = nameRef.current.value
     copyTracker[index] = copy 
     setTracker(copyTracker)

       /*
       Wrong because it saves the number as a new state 
       const currentTracker = tracker.filter(track => track.id === index)
        setTracker(prev => {
            return [...prev, currentTracker[0].name = nameRef.current.value]
        }) */
    }

    function takeOne(e) {
        e.preventDefault();
        const copyTracker = [...tracker]
        const copy = {...copyTracker[index]}
          copy.num = copy.num - 1
          copyTracker[index] = copy 
          setTracker(copyTracker)
    }

    return (
        <div className="outter-block">
        <div className="inner-block">
        <input onKeyUp={saveName} ref={nameRef} placeholder="Work" type="text" defaultValue={tracker[index].name}></input>
        <h1>{tracker[index].num} hrs</h1>
       <div className="buttons">
            <button onClick={addOne}>+</button>
            <button onClick={takeOne}>-</button>
       </div>
        </div>
        </div>
    )
}
