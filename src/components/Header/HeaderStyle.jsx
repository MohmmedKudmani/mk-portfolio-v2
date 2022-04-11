import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.info.main,
  },
  headerContent: {
    paddingTop: '3.25rem ',
    paddingBottom: '7.25rem',
  },
  myName: {
    fontSize: '5rem',
    fontWeight: 500,
    margin: '0.5rem 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  },
  button: {
    marginTop: '2rem',
    padding: '1.2rem 4rem',
    borderRadius: '2rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 200ms linear',
    display: 'inline-block',
    backgroundColor: '#e5e5e5',
    color: theme.palette.info.main,
    fontWeight: 500,
    fontFamily: "'Poppins', sans-serif",

    [theme.breakpoints.down('sm')]: {
      marginBottom: '5rem',
    },
    '&:hover': {
      transform: 'scale(1.02)',
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
  },
  hello: {
    color: '#e5e5e5',
    [theme.breakpoints.down('sm')]: {
      marginTop: '3rem',
    },
  },
  backGround: {
    width: '600px',
    [theme.breakpoints.down('md')]: {
      width: '450px',
      margin: '5rem 0',
    },
  },
  socialIcons: {
    marginRight: '1.5rem',
    border: '1px solid #44456d',
    padding: '0.5rem',
    borderRadius: '50%',
    color: theme.palette.primary.main,
    transition: 'all 300ms ease-in-out',
    '&:hover': {
      borderColor: theme.palette.primary.main,
      color: '#e5e5e5',
    },
  },
}))

export default useStyle
