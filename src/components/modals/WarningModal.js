import React from 'react'

export default class WarningModal extends React.Component {  
  render() {
    const { message, isOpen, onButtonClick } = this.props;
    return (
      <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
        <div className="modal-wrapper">
          <div className="content">
            {message}
            <button onClick={onButtonClick}>I got it!</button>
          </div>
        </div>
      </div>
    )
  }
}
