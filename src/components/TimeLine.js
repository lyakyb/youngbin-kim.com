import React from 'react'
import timelineData from '../data/timelineData'
import TimelineItem from './TimelineItem'

export default class TimeLine extends React.Component {
  state = {
    lineHeight: 0,
    timelineItems: []
  }
  
  componentDidMount() {
    this.setState({
      timelineItems: timelineData.map((data, index) => {
        return <TimelineItem data={data} toggled={false} toLeft={!(index % 2 == 0)} key={index}/>
      })
    })
  }


  // vertical Line, circles on the line, circles have the date (YYYY-MM || YYYY)
  // circle size = * imp
  // hover on the circles reveal description and an image 
  render() {
    return (
      <div className="timeline">
        <div className="line">
            {this.state.timelineItems}
        </div>
      </div>
    )
  }
}