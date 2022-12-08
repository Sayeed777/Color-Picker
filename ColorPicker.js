
import React, { useState } from 'react'
import {ChromePicker} from 'react-color'

function ColorPicker() {

  const [color,setColor] = useState("#fff")
  const [showColorPicker,setShowColorPicker] = useState(false)
 

  return (
    <div>
      <h1>Color Picker  App in React </h1>
      <button
       onClick={()=>setShowColorPicker(showColorPicker=>!showColorPicker)}>{setShowColorPicker ? 'Close color picker' : 'Pick a color'}</button>
      {
        showColorPicker && <ChromePicker
        color={color}
        onChange={updatedColor=>setColor(updatedColor.hex)}
       
        />
      }
      
      <h2>You Picked {color}</h2>
    </div>
  )
}

export default ColorPicker
