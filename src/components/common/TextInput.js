import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, error, type="text", ...rest}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass = 'form-group has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input {...rest} type={type} name={name} />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string
};

export default TextInput;
