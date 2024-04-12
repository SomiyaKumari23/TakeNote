import React, { useState } from 'react';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import MainContainer from './MainContainer';
import Note from './Note';
function App(){
    const[addItem,setAddItem]=useState([]);
    function addNote(note){
        //alert("hi");
        setAddItem(function olditem(prevData){
          return [...prevData,note];
        });
      }
      function onDelete(id){
       // alert("hi");
       setAddItem((addItem)=>
        addItem.filter((currdata,ind)=>{
         return ind!==id;
        })
        )
      }
    return(
        <><Header/><MainContainer passNote={addNote}/>
        <div className='main2'>{addItem.map((val,index)=>{
        return<Note key={index} id={index} title={val.title} content={val.content} 
        deleteItem={onDelete}/>})}</div>
            <Footer/>
        </>
    )
}
export default App;