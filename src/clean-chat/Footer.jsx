import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSubmit() {
    this.props.handleSubmit(this.state.input);
    this.setState({
      input: "",
    });
  }

  render() {
    return (
      <div className="panel-footer">
        <form>
          <div className="input-group">
            <input
              value={this.state.input}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="Say something"
            />
            <span className="input-group-btn">
              <button
                onClick={this.handleSubmit}
                className="btn btn-primary px-lg-5 rounded-1"
                type="button"
              >
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default Footer;
