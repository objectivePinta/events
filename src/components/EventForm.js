import React, {Component, PropTypes} from 'react';
import {EventFormObject} from '../constants/EventFormObject';
import IntelligentForm from './common/IntelligentForm';

class EventForm extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(obj) {
    console.log("ya baby");
    console.log(obj);
    console.log("ya baby");
  }

  render() {
    return <IntelligentForm debug
                            title={EventFormObject.title}
                            onSubmit={this.onSubmit}
                            object = {EventFormObject.object}
          />;
  }

}

export default EventForm;
