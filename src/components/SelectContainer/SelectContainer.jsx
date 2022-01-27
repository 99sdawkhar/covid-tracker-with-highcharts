import React, { useState } from 'react';
import Select from 'react-select';

const SelectContainer = ({ parentClass, options, optionLabel, optionValue, placeholder, isMulti, classNamePrefix, className, getSelectedValue}) => {

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
    <div className={parentClass}>
      <Select
        options={optionValue ? formatOptions(options, optionLabel, optionValue) : options}
        defaultValue={selectedOption}
        value={selectedOption}
        onChange={handleChange}
        placeholder={placeholder}
        isMulti={isMulti}
        className={className}
        classNamePrefix={classNamePrefix}
      />
    </div>
  );
};

export default SelectContainer;
