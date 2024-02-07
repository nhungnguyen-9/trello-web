import { useState } from 'react'
import Box from '@mui/material/Box'
import Column from './Column/Column'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'

function ListColumns({ columns }) {
    const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
    const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)
    const [newColumnTitle, setNewColumnTitle] = useState('')

    const addNewColumn = () => {
        if (!newColumnTitle) {
            console.error('Please enter Column Title!')
            return
        }
        // Call API...
        // console.log(newColumnTitle)

        // close state add new column & clear input
        toggleOpenNewColumnForm()
        setNewColumnTitle('')
    }
    return (
        <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
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
                {!openNewColumnForm
                    ? <Box onClick={toggleOpenNewColumnForm} sx={{
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
                    : <Box sx={{
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
                        <TextField
                            placeholder='Enter column title'
                            type="text"
                            size='small'
                            variant='outlined'
                            autoFocus
                            value={newColumnTitle}
                            onChange={(e) => setNewColumnTitle(e.target.value)}
                            sx={{
                                minWidth: '270px',
                                maxWidth: '270px',
                                borderRadius: '12px 12px 0 0',
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                '& input': {
                                    color: 'white',
                                    '&::placeholder': {
                                        color: '#f5f6fa'
                                    }
                                },
                                '& label.Mui-focused': { color: 'white' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { border: 'none' },
                                    '&:hover fieldset': { backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '12px 12px 0 0' },
                                    '&.Mui-focused fieldset': { borderColor: 'white' }
                                }
                            }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', margin: '5px', justifyContent: 'space-between' }}>
                            <Button
                                onClick={addNewColumn}
                                variant='contained'
                                color='success'
                                size='small'
                                sx={{
                                    boxShadow: 'none',
                                    border: '0.5px solid',
                                    borderColor: (theme) => theme.palette.success.main,
                                    '&:hover': { bgcolor: (theme) => theme.palette.success.main }
                                }}
                            >
                                Add Column
                            </Button>
                            <CloseIcon fontSize='small'
                                sx={{
                                    color: 'white',
                                    cursor: 'pointer',
                                    '&:hover': { color: (theme) => theme.palette.error.light }
                                }}
                                onClick={toggleOpenNewColumnForm}
                            />
                        </Box>
                    </Box>
                }
            </Box>
        </SortableContext >
    )
}

export default ListColumns
