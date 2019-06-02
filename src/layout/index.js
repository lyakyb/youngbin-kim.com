import React from "react"
import Helmet from "react-helmet"

import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import config from "../data/Config"
import "../styles/index.scss"

export default class DefaultLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Helmet />
        <Navigation navLinks={config.navLinks} />
        <main id="content-body">{children}</main>
        <Footer />
      </>
    )
  }
}
