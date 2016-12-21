import React, {Component, PropTypes} from 'react';

class TextInput extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <input type="text" value={this.props.inputValue} onChange={this.props.textChanged}/>
    );
  }
}

TextInput.propTypes = {
  textChanged: PropTypes.func,
  inputValue: PropTypes.string
};

export default TextInput;
