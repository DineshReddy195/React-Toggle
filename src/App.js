import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Content from './Content';



    // className={theme?"dark":"light"}
    // {()=>setTheme(!theme)}
        
          
  function App(){
    return(
      <div>
      {/* <Content  heading="ThE WET Codbase" time="Sunday 4th, 2020 11 min read" para="come waste your time with me"/>
       <Content heading="Goodby, Clean Code" time="Friday 22nd, 2019 5 min read" para="Let clan code guide you. Then let it go."/>
       <Content heading="My Decade In Review" time="Saturday 11th, 2018 5 min read" para="A personal reflection."/>      <Content heading="What Are The React Term Principles" time="Thursday 4th, 2015 5 min read"/> */}
       <Content/>
      </div>
    )
  }
  
  export default App;
