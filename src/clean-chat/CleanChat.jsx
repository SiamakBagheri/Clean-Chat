import React, { Component } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Heading from "./Heading";
import "./style.css";

class CleanChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Clean Chat",
      ChatsList: [
        {
          type: "Send",
          message: "Good morning, sir. What can I do for you?",
          time: "11:37:08 am",
        },
        {
          type: "recive",
          message: "Well, I am just looking around.",
          time: "11:37:15 am",
        },
        {
          type: "Send",
          message: "If necessary, please ask me.",
          time: "11:37:25 am",
        },
        {
          type: "recive",
          message: "Well, I am just looking around.",
          time: "11:37:15 am",
        },
      ],
      gravatars: {
        avatar1: "https://bootdey.com/img/Content/avatar/avatar1.png",
        avatar2: "https://bootdey.com/img/Content/avatar/avatar2.png",
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(message) {
    this.setState((state) => {
      return {
        ...state,
        ChatsList: [
          ...state.ChatsList,
          {
            type: "Send",
            message,
            time: new Date().toLocaleTimeString(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="panel" id="chat">
              <Heading title={this.state.title} />
              <Body
                chatslist={this.state.ChatsList}
                gravatar={this.state.gravatars}
              />
              <Footer handleSubmit={this.handleSubmit} />
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    );
  }
}

export default CleanChat;
