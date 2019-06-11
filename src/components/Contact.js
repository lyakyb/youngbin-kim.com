import React from "react"

export default class Contact extends React.Component {
  state = {
    name: "",
    subject: "",
    body: "",
    isLoading: false,
    buttonText: "Send"
  }


  onNameChanged = e => {
    this.setState({ name: e.target.value })
  }
  onSubjectChanged = e => {
    this.setState({ subject: e.target.value })
  }
  onBodyChanged = e => {
    this.setState({ body: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState({ isLoading: true })

    window.setTimeout(() => {
      this.setState({ isLoading: false, buttonText: "Sent!" })
      window.location.reload()
    }, 3000)
  }

  render() {
    let button
    if (this.state.isLoading) {
      button = <div className="loader">Loading...</div>
    } else {
      button = (
        <button
          text="Send"
          onClick={this.onSubmit}
        >
          {this.state.buttonText}
        </button>
      )
    }

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
          <div className={this.state.isLoading ? 'button loading' : 'button'}>{button}</div>
        </div>
      </div>
    )
  }
}
