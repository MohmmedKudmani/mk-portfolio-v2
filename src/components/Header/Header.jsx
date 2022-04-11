import {
  Grid,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
  IconButton,
} from '@material-ui/core'
import BackgroundAnimation from './BackgroundAnimation'
import useStyle from './HeaderStyle'
import { Link as LinkS } from 'react-scroll'
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'

function Header() {
  const style = useStyle()
  const theme = useTheme()
  const matchMd = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <main id='home' className={style.header}>
      <Grid
        container
        justifyContent='flex-end'
        style={{ paddingTop: '1.5rem' }}
      >
        <Grid
          item
          target='_blank'
          rel='noreferrer noopener'
          href='https://www.instagram.com/mohammedkudmani/'
          component={'a'}
        >
          <IconButton className={style.socialIcons}>
            <InstagramLogoIcon width='22' height='22' />
          </IconButton>
        </Grid>
        <Grid
          item
          target='_blank'
          rel='noreferrer noopener'
          href='https://www.linkedin.com/in/mohmmed-kudmani-b64889212/'
          component={'a'}
        >
          <IconButton className={style.socialIcons}>
            <LinkedInLogoIcon width='22' height='22' />
          </IconButton>
        </Grid>
        <Grid
          item
          target='_blank'
          rel='noreferrer noopener'
          href='https://github.com/MohmmedKudmani'
          component={'a'}
        >
          <IconButton className={style.socialIcons}>
            <GitHubLogoIcon width='22' height='22' />
          </IconButton>
        </Grid>
      </Grid>
      <Container style={{ width: '95%' }} maxWidth='lg'>
        <Grid
          className={style.headerContent}
          alignItems='center'
          justifyContent='center'
          container
        >
          <Grid sm={matchMd ? 12 : 6} item>
            <Typography
              className={style.hello}
              color='textPrimary'
              variant='h5'
            >
              Hello, I'm
            </Typography>
            <Typography className={style.myName} color='primary' variant='h2'>
              Mohammed <br /> Kudmani
            </Typography>
            <Typography style={{ color: '#44456d' }} variant='subtitle1'>
              An 18 Years old From Syria & A Self Taught Frontend Web Developer
            </Typography>
            <LinkS
              className={style.button}
              color='default'
              variant='contained'
              to='projects'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              My Projects
            </LinkS>
          </Grid>
          {matchMd ? null : (
            <Grid sm={6} item>
              <div className={style.backGround}>
                <BackgroundAnimation />
              </div>
            </Grid>
          )}
        </Grid>
      </Container>
    </main>
  )
}

export default Header
