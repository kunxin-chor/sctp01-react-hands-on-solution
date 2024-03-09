import React, {useState} from 'react'

function ColoredBoxEx() {

    const [color, setColor] = useState(1);

    const getColor = () => {
        if (color === 1) {
            return 'red';
        }
        if (color === 2) {
            return 'blue';
        }
        if (color === 3) {
            return 'green';
        }
    }
    
    const handleButtonClick = (e) => {
        setColor(parseInt(e.target.value));

    }
    return <React.Fragment>
        <div style={{
            border:'1px black solid',
            width:'50px',
            height:'50px',
            backgroundColor: getColor()
        }}>
        </div>

        <button value="1" onClick={handleButtonClick}>Red</button>
        <button value="3" onClick={handleButtonClick}>Green</button>
        <button value="2" onClick={handleButtonClick}>Blue</button>
    </React.Fragment>
  
}

export default ColoredBoxEx;