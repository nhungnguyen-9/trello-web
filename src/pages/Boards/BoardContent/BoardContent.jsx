import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'

function BoardContent() {
    return (
        <Box sx={{
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'hsl(215,90%,32.7%)' : 'hsla(0,0%,100%,0.16)'),
            width: '100%',
            height: (theme) => (theme.trello.boardContentHeight),
            p: '10px 0'
        }}>
            <ListColumns />
        </Box>
    )
}

export default BoardContent
