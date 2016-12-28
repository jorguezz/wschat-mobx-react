import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

const ENTER_KEY = 13;

@observer(["MessageStore"])
export default class EntryMessage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input
          ref="newField"
          type="text"
          className="textarea"
          placeholder="Type here!"
          onKeyDown={this.handleNewMessageKeyDown}
          autoFocus={true}
        />
        <div className="emojis"></div>
      </div>
    );
  }

  handleNewMessageKeyDown = (event) => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    let message = ReactDOM.findDOMNode(this.refs.newField).value.trim();

    if (message) {
      this.props.MessageStore.addMessage(message);
      ReactDOM.findDOMNode(this.refs.newField).value = '';
    }
  };
}

EntryMessage.wrappedComponent.propTypes = {
  MessageStore: PropTypes.object.isRequired,
};





