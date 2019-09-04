import React from "react"
import clipData from "../data/clipData"
import YoutubePlayer from "./YoutubePlayer"

export default class Clips extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vidIds: this.shuffle(clipData.map(clip => clip.id)),
      showClips: false,
    }
  }

  // credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle = arr => {
    var curr = arr.length,
      temp,
      rnd

    while (0 !== curr) {
      rnd = Math.floor(Math.random() * curr)
      curr -= 1

      temp = arr[curr]
      arr[curr] = arr[rnd]
      arr[rnd] = temp
    }

    return arr
  }

  loadClips = () => {
    this.setState({ showClips: true })
  }

  render() {
    return (
      <div className="youtube block">
        <p>These are some of the clips I took when I used to play</p>
        <YoutubePlayer vidIds={this.state.vidIds} />
      </div>
    )
  }
}
