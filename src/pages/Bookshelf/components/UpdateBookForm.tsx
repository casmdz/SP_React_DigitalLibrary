
// import { useSubmit } from 'react-router-dom'
import CustomInput from './CustomInput'

import { useForm } from 'react-hook-form'
import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';

import { server_calls } from '../../../api/server';
import { useDispatch, useStore } from 'react-redux';
import '../../../redux/RootSlice'
// import { chooseAuthor, chooseFormat, chooseGenre, chooseISBN, choosePublishing, chooseTitle } from '../../../redux/RootSlice';


interface UpdateFormProps {
  id?: string[];
  styles?: any;
}



const UpdateBookForm = ( props: UpdateFormProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { register, handleSubmit, setValue } = useForm({})
  const { inputFields, buttons, input } = props.styles;
  const [formValues, setFormValues] = useState(selectedBook);

  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    // Update the form values when selectedBook changes
    setFormValues(selectedBook);
  }, [selectedBook]);

  const onSubmit = async (data) => {
    try {
      await server_calls.update(selectedBook.id, data);
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Box>
          <div style={inputFields}>
            <label htmlFor='title'>Book Title</label>
            <CustomInput {...register('title')} name='title' placeholder="Python Crash Course" value={formValues.title} />
          </div>

          <div style={inputFields}>
            <label htmlFor='author'>Book Author</label>
            <CustomInput {...register('author')} name='author' placeholder="Eric Matthes" />
          </div>

          <div style={inputFields}>
            <label htmlFor='publishing'>Publishing Info</label>
            <CustomInput {...register('publishing')} name='publishing' placeholder="November 30, 2015 by No Starch Press" />
          </div>

          <div style={inputFields}>
            <label htmlFor='format'>Format</label>
            <CustomInput {...register('format')} name='format' placeholder="560 pages, Paperback" />
          </div>

          <div style={inputFields}>
            <label htmlFor='isbn'>ISBN</label>
            <CustomInput {...register('isbn')} name='isbn' placeholder="9781593276034 (ISBN10: 1593276036)" />
          </div>

          <div style={inputFields}>
            <label htmlFor='genre'>Genre</label>
            <CustomInput {...register('genre')} name='genre' placeholder="Programming" />
          </div>

        </Box>

        <div style={buttons}>
          <input style={input} type="submit" value="SUBMIT" />
          <Button variant="outlined" color="error" disableElevation onClick={() => setIsOpen(!isOpen)}>Cancel</Button>
        </div>

      </form>
    </div>
  )
}

export default UpdateBookForm
