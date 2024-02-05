import React, {useState} from 'react';
import './AppXY.css';

export default function AppXY() {
  const [xy, setXY] = useState({x: 0, y:0});
  const pointerMove =((event) => {
    setXY({x:event.pageX, y:event.pageY});
  })
  return (
    <div className='container' onPointerMove={pointerMove}>
      <div className='pointer' style={{left:xy.x-15, top:xy.y-15}} />
    </div>
  );
}
