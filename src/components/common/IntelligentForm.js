import React, {Component, PropTypes} from 'react';
import TextInput from './form-components/TextInput';
import PrintObject from '../utils/PrintObject';

class IntelligentForm extends Component {

  constructor(props) {
    super(props);
    let objectOfForm = {};
    Object.keys(this.props.object).map( key => {
      objectOfForm[key] = '';
     return objectOfForm;
    });

    this.state = {objectOfForm};

    this.handleTextChange = this.handleTextChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  handleTextChange(event) {
    let copyOfObjectOfForm = Object.assign({},this.state.objectOfForm);
    copyOfObjectOfForm[event.target.id] = event.target.value;
    this.setState({objectOfForm:copyOfObjectOfForm});
  }

  buttonClick(event) {
    event.preventDefault();
    this.props.onSubmit(Object.assign({},this.state.objectOfForm));
  }

  render() {
    const inputs = Object.keys(this.props.object).map(
      prop =>
      {
        return <TextInput key={prop} type={this.props.object[prop]} id={prop} inputValue={this.state.prop} textChanged={this.handleTextChange} />
      }
    )


    return (
      <div className="row-fluid" style={{border:'3px dashed blue', padding:'13px'}}>
        <h3>{this.props.title} </h3>
          {inputs}
         <button onClick={this.buttonClick} className="btn btn-info"> Boom </button>
        {this.props.debug && <PrintObject givenObject={this.state.objectOfForm}/> }
      </div>
    );
  }

}

export default IntelligentForm;
