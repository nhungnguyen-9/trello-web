import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext, PointerSensor, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {
    // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

    const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

    const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 500 } })

    const sensors = useSensors(mouseSensor, touchSensor)

    const [orderedColumns, setOrderedColumns] = useState([])

    useEffect(() => {
        setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
    }, [board])

    const handleDragEnd = (event) => {
        console.log(event)
        const { active, over } = event

        // check if over is null
        if (!over) return

        if (active.id !== over.id) {
            // take old index from active
            const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
            // take new index from over
            const newIndex = orderedColumns.findIndex(c => c._id === over.id)

            // use arrayMove to arrange original Columns
            const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)

            // use to call API
            // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
            // console.log('dndOrderedColumns:', dndOrderedColumns)
            // console.log('dndOrderedColumnsIds:', dndOrderedColumnsIds)

            // update state after dnd
            setOrderedColumns(dndOrderedColumns)
        }
    }

    return (
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
            <Box sx={{
                backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'hsl(215,90%,32.7%)' : 'hsla(0,0%,100%,0.16)'),
                width: '100%',
                height: (theme) => (theme.trello.boardContentHeight),
                p: '10px 0'
            }}>
                <ListColumns columns={orderedColumns} />
            </Box>
        </DndContext>
    )
}

export default BoardContent
