import React from "react"
import Helmet from "react-helmet"
import clipData from "../data/clipData"
import YoutubePlayer from "./YoutubePlayer"

export default class Clips extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vidIds: this.shuffle(clipData.map(clip => clip.id)),    
    }
  }

  shuffle = arr => {
    var curr = arr.length, temp, rnd;
  
    while (0 !== curr) {
      rnd = Math.floor(Math.random() * curr);
      curr -= 1;
  
      temp = arr[curr];
      arr[curr] = arr[rnd];
      arr[rnd] = temp;
    }
  
    return arr;
  }

  render() {
    return (
      <div className="youtube">
        <YoutubePlayer
          vidIds={this.state.vidIds}
        />
      </div>
    )
  }
}
