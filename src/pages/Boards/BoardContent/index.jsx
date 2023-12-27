import Box from '@mui/material/Box'
import { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import AttachmentIcon from '@mui/icons-material/Attachment'

const HEADER_BOARD_CONTENT = '50px'
const FOOTER_BOARD_CONTENT = '56px'

function BoardContent() {
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
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'hsl(215,90%,32.7%)' : 'hsla(0,0%,100%,0.16)'),
            width: '100%',
            height: (theme) => (theme.trello.boardContentHeight),
            p: '10px 0'
        }}>
            <Box sx={{
                bgcolor: 'inherit',
                display: 'flex',
                overflowX: 'auto',
                overflowY: 'hidden',
                width: '100%',
                height: '100%',
                '&::-webkit-scrollbar-track': { m: 2 }
            }}>
                {/* Box Column 1*/}
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
                        height: HEADER_BOARD_CONTENT,
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

                    {/* Box List Card */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5,
                        p: '0 5px',
                        m: '0 5px',
                        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${HEADER_BOARD_CONTENT} - ${FOOTER_BOARD_CONTENT})`,
                        overflowX: 'hidden',
                        overflowY: 'auto',
                        '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
                        '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }
                    }}>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0px 1px 1px #091E4240',
                            overflow: 'unset'
                        }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="green iguana"
                            />
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>renderable action</Typography>
                            </CardContent>
                            <CardActions sx={{ p: '0 4px 8px 4px' }}>
                                <Button size="small" startIcon={<PeopleAltIcon />}>20</Button>
                                <Button size="small" startIcon={<InsertCommentIcon />}>10</Button>
                                <Button size="small" startIcon={<AttachmentIcon />}>5</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0px 1px 1px #091E4240',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Card 01</Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0px 1px 1px #091E4240',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Card 01</Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0px 1px 1px #091E4240',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Card 01</Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0px 1px 1px #091E4240',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Card 01</Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0px 1px 1px #091E4240',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Card 01</Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0px 1px 1px #091E4240',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Card 01</Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Box Column Footer*/}
                    <Box sx={{
                        height: FOOTER_BOARD_CONTENT,
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

                {/* Box Column 2*/}
                <Box sx={{
                    minWidth: '300px',
                    maxWidth: '300px',
                    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101204' : '#f1f2f4'),
                    borderRadius: '10px',
                    ml: 2,
                    mt: 2,
                    height: 'fit-content',
                    maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
                }}>
                    {/* Box Column Header */}
                    <Box sx={{
                        height: HEADER_BOARD_CONTENT,
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

                    {/* Box List Card */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5,
                        p: '0 5px',
                        m: '0 5px',
                        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${HEADER_BOARD_CONTENT} - ${FOOTER_BOARD_CONTENT})`,
                        overflowX: 'hidden',
                        overflowY: 'auto',
                        '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
                        '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }
                    }}>
                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0px 1px 1px #091E4240',
                            overflow: 'unset'
                        }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="green iguana"
                            />
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>renderable action</Typography>
                            </CardContent>
                            <CardActions sx={{ p: '0 4px 8px 4px' }}>
                                <Button size="small" startIcon={<PeopleAltIcon />}>20</Button>
                                <Button size="small" startIcon={<InsertCommentIcon />}>10</Button>
                                <Button size="small" startIcon={<AttachmentIcon />}>5</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{
                            cursor: 'pointer',
                            boxShadow: '0px 1px 1px #091E4240',
                            overflow: 'unset'
                        }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Card 01</Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Box Column Footer*/}
                    <Box sx={{
                        height: FOOTER_BOARD_CONTENT,
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
            </Box>
        </Box>
    )
}

export default BoardContent
