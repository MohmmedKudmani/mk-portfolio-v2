import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyle = makeStyles((theme) => ({
  contactSection: {
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    paddingBottom: '5.5rem',
  },
  contactInfo: {
    borderRadius: '50%',
    border: '1px #fff solid',
    padding: '0.5rem',
    margin: '1.5rem 1.5rem 1.5rem 0',
  },
  contactMe: {
    backgroundColor: theme.palette.info.main,
  },
  contactMeInputs: {
    backgroundColor: theme.palette.secondary.main,
    margin: '1rem 2rem',
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    padding: '3rem 0',
    textAlign: 'center',
  },
  button: {
    color: theme.palette.info.main,
    width: '50%',
    margin: '1rem auto 2rem auto',
    textTransform: 'none',
    fontWeight: 500,
    border: `1px ${theme.palette.primary.main} solid`,
    transition: 'all 300ms ease-in-out',
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: '#DEDEDE',
      border: `1px ${theme.palette.primary.main} solid`,
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
  },
}))

export default useStyle
