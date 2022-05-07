import React from 'react';
import './Chat.css';
import Header from '../components/header'
import Message from '../components/Message'
class Chat extends React.Component {
  render()
  {
    return (
      <div  className="App">
        <Header />
        <Message/>
      </div>
    );
  }
}

export default Chat;