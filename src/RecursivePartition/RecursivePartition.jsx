import React, { useEffect, useState } from 'react'
import { getRandomHexColor } from '../utilities/partition_tree_utils'

const RecursivePartition = () => {
    const min_block_height = 100
    const min_block_width = 100

    const initPartition = [
        {
            x_start: 0,
            y_start: 0,
            x_end: 500,
            y_end: 500,
            bg_color: '#26C6DA',

        },
    ]
    const [partitions, setPartitions] = useState(initPartition)
    
    const VarticallySplitPartition = (index, part) => {
        // const parentRectangle = partitions
        const { x_start, x_end, y_start, y_end, bg_color } = part

        if (x_end - x_start < 2 * min_block_width) {
            return
        }
        console.log("to be split", x_start, x_end, y_start, y_end, bg_color)
        let x_mid = x_start + ((x_end - x_start) / 2)
        const FirstPart = {
            x_start: x_start,
            x_end: x_mid,
            y_start,
            y_end,
            bg_color
        }
        const SecondPart = {
            x_start: x_mid,
            x_end: x_end,
            y_start,
            y_end,
            bg_color: getRandomHexColor()
        }
        const updatedPartitions = [...partitions]
        updatedPartitions.splice(index, 1, FirstPart, SecondPart)
        setPartitions(updatedPartitions)
    }
    const HorizontallySplitPartition = (index, part) => {
        // const parentRectangle = partitions
        const { x_start, x_end, y_start, y_end, bg_color } = part


        if (y_end - y_start < 2 * min_block_height) {
            return
        }
        console.log("to be split", x_start, x_end, y_start, y_end, bg_color)
        let y_mid = y_start + ((y_end - y_start) / 2)
        const FirstPart = {
            x_start,
            x_end,
            y_start,
            y_end: y_mid,
            bg_color
        }
        const SecondPart = {
            x_start,
            x_end,
            y_start: y_mid,
            y_end,
            bg_color: getRandomHexColor()
        }
        const updatedPartitions = [...partitions]
        updatedPartitions.splice(index, 1, FirstPart, SecondPart)
        setPartitions(updatedPartitions)
    }
    const RemovePartition = (index) => {
        const updatedPartitions = [...partitions]
        updatedPartitions.splice(index, 1)
        setPartitions(updatedPartitions)
    }


    return (
        <div className="bg-gray-800 flex justify-center items-center min-h-screen">
            <div className="bg-gray-900  flex justify-center gap-10 items-center text-white  ">
                <div className='relative w-[500px] h-[500px]'>
                    {
                        partitions.map((part, index) => {

                            return (
                                <div
                                    style={{ resize: 'horizontal', overflow: 'auto', backgroundColor: `${part.bg_color}`, bottom: `${part.y_start}px`, left: `${part.x_start}px`, maxHeight: `${part.y_end - part.y_start}px`, height: `${part.y_end - part.y_start}px`, maxWidth: `${part.x_end - part.x_start}px`, width: `${part.x_end - part.x_start}px` }}
                                    className={` absolute rounded-sm border border-black `}
                                >
                                    <button onClick={() => { VarticallySplitPartition(index, part) }} className='p-2 m-2 bg-slate-800'>V</button>
                                    <button onClick={() => { HorizontallySplitPartition(index, part) }} className='p-2 m-2 bg-slate-800'>H</button>
                                    <button onClick={() => { RemovePartition(index) }} className='p-2 m-2 bg-slate-800'>-</button>

                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default RecursivePartition