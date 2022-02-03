/*eslint-disable*/
import React from 'react';

import { Input, Label, StyledToggle } from './toggle.styled';

const Toggle = ({
  labelOne,
  labelTwo,
  name,
  id,
  onChange,
  value,
  dark,
  className,
}) => {
  return (
    <StyledToggle className={className}>
      <Label dark={dark}>
        {labelOne?<span>{labelOne}</span>: null}
        <label>
          <Input
            type="checkbox"
            name={name}
            id={id}
            onChange={(e) => onChange(e.target.checked)}
            checked={value}
          />
          <span className="toggle-button" />
        </label>
        {labelTwo?<span>{labelTwo}</span>: null}
      </Label>
    </StyledToggle>
  );
};

export default Toggle;
