import { SketchPicker } from 'react-color';
import React, { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#fff');

  const handleChange = (color) => {
    setColor(color.hex);
    document.body.style.backgroundColor = color.hex;
  };



  return (
    <div className="color-picker">
      <SketchPicker color={color} onChange={handleChange} />
      <div className="color-preview" style={{ backgroundColor: color }} />
    </div>
  );
};

export default ColorPicker;