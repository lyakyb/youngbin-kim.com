import React from "react"
import WorkExperienceCard from "./cards/WorkExperienceCard"
import ProjectExperienceCard from './cards/ProjectExperienceCard'
import workData from "../data/workExperiences"
import projectData from "../data/projectExperiences"

class ExperienceList extends React.Component {
  state = {
    workExperiences: workData.reverse().map(workExperience => {
      return <WorkExperienceCard data={workExperience} key={workExperience.company} />
    }),
    projectExperiences: projectData.reverse().map(projectExperience => {
      return <ProjectExperienceCard data={projectExperience} key={projectExperience.name} />
    })
  }

  render() {
    return (
      <div className="experience">
        <div className="work-flex-grid">
          {this.state.workExperiences}
        </div>
        <div className="divider"/>
        <div className="project-flex-grid">
          {this.state.projectExperiences}
        </div>
      </div>
    )
  }
}

export default ExperienceList
