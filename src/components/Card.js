import React from "react"
import { ImageForFileName } from "../helpers/imageProvider"

export default class Card extends React.Component {

  render() {
    const { img, position, startDate, endDate, techStack, description } = this.props.data
    const techStacks = techStack.map(tech => {
      const img = ImageForFileName(tech)
      return <img src={ImageForFileName(tech)} key={tech} />
    });

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
              {techStacks}
            </div>
          </div>
          <div className="card-back">
            <div className="description">
              {description}
            </div>
            <div className="tech-stack">
            </div>
          </div>
        </div>
      </div>
    )
  }
}
