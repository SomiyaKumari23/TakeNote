import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
function Note(props){
    function deleteContent(){
        props.deleteItem(props.id);
    }
    return(
        <>
        <div className="note">
            <h3 className="title">{props.title}</h3>
            <p className="content">{props.content}</p>
            <p onClick={deleteContent}><DeleteOutlinedIcon/></p>
        </div>
        </>
    )
}
export default Note;