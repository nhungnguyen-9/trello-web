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
        const boardId = '65c1b3e2f844de21cd0b60ed'
        //Call API
        fetchBoardDetailsAPI(boardId).then(board => {
            setBoard(board)
        })
    }, [])

    return (
        <Container maxWidth disableGutters sx={{ backgroundColor: 'primary.main', height: '100vh' }}>
            <AppBar />
            <BoardBar board={mockData.board} />
            <BoardContent board={mockData.board} />
        </Container>
    )
}

export default Board
