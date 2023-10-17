import { Box, Typography, Modal, Divider } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import React from 'react';
import AddBookForm from "./AddBookForm";
import UpdateBookForm from "./UpdateBookForm";


export const styles = {
    wrapper: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    },
    inputFields: {
        display: 'flex',
        flexDirection: 'column',
        // margin:"none",
        // marginTop: '20px',
        // marginBottom: '5px',
        // '.MuiInputRoot': {
        //     marginBottom: '2px',
        // },
        gap: '1em',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'end',
        gap: 4,
        marginTop: '1rem',
        // variant: 'contained',

    },
    input: {
        background: "#ec5990",  // pink
        color: 'white',
        padding: '10px',
        borderRadius: '6px',
    }

};

interface BookModalProps {
    open: boolean;
    onClose?: () => void;
    formType?: "add" | "update" | "delete" | null;
    id?: string[];
    children?: React.ReactNode;
}


const BookModal = ( props: BookModalProps ) => {
    // if ( !props.open ) return (<></>)

    let title="";
    let description="";
    let formContent = null;


    switch (props.formType) {
        case "add":
          title = "Add Book";
        //   description = "Add a new book.";
          formContent = <AddBookForm styles={styles} />;
          break;
        case "update":
          title = "Update Book You Have";
          description = `Still a work in progress`; // 
          formContent = <UpdateBookForm />;
          // 
          break;
        default:
          title = "Book Form";
          description = "Fill out the details according to the button you clicked"; 
          break;
      }




return (
    <Modal open={props.open} onClose={props.onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box sx={styles.wrapper} onClick={(e) => { e.stopPropagation() }}>
        <div className='grid grid-cols-2 gap-1 '>
          <Typography id="modal-modal-title" variant="h5" component="h2" className="col-start-1 self-end">
            {title}
          </Typography>

          <IconButton aria-label="close" onClick={props.onClose} className="col-end-auto justify-self-end">
            <CloseRoundedIcon />
          </IconButton>
        </div>
        <Divider />

        <Typography className="break-all" id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>

        {formContent}

      </Box>
    </Modal>
    )
}

export default BookModal
