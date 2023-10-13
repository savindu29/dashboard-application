import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

type Variant = 'filled' | 'outlined' | 'standard';
type Option<T, V> = {
  T: number | string;
  V: string;
};

type InputProps = {
  variant?: Variant;
  name?: string;
  options: Object[];
  label: string;
  defaultValue?: string;
  id: string;
  setFunction?: any;
  setValue?: any;
  fullWidth: any;
  select: boolean;
  error?: any;
  helperText?: string | false | undefined | any;
  value: string;
  onChange: any;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  noneOption?: boolean;
  optionKey?: string; // optionKeyName
  optionValue?: string; // optionValueName
};

const CustomSelectBox = ({ optionKey = 'key', optionValue = 'value', ...props }: InputProps) => {
  return (
    <TextField {...props}>
      {props.noneOption == true ? (
        <MenuItem value="Empty">
          <em></em>
        </MenuItem>
      ) : null}
      {props.options.map((option: any) => (
        <MenuItem key={option[optionKey]} value={option[optionKey]}>
          {option[optionValue]}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CustomSelectBox;
