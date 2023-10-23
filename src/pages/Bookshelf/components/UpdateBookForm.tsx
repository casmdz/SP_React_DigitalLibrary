// How this works:
// https://thecodingcowboy.notion.site/ContactForm-Input-Server-Calls-de72c6e29f3d4c8ba63703904eeeada3

// import { useSubmit } from 'react-router-dom'
// import { useDispatch, useStore } from 'react-redux';
import { useState, useEffect } from 'react';

import CustomInput from "./CustomInput";
import { set, useForm } from "react-hook-form";
import { Box } from "@mui/material";

import { server_calls } from "../../../api/server";
import "../../../redux/RootSlice";

import {Book} from '../hooks/booktype'

// import {useGetBooks} from '../hooks/FetchData'


interface UpdateFormProps {
  selectedBookId: string | null;
  styles?: any;
}

// type FormValues ={
//     book: Book;
// }

// const UpdateBookForm = ({ book, styles}: UpdateFormProps) => {
const UpdateBookForm = ( props : UpdateFormProps) => {
    
  const { register, handleSubmit, setValue } = useForm({});
//   const { register, handleSubmit, setValue } = useForm<FormValues>({});

  const { inputFields, buttons, input } = props.styles;
  const [bookData, setBookData] = useState<Book | null>(null);

//   const { getBookById } = useGetBooks()


  // const dispatch = useDispatch();
  // const store = useStore();
// https://react-hook-form.com/docs/useform/setvalue

useEffect(() => {
    if (props.selectedBookId) {
      // Use the getBookById function to fetch the book data
      server_calls.get()
        .then((data) => {
          setBookData(data);
          if (data) {
            setValue('title', data.title);
            setValue('author', data.author);
            setValue('publishing', data.publishing);
            setValue('format', data.format);
            setValue('isbn', data.isbn);
            setValue('genre', data.genre);
          }
        })
        .catch((error) => {
          console.error("Error fetching book data:", error);
        });
    }
  }, [props.selectedBookId, setValue]);




// useEffect(() => {
//   if (props.id) {
//     server_calls.get(props.id)
//       .then((data) => {
//         setBookData(data);
//         if (data) {
//           setValue("author", data.author);
//           setValue("publishing", data.publishing);
//           // Set values for other fields accordingly
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching book data:", error);
//       });
//   }
// }, [props.id, setValue]);

//   useEffect(()=> {
//     if (props.id) {
//         Object.entries(props.id).forEach(([key, value]) => {
//             setValue(key,value);
//         });
//     }
//   }, [props.id, setValue])


  //  typescript wants a type
  const onSubmit = (data: any) => {
    console.log("form submit button event");
    server_calls.update(data)
      .then((response) => {
        console.log("API response:", response);
      })
      .catch((error) => {
        console.error("Error creating data:", error);
      });
    console.log("just created ", data);
    alert(JSON.stringify(data));
    setTimeout(() => {window.location.reload();}, 500);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box style={inputFields}>
          <div style={inputFields}>
            <label htmlFor='title'>Book Title</label>
            <CustomInput {...register('title')} name='title' placeholder="Python Crash Course"/>
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
          {/* <div>
                    <label htmlFor='x'>Book x</label>
                    <CustomInput {...register('x')} name='x' placeholder="x" />
                </div> */}
        </Box>

        <div style={buttons}>
          <input style={input} type="submit" value="Update Book" />
        </div>
      </form>
    </div>
  );
};

export default UpdateBookForm;
