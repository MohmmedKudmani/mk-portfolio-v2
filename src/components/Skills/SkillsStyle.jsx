import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
  skillsSection: {
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: '11.3em',
  },
  card: {
    background: theme.palette.info.main,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    padding: '3rem 0',
    textAlign: 'center',
  },
}))

export default useStyle
