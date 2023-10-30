// How this works:
// https://thecodingcowboy.notion.site/ContactForm-Input-Server-Calls-de72c6e29f3d4c8ba63703904eeeada3

import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import { Box } from "@mui/material";

import { server_calls } from "../../../api/server";
import { addBook } from "../../../redux/booksSlice";
import { useDispatch, useStore } from "react-redux";

interface AddBookFormProps {
  onClose: () => void;
  id?: string[];
  styles?: any;
}

const AddBookForm = (props: AddBookFormProps) => {
  const { register, handleSubmit } = useForm();
  const { inputFields, buttons, input } = props.styles;
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = async (data: any) => {
    try {
      await server_calls.create(data);
      dispatch(addBook(data));
      console.log("current state: ", store.getState());
      alert("You just created a book!\n" + JSON.stringify(data, null, 4));
      props.onClose();
      setTimeout( () => { window.location.reload() }, 500 )
    } catch (error) {
      console.error("Error creating the book:", error);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box style={inputFields}>
          <div style={inputFields}>
            <label htmlFor="title">Book Title</label>
            <CustomInput
              {...register("title")}
              name="title"
              placeholder="Python Crash Course"
            />
          </div>
          <div style={inputFields}>
            <label htmlFor="author">Book Author</label>
            <CustomInput
              {...register("author")}
              name="author"
              placeholder="Eric Matthes"
            />
          </div>
          <div style={inputFields}>
            <label htmlFor="publishing">Publishing Info</label>
            <CustomInput
              {...register("publishing")}
              name="publishing"
              placeholder="November 30, 2015 by No Starch Press"
            />
          </div>
          <div style={inputFields}>
            <label htmlFor="format">Format</label>
            <CustomInput
              {...register("format")}
              name="format"
              placeholder="560 pages, Paperback"
            />
          </div>
          <div style={inputFields}>
            <label htmlFor="isbn">ISBN</label>
            <CustomInput
              {...register("isbn")}
              name="isbn"
              placeholder="9781593276034 (ISBN10: 1593276036)"
            />
          </div>
          <div style={inputFields}>
            <label htmlFor="genre">Genre</label>
            <CustomInput
              {...register("genre")}
              name="genre"
              placeholder="Programming"
            />
          </div>
          <div style={inputFields}>
            <label htmlFor="imageSrc">Image LINK</label>
            <CustomInput
              {...register("imageSrc")}
              name="imageSrc"
              placeholder="https://websiteimages.com/images/BookCoverImage.jpg"
            />
          </div>
        </Box>

        <div style={buttons}>
          <input style={input} type="submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
// 12b14af90e57e2e977469169dcb81765989c56147259a84d
