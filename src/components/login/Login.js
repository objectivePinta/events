import React, {Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../../actions/loginActions';
import {LoginFormObject} from '../../constants/LoginFormObject';
import IntelligentForm from '../common/IntelligentForm';

class Login extends Component {

  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
  }

  onSubmit(wow) {
    alert(wow);
  }

  handle(event) {
    console.log(event.target.value);
    this.props.loginActions.login();
  }
  render() {
    return (
      <div>
      <IntelligentForm
                       title={LoginFormObject.title}
                       onSubmit={this.onSubmit}
                       object = {LoginFormObject.object}
      />
        <div class="container" >
          Login with: <button onClick={this.handle}>Facebook</button>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

