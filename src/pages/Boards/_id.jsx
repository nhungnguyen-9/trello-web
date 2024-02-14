import Container from '@mui/material/Container'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent/BoardContent'
import AppBar from '~/components/AppBar/AppBar'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI, createNewColumnAPI, createNewCardAPI, updateBoardDetailsAPI, updateColumnDetailsAPI, moveCardToDifferentColumnAPI } from '~/api'
import { generatePlaceholderCard } from '~/utils/formatter'
import { isEmpty } from 'lodash'
import { mapOrder } from '~/utils/sorts'
import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

// Board Details
function Board() {
    const [board, setBoard] = useState(null)

    useEffect(() => {
        const boardId = '65c1b3e2f844de21cd0b60ed'
        //Call API
        fetchBoardDetailsAPI(boardId).then(board => {
            // arrange order of column before send to children components
            board.columns = mapOrder(board.columns, board.columnOrderIds, '_id')

            board.columns.forEach(column => {
                if (isEmpty(column.cards)) {
                    column.cards = [generatePlaceholderCard(column)]
                    column.cardOrderIds = [generatePlaceholderCard(column)._id]
                } else {
                    // arrange order of card before send to children components
                    column.cards = mapOrder(column.cards, column.cardOrderIds, '_id')
                }
            })
            setBoard(board)
        })
    }, [])

    // this function use to call API create new column and reset data in State Board
    const createNewColumn = async (newColumnData) => {
        const createdColumn = await createNewColumnAPI({
            ...newColumnData,
            boardId: board._id
        })

        // column empty
        createdColumn.cards = [generatePlaceholderCard(createdColumn)]
        createdColumn.cardOrderIds = [generatePlaceholderCard(createdColumn)._id]

        //update state board
        const newBoard = { ...board }
        newBoard.columns.push(createdColumn)
        newBoard.columnOrderIds.push(createdColumn._id)
        setBoard(newBoard)
    }

    const createNewCard = async (newCardData) => {
        const createdCard = await createNewCardAPI({
            ...newCardData,
            boardId: board._id
        })

        //update state board
        const newBoard = { ...board }
        const columnToUpdate = newBoard.columns.find(column => column._id === createdCard.columnId)
        if (columnToUpdate) {
            if (columnToUpdate.cards.some(card => card.FE_PlaceholderCard)) {
                columnToUpdate.cards = [createdCard]
                columnToUpdate.cardOrderIds = [createdCard._id]
            } else {
                columnToUpdate.cards.push(createdCard)
                columnToUpdate.cardOrderIds.push(createdCard._id)
            }
        }
        setBoard(newBoard)
    }

    const moveColumns = (dndOrderedColumns) => {
        const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)

        const newBoard = { ...board }
        newBoard.columns = dndOrderedColumns
        newBoard.columnOrderIds = dndOrderedColumnsIds
        setBoard(newBoard)

        // call API update board
        updateBoardDetailsAPI(newBoard._id, { columnOrderIds: newBoard.columnOrderIds })
    }

    const moveCardInTheSameColumn = (dndOrderedCards, dndOrderedCardIds, columnId) => {
        // update data state board
        const newBoard = { ...board }
        const columnToUpdate = newBoard.columns.find(column => column._id === columnId)
        if (columnToUpdate) {
            columnToUpdate.cards = dndOrderedCards
            columnToUpdate.cardOrderIds = dndOrderedCardIds
        }
        setBoard(newBoard)

        // call API update Column
        updateColumnDetailsAPI(columnId, { cardOrderIds: dndOrderedCardIds })
    }

    // B1: update cardOrderIds of the previous Column 
    // B2: update array cardOrderIds in the next Column
    // B3: update field of the new columnId of card had dragged
    const moveCardToDifferentColumn = (currentCardId, prevColumnId, nextColumnId, dndOrderedColumns) => {
        const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)

        const newBoard = { ...board }
        newBoard.columns = dndOrderedColumns
        newBoard.columnOrderIds = dndOrderedColumnsIds
        setBoard(newBoard)

        // call API
        let prevCardOrderIds = dndOrderedColumns.find(c => c._id === prevColumnId)?.cardOrderIds
        if (prevCardOrderIds[0].includes('placeholder-card')) {
            prevCardOrderIds = []
        }

        moveCardToDifferentColumnAPI({
            currentCardId,
            prevColumnId,
            prevCardOrderIds,
            nextColumnId,
            nextCardOrderIds: dndOrderedColumns.find(c => c._id === nextColumnId)?.cardOrderIds
        })

    }

    if (!board) {
        return (
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                width: '100vw',
                height: '100vh'
            }}>
                <CircularProgress />
                <Box>Loading Board...</Box>
            </Box>
        )
    }

    return (
        <Container maxWidth disableGutters sx={{ backgroundColor: 'primary.main', height: '100vh' }}>
            <AppBar />
            <BoardBar board={board} />
            <BoardContent
                board={board}
                createNewColumn={createNewColumn}
                createNewCard={createNewCard}
                moveColumns={moveColumns}
                moveCardInTheSameColumn={moveCardInTheSameColumn}
                moveCardToDifferentColumn={moveCardToDifferentColumn}
            />
        </Container>
    )
}

export default Board
