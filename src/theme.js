import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { blue, grey } from '@mui/material/colors'

// Create a theme instance
const theme = extendTheme({
    trello: {
        appBarHeight: '54px',
        boardBarHeight: '58px'
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: blue[500],
                    light: 'hsl(215,90%,32.7%)',
                    contrastText: 'hsla(215,90%,37.7%,0.9)'
                },
                secondary: {
                    main: '#fff'
                }
            }
        },
        dark: {
            palette: {
                primary: {
                    main: blue[500],
                    light: grey[900],
                    contrastText: 'hsl(215,90%,32.7%)'
                },
                secondary: grey
            }
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    '*::-webkit-scrollbar': {
                        width: '6px',
                        height: '6px'
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: '#bdc3c7',
                        borderRadius: '8px'
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#18dcff'
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    color: 'white'
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.secondary.main,
                    fontSize: '0.875rem'
                })
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.secondary.main,
                    fontSize: '0.875rem',
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)'
                    },
                    '&:hover': {
                        '.MuiOutlinedInput-notchedOutline': {
                            backgroundColor: 'rgba(255, 255, 255, 0.4)',
                            borderColor: 'white'
                        }
                    },
                    '& fieldset': {
                        borderWidth: '0.5px !important'
                    }
                })
            }
        }
    }
})

export default theme