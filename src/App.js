import { useState } from 'react';
import './App.css';
import data from './data';
function App() {
  const [currimg,setCurrimg] = useState(0);
  const handleSilde = (n)=>{
    if(currimg+n<0)setCurrimg(data.length - 1);
    else if (currimg+n>=data.length)setCurrimg(0);
    else setCurrimg(currimg+n);
  }
  return (
    <div className="App">
      <div className='sl'>
          <img src={data[currimg].image} alt="" />
          <h1>{data[currimg].caption}</h1>
      </div>
      <div className='buttons'>
      <button onClick={()=>handleSilde(-1)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16"><path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/></svg></button>
      <button onClick={()=>handleSilde(1)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16"><path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/></svg></button>
      </div>
      <div className='dots'>
      {
        [...Array(data.length)].map((ele,key)=>{
          return(
            <svg style={(key===currimg)? {fill:"white"}:{fill:'black'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8"/></svg>
          )
        })
      }
    </div>
    </div>
  );
}

export default App;
