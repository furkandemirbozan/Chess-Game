import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'


function SquareBoard({ brd, positionCntrl }) {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: "chess",
        item: { id: `${positionCntrl}_${brd.type}_${brd.color}` },
        collect: (monitor) => {
            return { isDragging: !!monitor.isDragging() }
        }

    }))
    const pieceImage = require(`../public/assets/images/${brd.type}_${brd.color}.png`)
    console.log("brddd", brd)
    return (
        <div ref={drag}>
            <DragPreviewImage src={pieceImage} connect={preview} />
            <img className='w-[65px]' src={pieceImage} alt="" />
        </div>
    )
}

export default SquareBoard