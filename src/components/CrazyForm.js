import React, {Component, PropTypes} from 'react';
import TextInput from './form-components/TextInput';

class CrazyForm extends Component {

  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <div>
        <TextInput inputValue={this.state.name} textChanged={this.handleTextChange}/>
        {this.state.name}
      </div>
    );
  }

}

export default CrazyForm;
