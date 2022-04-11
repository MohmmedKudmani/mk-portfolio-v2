import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
    // [theme.breakpoints.down('sm')]: {
    //   height: 0,
    //   paddingTop: '100%',
    //   width: '250px',
    // }
  },
  cardContent: {
    textAlign: 'center',
  },
  stacks: {
    display: 'flex',
    justifyContent: 'space-around',
    color: '#494a86',
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '1rem',
    width: '90%',
    margin: '0 auto',
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    marginBottom: '1rem',
  },
  projectsSection: {
    backgroundColor: theme.palette.info.main,
    paddingBottom: '4.7rem',
  },
  icon: {
    color: 'orange',
    cursor: 'pointer',
    transition: 'color 300ms ease-in-out',
    width: 40,
    height: 40,
    '&:hover': {
      color: '#fff',
      transition: 'color 300ms ease-in-out',
    },
  },
  button: {
    backgroundColor: theme.palette.info.main,
    border: '1px #494a86 solid',
    padding: '0.7rem 1.5rem',
    textTransform: 'none',
    color: '#fff',
    fontWeight: 400,
    '&:hover': {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      transition: 'all 300ms ease-in-out',
      backgroundColor: theme.palette.info.main,
    },
  },
  gitHub: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '0.5rem',
    marginBottom: '1rem',
  },
  title2: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    padding: '3rem 0',
    textAlign: 'center',
  },
}))

export default useStyle
