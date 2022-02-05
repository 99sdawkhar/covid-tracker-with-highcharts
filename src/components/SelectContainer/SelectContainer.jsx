import React, { useState } from 'react';
import SelectStyle from './select.styled';

const SelectContainer = ({ options, optionLabel, optionValue, placeholder, isMulti, classNamePrefix, className, getSelectedValue, value}) => {

  const [selectedOption, setSelectedOption] = useState(null);

  const formatOptions = (op, label, value) => {
    return op && op.map((option) => {
      return {
        label: option[label],
        value: option[value],
      };
    });
  }

  const handleChange = (val) => {
    setSelectedOption(val);
    getSelectedValue && getSelectedValue(val);
  }
  
  return (
    <SelectStyle
      options={optionValue ? formatOptions(options, optionLabel, optionValue) : options}
      defaultValue={selectedOption}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      isMulti={isMulti}
      className={className}
      classNamePrefix='react-select'
    />
  );
};

export default SelectContainer;
