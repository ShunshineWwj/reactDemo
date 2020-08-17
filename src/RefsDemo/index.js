import React from "react";
import InputComponent from "./component/InputComponent";
function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("old props:", prevProps);
      console.log("new props:", this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}

class FancyButton extends React.Component {
  state = {
    a: "aaaa",
  };
  inputRef = React.createRef();

  onChange = (value, name) => {
    console.log("ref:", this.inputRef);
    this.setState({ a: value });
    console.log(value, name);
  };

  render() {
    return (
      <div>
        请输入文字：
        <InputComponent
          ref={(ref) => (this.inputRef = ref)}
          name="name"
          value={this.state.a}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default FancyButton;
