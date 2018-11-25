import React from 'react';

const TextFieldGroup = (props) => {
  const { classname, maxlength, placeholder, textarea, input, type, meta, ...rest } = props;
  const errorClass = props.meta.touched && (props.meta.error || props.meta.warning) ? 'has-error' : null;
  // const textareaType = <textarea {...input} placeholder={placeholder} {...rest} type={type} className={classname} />;
  const inputType = <input className={classname} maxLength={maxlength} placeholder={placeholder} {...input} {...rest} type={type} value={input.value} />;
  return (
    <div className={errorClass}>
      {inputType}
      {meta.touched &&
        ((meta.error && (meta.error !== 'Required') && <span className="text-danger">{meta.error}</span>) ||
          (meta.warning && <span className="text-danger">{meta.warning}</span>))}
    </div>);
};

TextFieldGroup.propTypes = {
  maxlength: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  meta: React.PropTypes.object,
  input: React.PropTypes.object,
  textarea: React.PropTypes.object,
  classname: React.PropTypes.string,
};

TextFieldGroup.defaultProps = {
  maxlength: '50',
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  meta: React.PropTypes.object,
  input: React.PropTypes.object,
  textarea: {},
  classname: React.PropTypes.string,
};

export default TextFieldGroup;
