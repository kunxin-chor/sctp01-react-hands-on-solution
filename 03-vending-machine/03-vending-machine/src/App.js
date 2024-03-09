import {useState} from 'react';

export default function App () {
  
  const [displayMessage, setDisplayMessage] = useState("");

  return (
      <>
        <h1>Drink Vending Machine</h1>
        <div className="display">
          {displayMessage}
        </div>
        <button onClick={()=>{
          setDisplayMessage("Dispensing Coffee");
        }}>Coffee</button>
        <button onClick={()=>{
          setDisplayMessage("Dispensing Tea");
        }}>Tea</button>
        <button onClick={()=>{
          setDisplayMessage("Dispensing Orange Juice");
        }}>Orange Juice</button>
      </>
    );
  
}


