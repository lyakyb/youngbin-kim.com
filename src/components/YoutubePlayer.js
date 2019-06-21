import React from "react"
import Youtube from "react-youtube"

export default class YoutubePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vidIds: props.vidIds
    }
  }
  onReady = e => {
    e.target.cuePlaylist(this.state.vidIds, 0, 0, 'large')
  }

  render() {
    const options = {
      height: "480",
      width: "853",
      playerVars: {
        autoPlay: 0,
      },
    }
    return (
      <Youtube
        opts={options}
        videoId={this.state.vidIds[0]}
        id={this.state.vidIds[0]}
        onReady={this.onReady}
      />
    )
  }
}
