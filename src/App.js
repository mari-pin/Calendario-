import { useState } from "react";
import Header from "./Header";
import Modal from "./Modal";

function App() {
const[showModal, setShowModal]= useState(false) 
 const handleClick = () => {
   setShowModal(true)
 }


  return (
    <div className="App">
      
      <Header/>
      <button onClick={handleClick}>create event</button>
      {showModal && <Modal/>}
    </div>
  );
}

export default App;
