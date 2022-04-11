import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core'
import useStyle from './SkillsStyle'
import next_js from '../../img/next-js.svg'
import mantine from '../../img/wadaw.svg'

function Skills() {
  const style = useStyle()

  return (
    <section id='skills' className={style.skillsSection}>
      <Container style={{ width: '95%' }} maxWidth='lg'>
        <Typography className={style.title} variant='h2'>
          Skills
        </Typography>
        <Grid spacing={5} direction='column' container>
          <Grid item>
            <Grid spacing={5} direction='row' container>
              <Grid md={4} xs={12} item>
                <Card className={style.card}>
                  <CardContent>
                    <i
                      style={{
                        fontSize: '3rem',
                        color: '#fca311',
                        marginBottom: '0.5rem',
                      }}
                      className='fab fa-html5'
                    ></i>
                    <Typography gutterBottom variant='h6'>
                      Html & Css
                    </Typography>
                    <Typography gutterBottom variant='subtitle1'>
                      I Can Build a Website With all The Html Elements Needed
                      And Style Your Page With Modern Responsive Design.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid md={4} xs={12} item>
                <Card className={style.card}>
                  <CardContent>
                    <i
                      style={{
                        fontSize: '3rem',
                        color: '#fca311',
                        marginBottom: '0.5rem',
                      }}
                      className='fab fa-js'
                    ></i>
                    <Typography gutterBottom variant='h6'>
                      JavaScript
                    </Typography>
                    <Typography gutterBottom variant='subtitle1'>
                      I Can Make an interactive Site With JS and I'm Good At:{' '}
                      <span style={{ color: '#fca311' }}>
                        Dom Manipulation, HttpRequests, Functional Programming.
                      </span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid md={4} xs={12} item>
                <Card className={style.card}>
                  <CardContent>
                    <i
                      style={{
                        fontSize: '3rem',
                        color: '#fca311',
                        marginBottom: '0.5rem',
                      }}
                      className='fab fa-react'
                    ></i>
                    <Typography gutterBottom variant='h6'>
                      React
                    </Typography>
                    <Typography gutterBottom variant='subtitle1'>
                      I Can Combine JS with React To Make High Interactive Web
                      Apps Faster, And I know Libraries Like:{' '}
                      <span style={{ color: '#fca311' }}>
                        ReactQuery, Axios, Redux, ReactRouter.
                      </span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid spacing={5} direction='row' container>
              <Grid md={4} xs={12} item>
                <Card className={style.card}>
                  <CardContent>
                    <i
                      style={{
                        fontSize: '3rem',
                        color: '#fca311',
                        marginBottom: '0.5rem',
                      }}
                      className='fab fa-git-alt'
                    ></i>
                    <Typography gutterBottom variant='h6'>
                      Git & GitHub
                    </Typography>
                    <Typography gutterBottom variant='subtitle1'>
                      I have Great Team Communication Skills and I'm Good At:{' '}
                      <span style={{ color: '#fca311' }}>
                        Push Request, Branch, Create A Repository.
                      </span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid md={4} xs={12} item>
                <Card className={style.card}>
                  <CardContent>
                    <img
                      style={{
                        width: '10.5rem',
                        marginBottom: '0.5rem',
                      }}
                      src={mantine}
                      alt='mantine'
                    />
                    <Typography gutterBottom variant='h6'>
                      Mantine
                    </Typography>
                    <Typography gutterBottom variant='subtitle1'>
                      I Can User Mantine To Speed Up Making A High Interactive
                      Web Apps With Modern Responsive Design.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid md={4} xs={12} item>
                <Card className={style.card}>
                  <CardContent>
                    <img
                      style={{
                        width: '2.8rem',
                        marginBottom: '0.5rem',
                      }}
                      src={next_js}
                      alt='next_js'
                    />
                    <Typography gutterBottom variant='h6'>
                      Next.js
                    </Typography>
                    <Typography gutterBottom variant='subtitle1'>
                      I Can Use Next.js to Make FullStack Web Apps With Great
                      SEO And I Know About:{' '}
                      <span style={{ color: '#fca311' }}>
                        Static Side Generation, Server Side Rendering.
                      </span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Skills
