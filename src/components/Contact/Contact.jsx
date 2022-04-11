import {
  Grid,
  Container,
  Typography,
  IconButton,
  TextField,
  useMediaQuery,
  useTheme,
  Button,
} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import emailjs from 'emailjs-com'

import useStyle from './ContactStyle'

function Contact() {
  const style = useStyle()
  const theme = useTheme()
  const matchMd = useMediaQuery(theme.breakpoints.down('sm'))
  const matchXs = useMediaQuery(theme.breakpoints.down('xs'))


  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_uuxwe3b',
        'template_7470ka5',
        e.target,
        'user_uf9J6w4mKauNRphbXWblE'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <>
      <section id='contact-me' className={style.contactSection}>
        <Container style={{ width: '95%' }} maxWidth='lg'>
          <Typography className={style.title} variant='h2'>
            Contact Me
          </Typography>
          <Grid
            container
            alignItems='center'
            justifyContent='center'
            direction={matchMd ? 'column-reverse' : 'row'}
          >
            <Grid md={7} xs={12} item>
              <Grid container alignItems='center'>
                <Grid item>
                  <IconButton disabled className={style.contactInfo}>
                    <PhoneIcon
                      color='primary'
                      fontSize={matchXs ? 'medium' : 'large'}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      fontSize: matchXs ? '1.1rem' : '2rem',
                      fontWeight: '500',
                    }}
                  >
                    0789903356
                  </Typography>
                </Grid>
              </Grid>
              <Grid container alignItems='center'>
                <Grid item>
                  <IconButton disabled className={style.contactInfo}>
                    <LocationOnIcon
                      color='primary'
                      fontSize={matchXs ? 'medium' : 'large'}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      fontSize: matchXs ? '1.1rem' : '2rem',
                      fontWeight: '500',
                    }}
                  >
                    Arafat Al-Halbouni
                  </Typography>
                </Grid>
              </Grid>
              <Grid container alignItems='center'>
                <Grid item>
                  <IconButton disabled className={style.contactInfo}>
                    <MailOutlineIcon
                      color='primary'
                      fontSize={matchXs ? 'medium' : 'large'}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      fontSize: matchXs ? '1rem' : '2rem',
                      fontWeight: '500',
                    }}
                  >
                    m7mdsy976@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              style={{ marginBottom: '3rem', width: matchXs ? '100%' : '75%' }}
              md={5}
              xs={12}
              item
            >
              <form onSubmit={sendEmail}>
                <Grid
                  className={style.contactMe}
                  item
                  container
                  direction='column'
                >
                  <TextField
                    className={style.contactMeInputs}
                    id='name'
                    label='Name'
                    variant='outlined'
                    name='name'
                    style={{ marginTop: '2rem' }}
                    required
                  />
                  <TextField
                    className={style.contactMeInputs}
                    label='Email'
                    variant='outlined'
                    id='email'
                    name='email'
                    required
                  />
                  <TextField
                    className={style.contactMeInputs}
                    label='Message'
                    variant='outlined'
                    multiline
                    rows={10}
                    id='message'
                    required
                    name='message'
                  />
                  <Button
                    disableRipple
                    className={style.button}
                    color='primary'
                    variant='contained'
                    type='submit'
                  >
                    Submit
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default Contact