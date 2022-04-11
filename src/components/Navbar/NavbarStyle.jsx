import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
  social: {
    marginLeft: 'auto',
    display: 'flex',
  },
  listItem: {
    color: theme.palette.primary.main,
    marginRight: '35.2px',
    ...theme.typography.tab,
    cursor: 'pointer',
    listStyle: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    transition: 'all 300ms ease-in-out',
    '&:hover': {
      color: '#e5e5e5'
    }
  },
  listItem2: {
    color: theme.palette.primary.main,
    ...theme.typography.tab,
    listStyle: 'none',
    cursor: 'pointer',
    transition: 'all 300ms ease-in-out',
    '&:hover': {
      color: '#e5e5e5'
    },
    marginTop: "1.3rem",
    marginBottom: '1.3rem'
  },
  menu: {
    color: theme.palette.primary.main,
    marginLeft: 'auto',
  },
  hamburgerMenu: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    inset: '0',
  },
  hamburgerMenuLinks: {
    border: `2px #44456d solid`,
    backgroundColor: theme.palette.secondary.main,
    width: '90%',
    position: 'relative',
    top: '6.7rem',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  active: {
    color: '#e5e5e5'
  }
}))

export default useStyle
