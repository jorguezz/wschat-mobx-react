import { observable, action } from 'mobx';
import { getRandomMessages } from '../../api/fakeDataApi';

export default class MessageStore {
  @observable messages = [];

  constructor(initialState) {
    Object.assign(this, initialState);
  }

  @action setMessage(message, user) {
    this.messages.push({text: message, user: user});
  }

  @action addMessage(text) {
    socket.emit('chat message', text);
    this.setMessage(text, 'self');
  }

  @action async getMessages() {
    this.messages = await getRandomMessages();
  }

}

