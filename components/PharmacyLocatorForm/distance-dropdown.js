/**
*
* SelectOption
*
*/

import React from 'react';
import Select from 'react-select';
import SelectStyles from '../SelectOption/SelectOptionStyles';
const DistanceDropdown = ({ id, handleChange, options, placeholder, name, value }) => (
  <SelectStyles>
    <Select
      name={name}
      id={id}
      value={value}
      options={options}
      onChange={handleChange}
      placeholder={placeholder}
    />
  </SelectStyles>
);
DistanceDropdown.propTypes = {
  options: React.PropTypes.array,
  placeholder: React.PropTypes.string,
  id: React.PropTypes.string,
  handleChange: React.PropTypes.func,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
};

DistanceDropdown.defaultProps = {
  options: {},
  placeholder: '',
  input: {},
  id: '',
  searchable: false,
  clearable: false,
  handleChange: () => undefined,
  name: '',
  value: '',
};
export default DistanceDropdown;
