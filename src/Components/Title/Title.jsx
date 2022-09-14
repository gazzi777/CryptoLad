import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Post from "../Post/Post";
import classes from "./Title.module.css"

const Title = (props) => {

  // let state = {
  //   postData: [
  //       { id: 1, name: "classes.contnent" },
  //       { id: 2, name: "classes.sdsd" }
  //   ]

  //}

  return (
    
    // СДЕЛАТЬ ССЫЛКОЙ ВНИЗ
    <div>
      <Header/>
      <div className={classes.title}>
        <div className={classes.category}>For Lad24</div>
        <h1 className={classes.hero_title}>Cryptocurrency and currency in real time</h1>
        <p className={classes.scroll}>scroll down</p>
      </div>
      <Post state={props.state.postData}/>
      <Footer/>
    </div>
  )
}

export default Title;