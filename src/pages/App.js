import React, { useState, useEffect } from 'react';
import { Download } from '../api/download';
import "../App.css"
import io from "socket.io-client"

const socket = io('https://serveryouzay.zaylab.com/');


function App() {
  const [progress, setProgress] = useState(0);
  socket.on("progress", (data) => {
    setProgress(data.percentage)
  })
  const progressBarStyle = {
    width: `${progress}%`
  };
  return (
    
    <div className={`h-screen w-screen bg-[#010101]`}>
      <div className=" h-1/3 flex justify-center items-center">
        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-900 ">YOUZAY</h1>
      </div>
      
      <form className="w-full flex items-center justify-center">   
      <div className="relative w-full pl-5 pr-5">
          <input type="search" id="urlinput" className="block w-full p-4 pl-5 text-sm border-solid border-[#2f2f2f] border-2 bg-[#121212] placeholder-gray-400 text-white  rounded-lg outline-none" placeholder="Enter an url" required></input>
          <button onClick={Download} type="button" className="text-white absolute right-10 bottom-2.5 bg-violet-600 hover:bg-violet-900 transition-all focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700">Download</button>
      </div>
      </form>
      <div className="w-full flex items-center justify-center mt-10 pl-5 pr-5 flex-col">
        <div className="bg-[#121212] w-full h-5 rounded-lg relative flex justify-left items-center pl-2 pr-2">
          <div className="bg-violet-600 h-3 rounded-lg" style={progressBarStyle}></div>
        </div>
        <h2 className="text-[#121212] text-center text-2xl" id='error-message'></h2>
      </div>
    </div>
  );
}




export default App;
