import React, {useState, useEffect} from 'react';
import Axios from "axios";
import Container from "./Sections/Infected/Container";
import Menu from "./Sections/Menu/Menu";


function App() {
  
const [data, setData] = useState([]);
    
  useEffect(()=> {
      Axios.get("http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected")
      .then(res => {
          setData(res.data);
      })
      .catch(er => console.log(er));
  }, []);
  
const [showModal, setShowModal] = useState(false);

const toggleShowModal = () => setShowModal(!showModal);

  return (
    <div>
      <Menu></Menu>
      <Container toggleShowModal={toggleShowModal} 
                 data={data} 
                 showModal={showModal} 
                 setdata={setData}>
      </Container> 
    </div>
  );
}

export default App;
