import React, {useState, useEffect} from 'react';
import Axios from "axios";
import Container from "./Infected/Container";
import CountryContainer from "./Country/CountryContainer";

const Main = () =>{
      
    const [data, setData] = useState([]);
        
    useEffect(()=> {
        let baseUrl = "http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected";
        Axios.get(baseUrl)
        .then(res => {
            setData(res.data);
        })
        .catch(er => console.log(er));
    }, []);

    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => setShowModal(!showModal);

    return(
        <div>
            <Container toggleShowModal={toggleShowModal} 
                    data={data} 
                    showModal={showModal} 
                    setData={setData}>
            </Container> 
            <CountryContainer></CountryContainer>
        </div>
    );
}


export default Main;