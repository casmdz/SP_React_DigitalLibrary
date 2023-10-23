import { TextField } from '@mui/material'
import { forwardRef } from 'react'

interface InputType {
    name: string;
    placeholder?: string;
}

const CustomInput = forwardRef(( props: InputType, ref) => {
  return (
    <TextField
        variant="outlined"
        margin="none"
        size="small"
        inputRef={ref}
        type='text'
        {...props}
    >
    </TextField>
  ) 
})

export default CustomInput