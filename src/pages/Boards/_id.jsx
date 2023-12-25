import Container from '@mui/material/Container'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'
import AppBar from '~/components/AppBar'

// Board Details
function Board() {
    return (
        <Container maxWidth disableGutters sx={{ backgroundColor: 'primary.main', height: '100vh' }}>
            <AppBar />
            <BoardBar />
            <BoardContent />
        </Container>
    )
}

export default Board
