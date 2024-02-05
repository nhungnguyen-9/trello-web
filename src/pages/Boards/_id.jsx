import Container from '@mui/material/Container'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent/BoardContent'
import AppBar from '~/components/AppBar/AppBar'
import { mockData } from '~/api/mock-data'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI } from '~/api'

// Board Details
function Board() {
    const [board, setBoard] = useState(null)

    useEffect(() => {
        const boardId = '65bc75c6aca06cc87bdb9d1e'
        //Call API
        fetchBoardDetailsAPI(boardId).then(board => {
            setBoard(board)
        })
    }, [])

    return (
        <Container maxWidth disableGutters sx={{ backgroundColor: 'primary.main', height: '100vh' }}>
            <AppBar />
            <BoardBar board={board} />
            <BoardContent board={board} />
        </Container>
    )
}

export default Board
