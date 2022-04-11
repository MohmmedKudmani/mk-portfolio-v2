import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import E_Commerce from '../../img/e-commerce.png'
import AuthForm from '../../img/AuthForm.png'
import Movies from '../../img/Movies.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

import useStyle from './ProjectsStyle'

function Projects() {
  const style = useStyle()
  const theme = useTheme()
  const matchMd = useMediaQuery(theme.breakpoints.down('sm'))
  const matchXs = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <section id='projects' className={style.projectsSection}>
      <Container style={{ width: '95%' }} maxWidth='lg'>
        <Typography className={style.title2} variant='h2'>
          Projects
        </Typography>
        <Grid
          spacing={matchXs ? 5 : 10}
          direction={matchMd ? 'column' : 'row'}
          alignItems='center'
          container
        >
          <Grid style={{ width: matchXs ? '95%' : '60%' }} md={4} item>
            <Card className={style.card}>
              <CardMedia
                target='_blank'
                rel='noreferrer noopener'
                href='https://mk-commerce-app.netlify.app/'
                component={'a'}
                className={style.media}
                image={E_Commerce}
              />
              <CardContent className={style.cardContent}>
                <Typography className={style.title} variant='h6'>
                  Commerce App
                </Typography>
                <Typography variant='subtitle1'>Stack</Typography>
                <div className={style.stacks}>
                  <Typography variant='subtitle1'>React</Typography>
                  <Typography variant='subtitle1'>Material-Ui</Typography>
                </div>
              </CardContent>
              <CardActions className={style.gitHub}>
                <Button
                  disableRipple
                  variant='contained'
                  className={style.button}
                  endIcon={<ArrowForwardIcon />}
                  target='_blank'
                  rel='noreferrer noopener'
                  href='https://mk-commerce-app.netlify.app/'
                  component={'a'}
                >
                  View Project
                </Button>
                <GitHubLogoIcon className={style.icon} />
              </CardActions>
            </Card>
          </Grid>
          <Grid style={{ width: matchXs ? '95%' : '60%' }} md={4} item>
            <Card className={style.card}>
              <CardMedia
                target='_blank'
                rel='noreferrer noopener'
                href='https://mk-authapi-form.netlify.app/auth'
                component={'a'}
                className={style.media}
                image={AuthForm}
              />
              <CardContent className={style.cardContent}>
                <Typography className={style.title} variant='h6'>
                  AuthForm App
                </Typography>
                <Typography variant='subtitle1'>Stack</Typography>
                <div className={style.stacks}>
                  <Typography variant='subtitle1'>React</Typography>
                  <Typography variant='subtitle1'>FireBase</Typography>
                </div>
              </CardContent>
              <CardActions className={style.gitHub}>
                <Button
                  disableRipple
                  variant='contained'
                  className={style.button}
                  endIcon={<ArrowForwardIcon />}
                  target='_blank'
                  rel='noreferrer noopener'
                  href='https://mk-authapi-form.netlify.app/auth'
                  component={'a'}
                >
                  View Project
                </Button>
                <GitHubLogoIcon className={style.icon} />
              </CardActions>
            </Card>
          </Grid>
          <Grid style={{ width: matchXs ? '95%' : '60%' }} md={4} item>
            <Card className={style.card}>
              <CardMedia
                target='_blank'
                rel='noreferrer noopener'
                href='https://mk-movieapi-app.netlify.app/'
                component={'a'}
                className={style.media}
                image={Movies}
              />
              <CardContent className={style.cardContent}>
                <Typography className={style.title} variant='h6'>
                  MovieApi App
                </Typography>
                <Typography variant='subtitle1'>Stack</Typography>
                <div className={style.stacks}>
                  <Typography variant='subtitle1'>React</Typography>
                  <Typography variant='subtitle1'>Axios</Typography>
                </div>
              </CardContent>
              <CardActions className={style.gitHub}>
                <Button
                  target='_blank'
                  rel='noreferrer noopener'
                  href='https://mk-movieapi-app.netlify.app/'
                  component={'a'}
                  disableRipple
                  variant='contained'
                  className={style.button}
                  endIcon={<ArrowForwardIcon />}
                >
                  View Project
                </Button>
                <GitHubLogoIcon className={style.icon} />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Projects
