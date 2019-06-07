import React from "react"
import { ImageForFileName } from "../../helpers/imageProvider"

export default class WorkExperienceCard extends React.Component {

  render() {
    const { img, position, startDate, endDate, location, techStack, description } = this.props.data
    const techStacks = techStack.map(tech => {
      return <img src={ImageForFileName(tech)} key={tech} />
    });

    return (
      <div className="work-card">
        <div className="work-card-container">
          <div className="work-card-front">
            <div className="img">
              <img src={img} />
            </div>
            <div className="title">{position}</div>
            <div className="loc-and-time">{`${startDate} - ${endDate}`}<br/>{location}</div>
            <div className="tech-stack">
              {techStacks}
            </div>
          </div>
          <div className="work-card-back">
            <div className="description">
              {description}
            </div>
            <div className="divider"/>
            <div className="tech-stack">
              {techStacks}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
