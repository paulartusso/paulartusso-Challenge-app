import React, {useState} from 'react';
import Container from "./Sections/Infected/Container";
import Menu from "./Sections/Menu/Menu";
import Modal from "./Sections/Infected/Modal";


function App() {
  
const [showModal, setShowModal] = useState(false);

const toggleShowModal = () => setShowModal(!showModal)

  return (
    <div>
      <Menu></Menu>
      <Modal showModal={showModal} toggleShowModal={toggleShowModal}></Modal>
      <Container toggleShowModal={toggleShowModal} ></Container> 
    </div>
  );
}

export default App;
