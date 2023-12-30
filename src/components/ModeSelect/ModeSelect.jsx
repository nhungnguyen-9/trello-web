import { useColorScheme } from '@mui/material/styles'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'

import Box from '@mui/material/Box'

function ModeSelect() {
    const { mode, setMode } = useColorScheme()
    const handleChange = (event) => {
        const selectedMode = event.target.value
        setMode(selectedMode)
    }

    return (
        <FormControl size="small" sx={{ minWidth: '120px' }}>
            <InputLabel
                id="select-system"
                sx={{
                    color: 'white',
                    '&:hover': { color: 'white' },
                    '&.Mui-focused': { color: 'white' }
                }}
            >Mode
            </InputLabel>
            <Select
                labelId="select-system"
                id="demo-select"
                value={mode}
                label="Mode"
                onChange={handleChange}
                sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { backgroundColor: 'rgba(255, 255, 255, 0.4)' },
                    '.MuiSvgIcon-root': { color: 'white' }
                }}
            >

                <MenuItem value='light'>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LightModeIcon /> Light
                    </Box>
                </MenuItem>
                <MenuItem value='dark'>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <DarkModeIcon /> Dark
                    </Box>
                </MenuItem>
                <MenuItem value='system'>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SettingsSuggestIcon /> System
                    </Box>
                </MenuItem>
            </Select>
        </FormControl >
    )
}

export default ModeSelect
