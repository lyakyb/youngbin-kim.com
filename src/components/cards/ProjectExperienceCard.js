import React from "react"
import { ImageForFileName } from "../../helpers/imageProvider"

export default class ProjectExperienceCard extends React.Component {
  render() {
    const { name, description, link, language, techStack } = this.props.data
    const techStacks = techStack.map(tech => {
      return <img src={ImageForFileName(tech)} key={tech} />
    })

    return (
      <div className="project-card">
        <div className="github">
          <a href={link} target="_blank">
            <img src={ImageForFileName("github")} key={"github"} />
          </a>
        </div>
        <div className="title">{name}</div>
        <div className="description">{description}</div>
        <div className="tech-stack">{techStacks}</div>
      </div>
    )
  }
}
