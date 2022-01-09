import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import React from 'react'

export default function RadioGroup(props) {
    const {name,label,value,onChange,items}=props;
    return (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <MuiRadioGroup row name={name} value={value} onChange={onChange}>
          {items.map((item) => (
            <FormControlLabel key={item.id}
              value={item.id}
              control={<Radio></Radio>}
              label={item.title}
            ></FormControlLabel>
          ))}
        </MuiRadioGroup>
      </FormControl>
    );
}
