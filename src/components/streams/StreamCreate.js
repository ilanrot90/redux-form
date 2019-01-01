import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../store/actions/streams.action';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderInput = ({ input, label, type, meta: { submitFailed, error }}) => {
    const className = (submitFailed && error ) ? 'field error' : 'field';

    return (
      <div className={className}>
        <label>{label}</label>
        <input { ...input }  type={type} autoComplete="off"/>
        {submitFailed && ((error && <span className="ui error message">{error}</span>))}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.createStream(formValues)
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <form className="ui form error" onSubmit={ handleSubmit(this.onSubmit) }>
        <Field name="title" component={this.renderInput} label="Enter Title" type="text"/>
        <Field name="description" component={this.renderInput} label="Enter Description" type="text"/>

        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = ({title, description}) => {
  const errors = {};

  if (!title) {
    errors.title = 'Required title'
  } else if (title.length < 5) {
    errors.title = 'Must be 5 characters or more'
  }

  if (!description) {
    errors.description = 'Required description'    
  } else if (description.length < 10) {
    errors.description = 'Must be 10 characters or more'
  }

  return errors
}

const formfWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(null, { createStream })(formfWrapped)