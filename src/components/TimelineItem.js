import React from "react"
import { Fade } from "react-reveal"
import { isMobile } from "react-device-detect"

export default class TimelineItem extends React.Component {
  details = () => {
    if (this.props.toLeft) {
    }

    return <div />
  }

  render() {
    const { year, month, description } = this.props.data
    const { toLeft } = this.props

    const date = month ? `${year}. ${month}` : `${year}`

    if (isMobile || toLeft) {
      return (
        <Fade bottom>
          <div className={toLeft ? "desc-left" : "desc-right"}>
            {description}
          </div>
          <div className={toLeft ? "timelineitem left" : "timelineitem right"}>
            {date}
          </div>
        </Fade>
      )
    } else {
      return (
        <Fade bottom>
          <div className={toLeft ? "timelineitem left" : "timelineitem right"}>
            {date}
          </div>
          <div className={toLeft ? "desc-left" : "desc-right"}>
            {description}
          </div>
        </Fade>
      )
    }
  }
}
