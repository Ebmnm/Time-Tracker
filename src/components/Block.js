import React, {useState} from 'react'
import "./block.css"
export default function Block({tracker, setTracker, index}) {

    function addOne() {
        
    }
    
    function takeOne() {

    }

    return (
        <div className="outter-block">
        <div className="inner-block">
        <input placeholder="Work" type="text"></input>
        <h1>{index} hrs</h1>
       <div className="buttons">
            <button>+</button>
            <button>-</button>
       </div>
        </div>
        </div>
    )
}
