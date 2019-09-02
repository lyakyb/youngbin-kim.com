import React from 'react'
import timelineData from '../data/timelineData'
import TimelineItem from './TimelineItem'

export default class Timeline extends React.Component {
  state = {
    timelineItems: []
  }
  
  componentDidMount() {
    this.setState({
      timelineItems: timelineData.map((data, index) => {
        return <TimelineItem data={data} toggled={false} toLeft={!(index % 2 === 0)} key={index}/>
      })
    })
  }

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
