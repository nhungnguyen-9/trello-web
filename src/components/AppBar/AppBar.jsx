import { useState } from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import TrelloIcon from '~/assets/trello.svg?react'
import Typography from '@mui/material/Typography'
import Workspaces from './Menu/Workspaces'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Templates from './Menu/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menu/Profile'
import { InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

function AppBar() {
    const [searchValue, setSearchValue] = useState('')
    return (
        <Box px={2} sx={{
            backgroundColor: 'primary.light',
            width: '100%',
            height: (theme) => theme.trello.appBarHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            overflowX: 'auto',
            '&::-webkit-scrollbar-track': { m: 2 }
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <AppsIcon sx={{ color: 'white' }} />
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                }}>
                    <SvgIcon component={TrelloIcon} fontSize='small' inheritViewBox sx={{ color: 'white' }} />
                    <Typography variant='span' sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '21px',
                        marginTop: '5px'
                    }} >Trello
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                    <Workspaces />
                    <Recent />
                    <Starred />
                    <Templates />
                    <Button variant="outlined" size="small" sx={{ color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.2)', border: 'none' }}>
                        Create
                    </Button>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                color: 'white'
            }}>
                <TextField
                    id="outlined-search"
                    placeholder='Search Trello'
                    type="text"
                    size='small'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <SearchIcon sx={{ color: 'white' }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position='end'>
                                <CloseIcon fontSize='small'
                                    sx={{
                                        color: searchValue ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => setSearchValue('')}
                                />
                            </InputAdornment>
                        )
                    }}
                    sx={{
                        minWidth: '120px',
                        maxWidth: '250px',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '6px',
                        '& input': {
                            color: 'white',
                            '&::placeholder': {
                                color: '#f5f6fa'
                            }
                        },
                        '& label.Mui-focused': { color: 'white' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { border: 'none' },
                            '&:hover fieldset': { backgroundColor: 'rgba(255, 255, 255, 0.4)' },
                            '&.Mui-focused fieldset': { borderColor: 'white' }
                        }
                    }}
                />
                <ModeSelect />
                <Tooltip title='Notifications'>
                    <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
                        <NotificationsNoneIcon sx={{ color: 'secondary.main' }} />
                    </Badge>
                </Tooltip>
                <Tooltip title='Information'>
                    <HelpOutlineIcon sx={{ color: 'secondary.main' }} />
                </Tooltip>
                <Profile />
            </Box>
        </Box >
    )
}

export default AppBar
