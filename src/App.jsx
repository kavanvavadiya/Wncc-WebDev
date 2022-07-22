// import { useState } from 'react'
import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar'

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
  Link
} from "react-router-dom";
import Music from './Components/Music';
import Sports from './Components/Sports';
import Tech from './Components/Tech';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Alert from './Components/Alert';

let initLists;
function App() {
  const [count, setCount] = useState(0)
  if (localStorage.getItem("lists") === null) {
    initLists = [];
  }
  else {
    initLists = JSON.parse(localStorage.getItem("lists"));
  }

  const addList = (type, name,email,roomNo) => {
    console.log("I am adding this list",type, name,email,roomNo)
    let sno;
    if (lists.length === 0) {
      sno = 0;
    }
    else {
      sno = lists[lists.length - 1].sno + 1;
    }
    const myList = {
      sno: sno,
      type:type,
      name:name,
      email:email,
      roomNo:roomNo
    }
    setlists([...lists, myList]);
    console.log(myList);
  }

  const [lists, setlists] = useState(initLists);
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists])
  const onDelete = (list) => {
    console.log("I am ondelete of todo", list);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    let sure = confirm("Are you sure?")
    if(sure){

      setlists(lists.filter((e) => {
        return e !== list;
      }));
      console.log("deleted", lists)

      localStorage.setItem("lists", JSON.stringify(lists));
    }
    
  }
  
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(() => {
      setAlert(null);
    },5000)
}

  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          
          <Route exact path="/" element={<Home lists={lists} onDelete={onDelete} />}/>
          <Route exact path="/music" element={<Music addList={addList} showAlert={showAlert} />}/>
          <Route exact path="/sports" element={<Sports addList={addList} showAlert={showAlert} />}/>
          <Route exact path="/tech" element={<Tech addList={addList} showAlert={showAlert} />}/>
          <Route exact path="/ContactUs" element={<ContactUs  />}/>
        </Routes>
      </Router>
      </>
      )
}

      export default App
