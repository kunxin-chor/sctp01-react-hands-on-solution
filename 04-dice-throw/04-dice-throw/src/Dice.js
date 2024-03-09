import "./dice.css";
import {useState} from 'react';

export default function Dice() {
    const [number, setNumber] = useState(1);
    return <div className="dice">
        {number}
        <div>
            <button onClick={()=>{
            setNumber(Math.floor(Math.random()*6+1))
        }}>Roll</button>
        </div>
    </div>
}