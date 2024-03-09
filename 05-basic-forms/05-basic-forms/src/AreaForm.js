import React, { useState } from 'react'

export default function AreaForm() {

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const updateWidth = (event) => {
    setWidth(event.target.value);
  }

  const updateHeight = (event) => {
    setHeight(event.target.value)
  }

  let area = 0;
  if (width > 0 && height > 0) {
    area = width * height;
  }

  return (
    <React.Fragment>
      <div>
        <label>Width:</label>
        <input type="text" value={width} onChange={updateWidth} />
      </div>
      <div>
        <label>Height:</label>
        <input type="text" value={height} onChange={updateHeight} />
      </div>
      <div>Area = {area}</div>
    </React.Fragment>
  )



}

