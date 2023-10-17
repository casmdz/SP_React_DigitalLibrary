// How this works: 
// https://thecodingcowboy.notion.site/ContactForm-Input-Server-Calls-de72c6e29f3d4c8ba63703904eeeada3

// import { useSubmit } from 'react-router-dom'
import CustomInput from './CustomInput'

import { useForm } from 'react-hook-form'
import { Box, Button } from '@mui/material';
import { useState } from 'react';

import { server_calls } from '../../../api/server';
import { useDispatch, useStore } from 'react-redux';
import '../../../redux/RootSlice'
import { chooseAuthor, chooseFormat, chooseGenre, chooseISBN, choosePublishing, chooseTitle } from '../../../redux/RootSlice';


interface AddBookFormProps {
    id?: string[];
    styles?: any;
}


const AddBookForm = ( props: AddBookFormProps) => {

    const [ isOpen, setIsOpen ] = useState(false)
    const { register, handleSubmit } = useForm({})
    const { inputFields, buttons, input } = props.styles;

    const dispatch = useDispatch();
    const store = useStore();

//  event: any
    const onSubmit = ( data: any) => {
        console.log('whaat')
        console.log(`ID: ${props.id}`)
        dispatch(chooseTitle(data.title));
        dispatch(chooseAuthor(data.author)); 
        dispatch(choosePublishing(data.publishing));
        dispatch(chooseFormat(data.format));
        dispatch(chooseISBN(data.isbn));
        dispatch(chooseGenre(data.genre));

        server_calls.create(store.getState());
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>

            <Box style={inputFields}>
                
                <div style={inputFields}>
                    <label htmlFor='title'>Book Title</label>
                    <CustomInput {...register('title')} name='title' placeholder="Python Crash Course" />
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
                {/* <div>
                    <label htmlFor='x'>Book x</label>
                    <CustomInput {...register('x')} name='x' placeholder="x" />
                </div> */}
            </Box>

              <div style={buttons}>
                  <input style={input} type="submit" value="SUBMIT" />
                  <Button variant="outlined" color="error" disableElevation onClick={() => setIsOpen(!isOpen)}>Cancel</Button>
              </div>

        </form>
    </div>
  )
}

export default AddBookForm
