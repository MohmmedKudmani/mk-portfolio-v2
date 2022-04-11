import { createTheme } from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const orange = '#fca311'
const blue = '#232534'
const lightBlue = '#323345'

const Breakpoints = {
  xs: 0,
  sm: 700,
  md: 1100,
  lg: 1440,
  xl: 1920,
}

const breakpointsFull = createBreakpoints({
  values: { ...Breakpoints },
  keys: Object.keys(Breakpoints),
})

const Theme = createTheme({
  palette: {
    primary: {
      main: orange,
    },
    secondary: {
      main: lightBlue,
    },
    info: {
      main: blue,
    },
    type: 'dark',
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    tab: {
      fontWeight: 500,
      fontSize: '1.1rem',
      textTransform: 'none',
      fontFamily: "'Poppins', sans-serif",
    },
  },
  breakpoints: breakpointsFull,
})

export default Theme
