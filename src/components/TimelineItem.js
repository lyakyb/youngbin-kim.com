import React from "react"
import { Fade } from "react-reveal"

export default class TimelineItem extends React.Component {
  details = () => {
    if (this.props.toLeft) {
    }

    return <div />
  }

  render() {
    const { year, month, day, description, img, imp } = this.props.data
    const { toggled, toLeft } = this.props

    const date = month ? `${year}. ${month}` : `${year}`

    if (toLeft) {
      return (
      <Fade bottom>
      <div className={toLeft ? 'desc-left' : 'desc-right'}>{description}</div>
      <div className={toLeft ? 'timelineitem left' : 'timelineitem right'}>{date}</div>
    </Fade>);
    }


    return (
      <Fade bottom>
        <div className={toLeft ? 'timelineitem left' : 'timelineitem right'}>{date}</div>
        <div className={toLeft ? 'desc-left' : 'desc-right'}>{description}</div>
      </Fade>
    )
    // return (
    //   <Fade bottom>
    //     <div className={toLeft ? 'timelineitem left' : 'timelineitem right'}>{date}</div>
    //     <div className={toLeft ? 'desc-left' : 'desc-right'}>{description}</div>
    //   </Fade>
    // )


  }
}
