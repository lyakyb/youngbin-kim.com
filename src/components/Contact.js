import React from "react"

export default class Contact extends React.Component {
  state = {
    name: "",
    subject: "",
    body: "",
  }

  onNameChanged = e => {
    console.log(e.target.value)
    this.setState({ name: e.target.value })
  }
  onSubjectChanged = e => {
    console.log(e.target.value)
    this.setState({ subject: e.target.value })
  }
  onBodyChanged = e => {
    console.log(e.target.value)
    this.setState({ body: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    


    window.location.reload()

    // send email
    // spinner 
    // change text to successful 
  }

  render() {
    return (
      <div className="contact">
        <form>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onNameChanged}
          />
        </form>
        <form>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={this.state.subject}
            onChange={this.onSubjectChanged}
          />
        </form>
        <form>
          <label>Body:</label>
          <textarea
            type="text"
            name="body"
            rows="10"
            value={this.state.body}
            onChange={this.onBodyChanged}
          />
        </form>
        <div className="submit">
          <button text="Send" onClick={this.onSubmit}>
            Send
          </button>
        </div>
      </div>
    )
  }
}
