import React from "react"
import WorkExperienceCard from "./cards/WorkExperienceCard"
import ProjectExperienceCard from './cards/ProjectExperienceCard'

export default class ExperienceList extends React.Component {
  render() {
    const { workExperiences, projectExperiences } = this.props
    return (
      <div className="experience">
        <div className="work-flex-grid">
          {workExperiences.reverse().map(workExperience => {
            return <WorkExperienceCard data={workExperience} key={workExperience.company} />
          })}
        </div>
        <div className="divider"/>
        <div className="project-flex-grid">
          {projectExperiences.reverse().map(projectExperience => {
            return <ProjectExperienceCard data={projectExperience} key={projectExperience.name} />
          })}
        </div>
      </div>
    )
  }
}
