import React from "react"
import Helmet from "react-helmet"

import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import WarningModal from "../components/modals/WarningModal"
import config from "../data/Config"
import "../styles/index.scss"

import { isChrome } from "../helpers/deviceDetector"

export default class DefaultLayout extends React.Component {
  state = {
    showWarning: isChrome
  }

  handleAcknowledge = () => {
    this.setState({showWarning: false})
  }

  render() {
    const { children } = this.props
    const warningMessage =
      "Oops! This website is best optimized for Chrome/Firefox. \nYou may experience/observe weird behaviors if you are on a different browser/mobile."
    return (
      <>
        <Helmet />
        <WarningModal message={warningMessage} isOpen={this.state.showWarning} onButtonClick={() => this.handleAcknowledge()}/>
        <Navigation navLinks={config.navLinks} />
        <main id="content-body">{children}</main>
        <Footer />
      </>
    )
  }
}
