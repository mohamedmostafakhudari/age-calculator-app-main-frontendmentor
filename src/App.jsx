import { useState } from "react";
import Main from "./sections/Main";

function App() {
  return (
    <div className="App font-body bg-secondarybg min-h-screen grid place-items-center relative">
      <Main />
      <footer className="absolute bottom-0 inset-x-0 bg-white text-center">
        <p>
          &copy; <span>Mohamed Mostafa</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
