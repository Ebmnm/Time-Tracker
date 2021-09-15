import React, {useState, useRef} from 'react';
import './App.css';
import Block from "./components/Block.js"
function App() {
const [tracker, setTracker] = useState([{num:0,id:1},{num:0,id:2},{num:0,id:3},{num:0,id:4},{num:0,id:5},{num:0,id:6}])
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
 /*  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setgoals(storedTodos)
    }, [])
    
        useEffect(() => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals))
        }, [goals]) */

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
    </div>
  );
}

export default App;
