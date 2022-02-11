import React from "react";

const Select = ({ errors, name, label, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select className="form-control" name={name} id={name} {...rest}>
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Select;
