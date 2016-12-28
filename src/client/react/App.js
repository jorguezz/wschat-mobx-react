import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import Messages from './components/Messages';
import EntryMessage from './components/EntryMessage';

@observer(["MessageStore"])
export default class App extends Component {

  componentDidMount() {
    socket.on('chat message received', (data, user) => {
      this.props.MessageStore.setMessage(data.message, user);
    });
  }

  render() {
    return (
      <div>

        <div className="menu">
          <div className="back">
            <i className="fa fa-chevron-left"></i>
          </div>
          <div className="name">Basic WsChat Example</div>
        </div>

        <Messages messages={this.props.MessageStore.messages}/>

        <EntryMessage />

      </div>
    );

  }
}

App.wrappedComponent.propTypes = {
  MessageStore: PropTypes.object.isRequired,
};
