import AddIcon from '@mui/icons-material/Add'
import Cloud from '@mui/icons-material/Cloud'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import ListCards from './ListCards/ListCards'

function Column() {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box sx={{
            minWidth: '300px',
            maxWidth: '300px',
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101204' : '#f1f2f4'),
            borderRadius: '10px',
            ml: 2,
            height: 'fit-content',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
        }}>
            {/* Box Column Header */}
            <Box sx={{
                height: (theme) => theme.trello.headerBoardContent,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography variant='h6' sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>
                    Column Title
                </Typography>
                <Box>
                    <MoreHorizIcon
                        id="basic-column-dropdown"
                        aria-controls={open ? 'basic-menu-column' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        fontSize='small'
                        sx={{
                            cursor: 'pointer'
                        }}
                    />
                    <Menu
                        id="basic-menu-column"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-column-dropdown'
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <AddIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Add card</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <ContentCut fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Cut</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <ContentCopy fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Copy</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <ContentPaste fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Paste</ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <DeleteForeverIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Remove this list</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Cloud fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Archive this list</ListItemText>
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>

            {/* List Cards */}
            <ListCards />

            {/* Box Column Footer*/}
            <Box sx={{
                height: (theme) => theme.trello.footerBoardContent,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Button
                    startIcon={<AddIcon />}
                    sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }}
                >
                    Add new card
                </Button>
                <Tooltip title='Drag to move'>
                    <DragHandleIcon sx={{ cursor: 'pointer' }} />
                </Tooltip>
            </Box>
        </Box>
    )
}

export default Column
