// import { Box, Button } from "@mui/material";
// import CustomInput from "./CustomInput";

// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useStore } from "react-redux";

// import { server_calls } from "../../../api/server";
// import "../../../redux/RootSlice";
// import { setBookData, addBook, updateBook } from "../../../redux/bookSlice";

// interface BookFormProps {
//   bookData?: BookData;
// }

// const BookForm = (props: BookFormProps) => {
//   const { register, handleSubmit } = useForm({});
//   const bookData = useSelector((state) => state.book.bookData);
//   const [formData, setFormData] = useState(bookData || {});

//   const dispatch = useDispatch();
//   const store = useStore();

//   const onSubmit = () => {
//     if (bookData) {
//       dispatch(updateBook(formData)); // Update the existing book
//     } else {
//       dispatch(addBook(formData)); // Add a new book
//     }
//   };


//   // import { addBook, updateBook } from '../redux/bookSlice'; //TODO update slice redux

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box style={inputFields}>

//           <div style={inputFields}>
//             <label htmlFor="title">Book Title</label>
//             <CustomInput {...register("title")} name="title" placeholder="Python Crash Course" />
//           </div>

//           {/* rest of inputs...  */}

        
//         </Box>

//         <div style={buttons}>
//           <input style={input} type="submit" value="SUBMIT" />
//           <Button variant="outlined" color="error" disableElevation onClick={() => setIsOpen(!isOpen)} >Cancel</Button>
//         </div>

//       </form>
//     </div>
//   );
// };

// export default BookForm;
