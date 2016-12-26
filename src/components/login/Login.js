import React, {Component,PropTypes} from 'react';
import {LoginFormObject} from '../../constants/LoginFormObject';
import IntelligentForm from '../common/IntelligentForm';

class Login extends Component {

  constructor(props) {
    super(props);

  }

  onSubmit(wow) {
    alert(wow);
  }

  render() {
    return (
      <IntelligentForm
                       title={LoginFormObject.title}
                       onSubmit={this.onSubmit}
                       object = {LoginFormObject.object}
      />
    );
  }

}

export default Login;
