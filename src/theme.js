import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { blue, grey } from '@mui/material/colors'

const APP_BAR_HEIGHT = '54px'
const BOARD_BAR_HEIGHT = '58px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const HEADER_BOARD_CONTENT = '50px'
const FOOTER_BOARD_CONTENT = '56px'

// Create a theme instance
const theme = extendTheme({
    trello: {
        appBarHeight: APP_BAR_HEIGHT,
        boardBarHeight: BOARD_BAR_HEIGHT,
        boardContentHeight: BOARD_CONTENT_HEIGHT,
        headerBoardContent: HEADER_BOARD_CONTENT,
        footerBoardContent: FOOTER_BOARD_CONTENT
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
                        backgroundColor: '#dcdde1',
                        borderRadius: '8px'
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: 'white'
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
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
        MuiTypography: {
            styleOverrides: {
                root: {
                    '&.MuiTypography-body1': {
                        fontSize: '0.875rem'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    '& fieldset': {
                        borderWidth: '0.5px !important'
                    },
                    '&:hover fieldset': {
                        borderWidth: '1px !important'
                    },
                    '&.Mui-focused fieldset': {
                        borderWidth: '1px !important'
                    }
                }
            }
        }
    }
})

export default theme