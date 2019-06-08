import React from "react"
import { Link } from "gatsby"
import { ImageForFileName } from "../helpers/imageProvider"

import "../styles/index.scss"

export default class Navigation extends React.Component {
  state = { scrolled: false }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll)
  }

  onScroll = () => {
    window.scrollY > 10
      ? this.setState({ scrolled: true })
      : this.setState({ scrolled: false })
  }

  render() {
    const { scrolled } = this.state
    const { navLinks } = this.props
    return (
      <nav className={scrolled ? "nav scroll" : "nav"}>
        <div className="nav-container">
          <div className="home">
            <Link to='/'>
              <img src={scrolled ? ImageForFileName('bluesteak') : ImageForFileName('redsteak')} alt='Home' className='homeicon' />
              <span className='text'>Bin Kim</span>
            </Link>
          </div>
          <div className="links">
            {navLinks.map(link => {
              return (
                <Link key={link.name} to={link.link} activeClassName="active">
                  {link.name}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    )
  }
}
