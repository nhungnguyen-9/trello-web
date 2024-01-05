import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext, PointerSensor, MouseSensor, TouchSensor, useSensor, useSensors, DragOverlay, defaultDropAnimationSideEffects, closestCorners } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

import { cloneDeep } from 'lodash'

const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: 'ACTIVE_DRAG__ITEM_TYPE_COLUMN',
    CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({ board }) {
    // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

    const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

    const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 500 } })

    const sensors = useSensors(mouseSensor, touchSensor)

    const [orderedColumns, setOrderedColumns] = useState([])

    // at the same time, only 1 item is dragged (column or card)
    const [activeDragItemId, setActiveDragItemId] = useState(null)
    const [activeDragItemType, setActiveDragItemType] = useState(null)
    const [activeDragItemData, setActiveDragItemData] = useState(null)
    const [oldColumnDraggingCard, setOldColumnDraggingCard] = useState(null)

    useEffect(() => {
        setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
    }, [board])

    const handleDragStart = (event) => {
        // console.log('handleDragStart: ', event)

        setActiveDragItemId(event?.active?.id)
        setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
        setActiveDragItemData(event?.active?.data?.current)

        // if dragging card, set value of oldColumn
        if (event?.active?.data?.current?.columnId) {
            setOldColumnDraggingCard(findColumnsByCardId(event?.active?.id))
        }
    }

    const findColumnsByCardId = (cardId) => {
        return orderedColumns.find(column => column?.cards?.map(card => card._id)?.includes(cardId))
    }

    // trigger when dragging an item
    const handleDragOver = (event) => {
        // console.log('handleDragOver: ', event)

        // don't do anything when dragging column
        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return

        // Card
        const { active, over } = event

        if (!active || !over) return

        // activeDraggingCard la card dang duoc keo
        const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active
        // overCard la card dang tuong tac tren or duoi so voi card duoc keo o tren
        const { id: overCardId } = over

        // find 2 Columns based on cardId
        const activeColumn = findColumnsByCardId(activeDraggingCardId)
        const overColumn = findColumnsByCardId(overCardId)

        if (!activeColumn || !overColumn) return

        if (activeColumn._id !== overColumn._id) {
            setOrderedColumns(prevColumns => {
                // Tim vi tri index cua cai overCard trong column dich (noi activeCard sap duoc tha)
                const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)

                let newCardIndex
                const isBelowOverItem = active.rect.current.translated &&
                    active.rect.current.translated.top > over.rect.top + over.rect.height
                const modifier = isBelowOverItem ? 1 : 0
                newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

                // clone arr OrderedColumnsState cu ra 1 cai moi de xu ly data roi return OrderedColumnsState moi
                const nextColumns = cloneDeep(prevColumns)
                const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
                const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)

                //nextActiveColumn has 2 actions - OLD COLUMN
                if (nextActiveColumn) {
                    // delete card in column active
                    nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDragItemId)
                    // update arr
                    nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)

                }

                // nextOverColumn has 3 actions - NEW COLUMN
                if (nextOverColumn) {
                    // check if card is dragging exits in overColumn, if it exits, delete first
                    nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDragItemId)

                    // add card is dragging in overColumn follows new index
                    nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)

                    // update arr
                    nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
                }
                return nextColumns
            })
        }
    }

    const handleDragEnd = (event) => {
        // console.log('handleDragEnd: ', event)
        const { active, over } = event

        // check if over is null
        if (!over) return

        // XU LY KEO THA CARD
        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
            // activeDraggingCard la card dang duoc keo
            const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active
            // overCard la card dang tuong tac tren or duoi so voi card duoc keo o tren
            const { id: overCardId } = over

            // find 2 Columns based on cardId
            const activeColumn = findColumnsByCardId(activeDraggingCardId)
            const overColumn = findColumnsByCardId(overCardId)

            if (!activeColumn || !overColumn) return

            if (oldColumnDraggingCard._id !== overColumn._id) {
                // 
            } else {
                // take old index from active
                const oldCardIndex = oldColumnDraggingCard?.cards?.findIndex(c => c._id === activeDragItemId)
                // take new index from over
                const newCardIndex = overColumn?.cards?.findIndex(c => c._id === overCardId)

                const dndOrderedCards = arrayMove(oldColumnDraggingCard?.cards, oldCardIndex, newCardIndex)

                setOrderedColumns(prevColumns => {
                    // clone arr OrderedColumnsState cu ra 1 cai moi de xu ly data roi return OrderedColumnsState moi
                    const nextColumns = cloneDeep(prevColumns)

                    // Tim toi column dang tha
                    const targetColumn = nextColumns.find(column => column._id === overColumn._id)

                    // cap nhap lai 2 gia tri moi la cardOrderIds trong targetColumn
                    targetColumn.cards = dndOrderedCards
                    targetColumn.cardOrderIds = dndOrderedCards.map(card => card._id)

                    // tra ve gia tri state moi
                    return nextColumns
                })
            }
        }

        // XU LY KEO THA COLUMN
        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && active.id !== over.id) {
            // take old index from active
            const oldColumnIndex = orderedColumns.findIndex(c => c._id === active.id)
            // take new index from over
            const newColumnIndex = orderedColumns.findIndex(c => c._id === over.id)

            // use arrayMove to arrange original Columns
            const dndOrderedColumns = arrayMove(orderedColumns, oldColumnIndex, newColumnIndex)

            // use to call API
            // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
            // console.log('dndOrderedColumns:', dndOrderedColumns)
            // console.log('dndOrderedColumnsIds:', dndOrderedColumnsIds)

            // update state after dnd
            setOrderedColumns(dndOrderedColumns)
        }
        setActiveDragItemId(null)
        setActiveDragItemType(null)
        setActiveDragItemData(null)
        setOldColumnDraggingCard(null)
    }

    const customDropAnimation = {
        sideEffect: defaultDropAnimationSideEffects({ styles: { active: { opacity: 0.5 } } })
    }

    return (
        <DndContext
            onDragStart={handleDragStart}
            collisionDetection={closestCorners}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
            sensors={sensors}
        >
            <Box sx={{
                backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'hsl(215,90%,32.7%)' : 'hsla(0,0%,100%,0.16)'),
                width: '100%',
                height: (theme) => (theme.trello.boardContentHeight),
                p: '10px 0'
            }}>
                <ListColumns columns={orderedColumns} />
                <DragOverlay dropAnimation={customDropAnimation}>
                    {!activeDragItemType && null}
                    {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData} />}
                    {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData} />}
                </DragOverlay>
            </Box>
        </DndContext>
    )
}

export default BoardContent
