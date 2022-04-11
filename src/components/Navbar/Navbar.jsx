import { AppBar, Toolbar, useMediaQuery, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import logo from '../../img/logo.png'
import useStyle from './NavbarStyle'
import MenuIcon from '@material-ui/icons/Menu'
import useTheme from '@material-ui/core/styles/useTheme'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { Link, animateScroll as scroll } from 'react-scroll'

function ElevationScroll(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

function Navbar(props) {
  const style = useStyle()
  const [showMenu, setShowMenu] = useState(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  const setShowMenuToFalse = () => {
    setShowMenu(false)
  }

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const Menu = () => (
    <div onClick={setShowMenuToFalse} className={style.hamburgerMenu}>
      <div className={style.hamburgerMenuLinks}>
        <ul style={style.hamburgerMenuFlex}>
          <li className={style.listItem2}>
            <Link
              to='home'
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              activeClass={style.active}
              onClick={setShowMenuToFalse}
            >
              Home
            </Link>
          </li>
          <li className={style.listItem2}>
            <Link
              activeClass={style.active}
              to='skills'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={setShowMenuToFalse}
            >
              Skills
            </Link>
          </li>
          <li className={style.listItem2}>
            <Link
              activeClass={style.active}
              to='projects'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={setShowMenuToFalse}
            >
              Projects
            </Link>
          </li>
          <li className={style.listItem2}>
            <Link
              activeClass={style.active}
              to='contact-me'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={setShowMenuToFalse}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )

  return (
    <ElevationScroll {...props}>
      <AppBar position='sticky' style={{ backgroundColor: '#232534' }}>
        <Toolbar>
          <img
            style={{ width: '100px', marginLeft: '1rem', cursor: 'pointer' }}
            src={logo}
            alt='logo'
            onClick={scrollToTop}
          />
          <ul className={style.social}>
            <li className={style.listItem}>
              <Link
                to='home'
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                activeClass={style.active}
              >
                Home
              </Link>
            </li>
            <li className={style.listItem}>
              <Link
                activeClass={style.active}
                to='skills'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className={style.listItem}>
              <Link
                activeClass={style.active}
                to='projects'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className={style.listItem}>
              <Link
                activeClass={style.active}
                to='contact-me'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          {matches && (
            <IconButton
              onClick={() => setShowMenu(!showMenu)}
              className={style.menu}
              color='primary'
            >
              <MenuIcon style={{ fontSize: '3rem' }} />
            </IconButton>
          )}
          {showMenu && <Menu />}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Navbar
