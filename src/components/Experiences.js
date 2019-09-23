import React from "react"
import WorkExperienceCard from "./cards/WorkExperienceCard"
import ProjectExperienceCard from "./cards/ProjectExperienceCard"
import workData from "../data/workExperiences"
import projectData from "../data/projectExperiences"

class ExperienceList extends React.Component {
  state = {
    workExps: [],
    prjExps: [],
  }

  componentDidMount() {
    const workExps = workData
      .map(workExperience => {
        const { company } = workExperience
        const slug = company.replace(/ /g, "_").toLowerCase()
        return (
          <p>
            <a href={`/experiences/${slug}`} key={company}>
              {company}
            </a>
          </p>
        )
      })
      .reverse()
    const prjExps = projectData.map(projectExperience => {
      const { name } = projectExperience
      return (
        <p>
          <a href={`/experiences/${name}`} key={name}>
            {name}
          </a>
        </p>
      )
    })
    this.setState({
      workExps,
      prjExps,
    })
  }

  render() {
    return (
      <div className="experiences">
        <div className="work">
          <p>Work Experiences</p>

          {this.state.workExps}
        </div>
        <div className="projects">
          <p>Projects</p>

          {this.state.prjExps}
        </div>
      </div>
    )
  }
}

export default ExperienceList
