import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {

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

  onSubmit(formValues) {
    console.log(formValues)
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
        <button className="ui button success">Submit</button>
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
  form: "streamX",
  validate: validate
})(StreamCreate);



// IMPORTANT TO UNDERSTAND : 

// The formValues / formProps you see are provided to us by Redux Form 
// automatically since we passed the "this.renderInput" method 
// to the component props of our Field component. 
// These props are what helps us connect the input to Redux 
// and make this a controlled element.



// SYNTAX VARIATIONS
// longer syntax but useful to keep in mind to understand the shortest
// renderInput(formProps){
//   return <input
//   onChange = {formProps.input.onChange}
//   value = {formProps.input.value}
//   />
// }

// shorter version without destructuring 
// renderInput(formProps) {
//   // shorter syntax take the entire input object,
//   // take all the properties and add them as props to the input element
//   return (
//       <input {...formProps.input} />
//   );
// }
