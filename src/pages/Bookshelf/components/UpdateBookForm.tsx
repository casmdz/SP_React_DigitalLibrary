// How this works:
// https://thecodingcowboy.notion.site/ContactForm-Input-Server-Calls-de72c6e29f3d4c8ba63703904eeeada3

import { useEffect } from 'react';

import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import { Box } from "@mui/material";

import { server_calls } from "../../../api/server";
import { Book } from '../hooks/booktype'
import { useDispatch, useStore } from 'react-redux';
import { updateBook } from '../../../redux/booksSlice';



interface UpdateFormProps {
  selectedBookId: number | null;
  styles?: any;
  initialValues: Partial<Book>;
  onClose: () => void;
}


const UpdateBookForm = (props: UpdateFormProps) => {

  const { register, handleSubmit, setValue } = useForm();
  const { inputFields, buttons, input } = props.styles;

  const dispatch = useDispatch();
  const store = useStore();
  // https://react-hook-form.com/docs/useform/setvalue


  useEffect(() => {
    if (props.initialValues) {
      setValue('title', props.initialValues.title);
      setValue('author', props.initialValues.author);
      setValue('publishing', props.initialValues.publishing);
      setValue('format', props.initialValues.format);
      setValue('isbn', props.initialValues.isbn);
      setValue('genre', props.initialValues.genre);
      setValue('imageSrc', props.initialValues.imageSrc);
    }
  }, [props.initialValues, setValue]);

  const onSubmit = async (data: any) => {
    try {
      if (props.selectedBookId !== null) {
        await server_calls.update(props.selectedBookId, data);
        dispatch(updateBook({ id: props.selectedBookId, updatedData: data }));
        console.log("current state: ", store.getState());
        alert("Your book was updated!\n" + JSON.stringify(data, null, 4));
        // todo reload the content
        props.onClose();
        setTimeout( () => { window.location.reload() }, 500 )
      } else {
        console.error("Selected book ID is null.");
      }
    } catch (error) {
      console.error("Error updating the book:", error);
    }
  };
  


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box style={inputFields}>
          <div style={inputFields}>
            <label htmlFor='title'>Book Title</label>
            <CustomInput {...register('title')} name='title' placeholder="Python Crash Course" />
          </div>
          <div style={inputFields}>
            <label htmlFor="author">Book Author</label>
            <CustomInput {...register("author")} name="author" />
          </div>
          <div style={inputFields}>
            <label htmlFor="publishing">Publishing Info</label>
            <CustomInput {...register("publishing")} name="publishing" />
          </div>
          <div style={inputFields}>
            <label htmlFor="format">Format</label>
            <CustomInput {...register("format")} name="format" />
          </div>
          <div style={inputFields}>
            <label htmlFor="isbn">ISBN</label>
            <CustomInput {...register("isbn")} name="isbn" />
          </div>
          <div style={inputFields}>
            <label htmlFor="genre">Genre</label>
            <CustomInput {...register("genre")} name="genre" placeholder="Programming" />
          </div>
          <div style={inputFields}>
            <label htmlFor='imageSrc'>Image LINK</label>
            <CustomInput {...register('imageSrc')} name='imageSrc' placeholder="https://websiteimages.com/images/BookCoverImage.jpg" />
          </div>

        </Box>

        <div style={buttons}>
          <input style={input} type="submit" value="Update Book" />
        </div>
      </form>
    </div>
  );
};

export default UpdateBookForm;
