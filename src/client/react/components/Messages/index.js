import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

@observer(["messages"])
export default class Messages extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let createItem = function(message, key) {
      return (
        <li key={key} className={message.user}>
          <div className="avatar"><img src="http://i.imgur.com/DY6gND0.png" draggable="false"/></div>
          <div className="msg">
            <p>{message.text}<emoji className="suffocated"/></p>
            <time>20:17</time>
          </div>
        </li>
      )
    };

    return <ol className="chat"> {this.props.messages.map(createItem)} </ol>;
  }
}

Messages.wrappedComponent.propTypes = {
  messages: PropTypes.object.isRequired,
};
