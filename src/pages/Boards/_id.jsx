import Container from '@mui/material/Container'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent/BoardContent'
import AppBar from '~/components/AppBar/AppBar'
import { mockData } from '~/api/mock-data'

// Board Details
function Board() {
    return (
        <Container maxWidth disableGutters sx={{ backgroundColor: 'primary.main', height: '100vh' }}>
            <AppBar />
            <BoardBar board={mockData?.board} />
            <BoardContent board={mockData?.board} />
        </Container>
    )
}

export default Board
