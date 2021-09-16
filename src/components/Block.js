import React, {useRef} from 'react'
import "./block.css"
export default function Block({tracker, setTracker, index}) {
const nameRef = useRef()

    function addOne(e) {
        e.preventDefault();
        const currentTracker = tracker.filter(track => track.id === index)
        console.log(currentTracker[0])
        setTracker(prev => {                    
            return [...prev, currentTracker[0].num +=1]
        })
        
     
    }
    
    function saveName(e) {
   e.preventDefault();
        const currentTracker = tracker.filter(track => track.id === index)
        setTracker(prev => {
            return [...prev, currentTracker[0].name = nameRef.current.value]
        })
    }

    function takeOne(e) {
        e.preventDefault();
        const currentTracker = tracker.filter(track => track.id === index)
        setTracker(prev => {
            return [...prev, currentTracker[0].num -=1]
        })
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
