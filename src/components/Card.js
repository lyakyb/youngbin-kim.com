import React from "react"

export default class Card extends React.Component {
  render() {
    const { data } = this.props

    return (
      <div className="card">
        <div className="card-header">
          <div className="position">{data.position.toUpperCase()}</div>
          <div className="company link">
            {data.company ? data.company : data.link}
          </div>
          <div className="location">{data.location}</div>
        </div>
        <div className="card-body">
          <div className="description">{data.description}</div>
        </div>
        <div className="card-footer">
          <div className="date">{`${data.startDate} - ${data.endDate}`}</div>
          <div className="img">
            <img src={data.img} />
          </div>
        </div>
      </div>
    )
  }
}
