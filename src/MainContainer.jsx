import React, { useState } from "react";
import Button from '@mui/material/Button';
function MainContainer(props){
   const [note,setnote]=useState({title:"",content:""});
   function Inputevent(event){
      setnote(function olditem(val){
         return {...val,[event.target.name]:event.target.value}
      })
   }
   function addCon(){
     props.passNote(note);
     setnote(()=>{return {title:"",content:""}});
   }
   return(<>
   <div className="main"> 
   <div>
   <form className="main_form">
      <input type="text" value={note.title} name="title" onChange={Inputevent} placeholder="Title"></input>
      <textarea rows="5" column="33" value={note.content} name="content" onChange={Inputevent} placeholder="Write a note..."></textarea>
      <div  className="add" > <Button onClick={addCon} variant="contained" size="small">
          Add
      </Button></div>
    </form>
   </div>
   </div>
   </>);
}
export default MainContainer;
