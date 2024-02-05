import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import FilterListIcon from '@mui/icons-material/FilterList'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import PeopleIcon from '@mui/icons-material/People'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import { capitializeFirstLetter } from '~/utils/formatter'

const MENU_STYLES = {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': {
        color: 'secondary.main'
    },
    '&:hover': {
        bgcolor: '#A6C5E229'
    }
}

function BoardBar({ board }) {
    return (
        <Box sx={{
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#172B4D' : '#0000003d'),
            backdropFilter: 'blur(4px)',
            width: '100%',
            height: (theme) => theme.trello.boardBarHeight,
            display: 'flex',
            alignItems: 'center',
            paddingX: '6px',
            justifyContent: 'space-between',
            gap: 4,
            overflowX: 'auto',
            '&::-webkit-scrollbar-track': { m: 2 }
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <Chip
                    label={board?.title}
                    sx={MENU_STYLES}
                    clickable
                    icon={<RocketLaunchIcon sx={{ color: 'white !important' }} />}
                />
                <StarBorderIcon sx={{ color: 'white', fontSize: '20px' }} />
                <Tooltip
                    title={capitializeFirstLetter(board?.type)}
                >
                    <PeopleIcon sx={{ color: 'white', fontSize: '20px' }} />
                </Tooltip>
                <Button variant="contained" startIcon={<EqualizerIcon sx={{ rotate: '180deg' }} />} sx={{ backgroundColor: '#DFE1E6', color: '#57606f', '&:hover': { backgroundColor: 'white' } }}>Board</Button>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                paddingRight: '8px'
            }}>
                <Tooltip title='Google Drive'>
                    <AddToDriveIcon sx={{ color: 'white', fontSize: '20px' }} />
                </Tooltip>
                <Tooltip title='Automation'>
                    <FlashOnIcon sx={{ color: 'white', fontSize: '20px' }} />
                </Tooltip>
                <Tooltip title='Filter cards'>
                    <Button sx={{ color: 'white' }} startIcon={<FilterListIcon sx={{ fontSize: '20px' }} />}>Filters</Button>
                </Tooltip>
                <AvatarGroup
                    max={4}
                    sx={{
                        gap: '10px',
                        '& .MuiAvatar-root': {
                            width: '28px',
                            height: '28px',
                            border: 'none',
                            fontSize: '13px',
                            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'grey[100]'),
                            cursor: 'pointer'
                        }
                    }}
                >
                    <Tooltip title='Nhung Nguyen'>
                        <Avatar src="https://images.unsplash.com/photo-1703372617876-8da901dbd546?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </Tooltip>
                    <Tooltip title='Jasmine'>
                        <Avatar src="https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </Tooltip>
                    <Tooltip title='Evelyn'>
                        <Avatar src="https://images.unsplash.com/photo-1662859694710-8567f0aa54be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </Tooltip>
                    <Tooltip title='Steve'>
                        <Avatar src="https://images.unsplash.com/photo-1696457175552-6f334ba7268e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </Tooltip>
                    <Tooltip title='Lee'>
                        <Avatar src="https://images.unsplash.com/photo-1703508872237-1a6a285d592c?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </Tooltip>
                </AvatarGroup>
                <Button variant="outlined" startIcon={<PersonAddIcon />} sx={{ backgroundColor: '#DFE1E6', color: '#57606f', '&:hover': { backgroundColor: 'white' } }}>Invite</Button>
            </Box>
        </Box>
    )
}

export default BoardBar


