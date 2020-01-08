import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {

  // HELPER METHODS 

  renderError(meta){
    if (meta.touched && meta.error) {
      return (
        <div className= "ui error message">
          <div className="header">{meta.error}</div>
        </div>
      )
    }
  }
  renderInput = ({input, label, meta}) => {
    // shorter syntax take the entire input object,
    // take all the properties and add them as props to the input element
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className="className">
        <label> {label} </label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  // RENDER 
  render() {
    return (
      <form 
      onSubmit={this.props.handleSubmit(this.onSubmit)} 
      className = "ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label = "Enter Description" />
        <br></br>
        <button className="ui button blue">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  // while errors object is empty, redux form thinks it is a valid form
  const errors = {}
  if (!formValues.title) {
    // only ran if the user did not enter a title
    errors.title = "You must enter a title"
  }

  if (!formValues.description) {
    // only ran if the user did not enter a description
    errors.description = "You must enter a description"
  }
  return errors
}

export default reduxForm({
  form: "StreamForm",
  validate: validate
})(StreamForm)
