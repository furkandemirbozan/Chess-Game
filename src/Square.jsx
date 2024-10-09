import React from 'react'
import { useDrop } from 'react-dnd'
import { move } from './Game'

function Square({ children, colorValue, positionCntrl }) {
    console.log(positionCntrl, "positionCntrl")
    const [, drop] = useDrop({
        accept: 'chess',
        drop: (item) => {
            const [fromPosition] = item.id.split('_')
            move(fromPosition, positionCntrl)
        }
    })
    return (
        <div ref={drop} className={`${colorValue ? 'bg-green-800' : 'bg-green-200'} w-[80px] h-[80px] flex justify-center items-center cursor-grab`} > {children}</div >
    )
}

export default Square