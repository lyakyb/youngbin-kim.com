import React from "react"
import { ImageForFileName } from "../helpers/imageProvider"

export default class Card extends React.Component {
  render() {
    const { img, position, startDate, endDate, techStack } = this.props.data
    return (
      <div className="card">
        <div className="card-container">
          <div className="card-front">
            <div className="img">
              <img src={img} />
            </div>
            <div className="title">{position}</div>
            <div className="duration">{`${startDate} - ${endDate}`}</div>
            <div className="tech-stack">
              {techStack.map(tech => {
                const img = ImageForFileName(tech)
                return <img src={ImageForFileName(tech)} key={tech} />
              })}
            </div>
          </div>
          <div className="card-back">
              LOL
          </div>
        </div>
      </div>
    )
  }
}
