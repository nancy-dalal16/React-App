import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer1 from "./Footer1";
import { Switch, Redirect, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const App = () => {
  // const [addItems, setItems] = useState([]);
  // const addNote = (note) => {
  //   setItems((predata) => {
  //     return [...predata, note];
  //   });
  // };

  // const onDelete = (id) => {
  //   setItems((olditems) => {
  //     olditems.filter((arr, index) => {
  //       return index !== id;
  //     });
  //   });
  // };
  return (
    <>
      {/* <Header />

      <CreateNote passNote={addNote} />

      {addItems.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer1 />
    </>
  );
};

export default App;
