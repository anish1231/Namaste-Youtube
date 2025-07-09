import React, { useState } from 'react'
import Button from './Button'

const ButtonList = () => {
  const [selected, setSelected] = useState(0)
  const Buttons = [
        "All", "Music", "Mixes", "Podcast", "News", "Apple", "News", "News",
        "All", "Music", "Mixes", "Podcast", "News", "Apple", "News", "News",
        "All", "Music", "Mixes", "Podcast", "News", "Apple", "News", "News"
      ]
  return (
    <div className='flex overflow-x-auto scrollbar-hide'>
      {Buttons.map((button, index) => 
        <Button key={index} name={button} isSelected={selected===index} onClick={() =>setSelected(index)}/>
      )}
    </div>
  )
}

export default ButtonList
