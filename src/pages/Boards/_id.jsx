import Container from '@mui/material/Container'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent/BoardContent'
import AppBar from '~/components/AppBar/AppBar'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI, createNewColumnAPI, createNewCardAPI } from '~/api'

// Board Details
function Board() {
    const [board, setBoard] = useState(null)

    useEffect(() => {
        const boardId = '65c1b3e2f844de21cd0b60ed'
        //Call API
        fetchBoardDetailsAPI(boardId).then(board => {
            setBoard(board)
        })
    }, [])

    // this function use to call API create new column and reset data in State Board
    const createNewColumn = async (newColumnData) => {
        const createdColumn = await createNewColumnAPI({
            ...newColumnData,
            boardId: board._id
        })
        console.log('createdColumn: ', createdColumn)

        //update state board
    }

    const createNewCard = async (newCardData) => {
        const createdCard = await createNewCardAPI({
            ...newCardData,
            boardId: board._id
            // columnId: 
        })
        console.log('createdCard: ', createdCard)

        //update state board
    }

    return (
        <Container maxWidth disableGutters sx={{ backgroundColor: 'primary.main', height: '100vh' }}>
            <AppBar />
            <BoardBar board={board} />
            <BoardContent
                board={board}
                createNewColumn={createNewColumn}
                createNewCard={createNewCard}
            />
        </Container>
    )
}

export default Board
