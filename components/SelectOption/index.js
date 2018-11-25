/**
*
* SelectOption
*
*/

import React from 'react';
import Select from 'react-select';
import SelectOptionStyles from './SelectOptionStyles';
const SelectOption = ({ id, clearable, searchable, handleChange, input, options, placeholder }) => (
  <SelectOptionStyles>
    <Select
      autofocus
      options={options}
      placeholder={placeholder}
      clearable={clearable}
      searchable={searchable}
      name={id}
      onChange={handleChange}
      id={id}
      {...input}
    />
  </SelectOptionStyles>
);
SelectOption.propTypes = {
  options: React.PropTypes.array,
  placeholder: React.PropTypes.string,
  input: React.PropTypes.object,
  id: React.PropTypes.string,
  searchable: React.PropTypes.bool,
  clearable: React.PropTypes.bool,
  handleChange: React.PropTypes.fun,
};

SelectOption.defaultProps = {
  options: {},
  placeholder: '',
  input: {},
  id: '',
  searchable: false,
  clearable: false,
  handleChange: () => undefined,
};
export default SelectOption;
