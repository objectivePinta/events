import React, {Component, PropTypes} from 'react';

class TextInput extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div style={{display:'inline-block'}}>
        <label className="sr-only" for={this.props.id}>{this.props.id}:</label>
        <input width={this.props.id.length}
               placeholder={this.props.id}
               className="textInput"
               id={this.props.id}
               type={this.props.type}
               value={this.props.inputValue}
               onChange={this.props.textChanged}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  textChanged: PropTypes.func,
  inputValue: PropTypes.string
};

export default TextInput;
