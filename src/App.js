import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
          onClick={()=>{setColor("red")}}
            className="outline-none px-4 py-2 rounded-full"
            style={{ backgroundColor: "red",cursor:"pointer" }}
          >
            Red
          </button>
          <button
          onClick={()=>{setColor("green")}}
            className="outline-none px-4 py-2 rounded-full"
            style={{ backgroundColor: "green",cursor:"pointer" }}
          >
            Green
          </button>
          <button
          onClick={()=>{setColor("white")}}
            className="outline-none px-4 py-2 rounded-full"
            style={{ backgroundColor: "white",cursor:"pointer" }}
          >
            White
          </button>
          <button
          onClick={()=>{setColor("gold")}}
            className="outline-none px-4 py-2 rounded-full"
            style={{ backgroundColor: "gold",cursor:"pointer" }}
          >
            Gold
          </button>
          <button
          onClick={()=>{setColor("orange")}}
            className="outline-none px-4 py-2 rounded-full"
            style={{ backgroundColor: "orange",cursor:"pointer" }}
          >
            Orange
          </button>
          <button
          onClick={()=>{setColor("pink")}}
            className="outline-none px-4 py-2 rounded-full"
            style={{ backgroundColor: "pink",cursor:"pointer" }}
          >
            Pink
          </button>
          <button
          onClick={()=>{setColor("yellow")}}
            className="outline-none px-4 py-2 rounded-full"
            style={{ backgroundColor: "yellow",cursor:"pointer" }}
          >
            Yellow
          </button>
          <button
          onClick={()=>{setColor("indigo")}}
            className="outline-none px-4 py-2 rounded-full"
            style={{ backgroundColor: "indigo",cursor:"pointer" }}
          >
            Indigo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
