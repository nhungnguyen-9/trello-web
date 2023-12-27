import Box from '@mui/material/Box'

function BoardContent() {
    return (
        <Box sx={{
            // backgroundColor: 'primary.main',
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'hsl(215,90%,32.7%)' : 'hsla(0,0%,100%,0.16)'),
            width: '100%',
            height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
            display: 'flex',
            alignItems: 'center'
        }}>
            Board Content
        </Box>
    )
}

export default BoardContent
