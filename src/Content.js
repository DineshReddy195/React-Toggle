import React,{useState} from 'react';


export default function Content({heading,time,para}) {

    const[theme, setTheme]=useState(true);

    const handleToggle=()=>{
        setTheme(!theme)
    }
  return (
    <div id="div1" className={theme?"light":"dark"}>
            <div id="nav">
                 <section className="text">
                     <h1>Overreacted</h1>
                 </section>
                 <section>   
                     <button className="btn" onClick={handleToggle}>Toggle</button>
                 </section>
             </div>
             <div className='content'>
             <div className='div'>
              <h2>The WET Codbase</h2>
              <span className='date'>Sunday 4th, 2020 11 min read</span>
             <p className='para'>come waste your time with me</p>
             </div>
             <div className='div2'>
             <h2>Goodby, Clean Code</h2>
             <span className='date'>Friday 22nd, 2019 5 min read</span>
             <p className='para'>Let clan code guide you. Then let it go</p>
             </div>
             <div className='div3'>
             <h2>My Decade In Review</h2>
             <span className='date'>Saturday 11th, 2018 5 min read</span>
             <p className='para'>A personal reflection.</p>
             </div>
             <div className='div4'>
             <h2>What Are The React Term Principles</h2>
             <span className='date'>Thursday 4th, 2015 5 min read</span>
             {/* <p className='para'>Let clan code guide you. Then let it go</p> */}
             </div>
         </div>
             </div>
  )
}

  
