import React, { useState } from 'react';

function PointerCoordinates() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCoordinates({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: '400px', width: '400px', border: '1px solid black' }}>
      <p>Mouse X: {coordinates.x}</p>
      <p>Mouse Y: {coordinates.y}</p>
      aaa
    </div>
  );
}

export default PointerCoordinates;