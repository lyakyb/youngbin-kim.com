import React from "react"
import Card from "./Card"

export default class ExperienceList extends React.Component {
  render() {
    const { experiences } = this.props
    return (
      <div className="experience">
        <div className="flex-grid">
          {experiences.reverse().map(experience => {
            return <Card data={experience} key={experience.company} />
          })}
        </div>
      </div>
    )
  }
}
