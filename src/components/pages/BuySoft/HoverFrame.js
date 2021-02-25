import React from 'react'

export default function HoverFrame({ column, width, height }) {
  
  let right = 20 + width / 6 * (5 - column)
  
  return (
    <div className='hover_frame'
      style={{ right: right, width: width / 6, height: height, display: column === -1 || column === 0 ? 'none' : 'block' }}
    >
    </div>
  )
}
