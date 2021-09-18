import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import Block from "./components/Block.js"
const LOCAL_STORAGE_KEY = "timeTracker.num"

function App() {
const [tracker, setTracker] = useState([{num:0,id:0,name:""}
,{num:0,id:1,name:""}
,{num:0,id:2,name:""}
,{num:0,id:3,name:""}
,{num:0,id:4,name:""}
,{num:0,id:5,name:""}])
const [blocks, setBlocks] = useState([3,3,3])
const showButton = useRef()

function toggleBlocks() {
  if(blocks.length === 3){
  setBlocks([1,1,1,1,1,1])
  showButton.current.innerText = "Show less"
  }
  else if(blocks.length === 6) {
    setBlocks([3,3,3])
    showButton.current.innerText = "Show more"
  }
  
}

function reset(e) {
  e.preventDefault();
  const copyTracker = [...tracker]
  copyTracker.map(track => {
    track.num = 0;
    return copyTracker
  })
  setTracker(copyTracker)
 
}

  useEffect(() => {
    const storedNum = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedNum) setTracker(storedNum)
    }, [])
    
        useEffect(() => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tracker))
        }, [tracker])

  return (
    <div className="App">

    <div className="title">Time Tracker</div>
    <div className="container">
    {blocks.map((block,index) => {
   return <Block index={index} key={index}  tracker={tracker} setTracker={setTracker}/>
  })
    }
    </div>
<button ref={showButton} className="show-button" onClick={toggleBlocks}>Show more</button>
<button className="reset-button" onClick={reset}>Reset </button>
    </div>
  );
}

export default App;
