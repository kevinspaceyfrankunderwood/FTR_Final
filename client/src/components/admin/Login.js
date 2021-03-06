import React from "react";
import { Button, Form } from "semantic-ui-react";
import { handleLogin } from "../../reducers/user";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    loggedIn: true,
  };

  componentDidMount() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      this.setState({
        email: "contact@fit2recover.org",
        password: "adminAEIOU2468",
      });
    }
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  buttonDisable = () => {
    if (this.state.email !== "" && this.state.password !== "") {
      return false;
    } else {
      return true;
    }
  };

  checkInputs = () => {
    const person = { email: this.state.email, password: this.state.password };
    this.props.dispatch(
      handleLogin(this.state.email, this.state.password, this.props.history)
    );
  };

  render() {
    return (
      <Form
        style={{
          paddingTop: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <Form.Field>
          <label>Email Address</label>
          <input
            placeholder="Email Address"
            id="email"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            id="password"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button
          type="submit"
          color={this.buttonDisable ? "green" : "gray"}
          disabled={this.buttonDisable()}
          onClick={this.checkInputs}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default connect()(Login);
