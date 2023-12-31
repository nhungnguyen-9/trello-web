import Box from '@mui/material/Box'
import Column from './Column/Column'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'

function ListColumns({ columns }) {
    return (
        <Box sx={{
            bgcolor: 'inherit',
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden',
            width: '100%',
            height: '100%',
            '&::-webkit-scrollbar-track': { m: 2 }
        }}>
            {/* Box Column*/}
            {columns?.map(column => <Column key={column._id} column={column} />)}

            {/* Add new column */}
            <Box sx={{
                backgroundColor: '#ffffff3d',
                height: 'fit-content',
                mx: 2,
                borderRadius: '12px',
                minWidth: '272px',
                maxWidth: '272px',
                '&:hover': {
                    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'hsl(215,90%,32.7%)' : 'hsla(0,0%,100%,0.16)')
                }
            }}>
                <Button
                    startIcon={<AddIcon />}
                    sx={{
                        color: 'white',
                        width: '100%',
                        justifyContent: 'flex-start',
                        pl: 2.5,
                        py: 1.2
                    }}
                >
                    Add another list
                </Button>
            </Box>
        </Box>
    )
}

export default ListColumns
