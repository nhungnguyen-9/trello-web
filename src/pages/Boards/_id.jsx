import Container from '@mui/material/Container'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent/BoardContent'
import AppBar from '~/components/AppBar/AppBar'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI, createNewColumnAPI, createNewCardAPI, updateBoardDetailsAPI } from '~/api'
import { generatePlaceholderCard } from '~/utils/formatter'
import { isEmpty } from 'lodash'

// Board Details
function Board() {
    const [board, setBoard] = useState(null)

    useEffect(() => {
        const boardId = '65c1b3e2f844de21cd0b60ed'
        //Call API
        fetchBoardDetailsAPI(boardId).then(board => {
            board.columns.forEach(column => {
                if (isEmpty(column.cards)) {
                    column.cards = [generatePlaceholderCard(column)]
                    column.cardOrderIds = [generatePlaceholderCard(column)._id]
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
            columnToUpdate.cards.push(createdCard)
            columnToUpdate.cardOrderIds.push(createdCard._id)
        }
        setBoard(newBoard)
    }

    const moveColumns = async (dndOrderedColumns) => {
        const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)

        const newBoard = { ...board }
        newBoard.columns = dndOrderedColumns
        newBoard.columnOrderIds = dndOrderedColumnsIds
        setBoard(newBoard)

        // call API update board
        await updateBoardDetailsAPI(newBoard._id, { columnOrderIds: newBoard.columnOrderIds })
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
            />
        </Container>
    )
}

export default Board
