'use client';

import Draggable from "react-draggable"

function DraggableEl({...rest}: any) {
  return (
    <Draggable {...rest}/>
  )
}

export default DraggableEl