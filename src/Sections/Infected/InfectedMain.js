import React, {useState, useEffect} from 'react';
import Axios from "axios";
import Container from "./Container";

const InfectedMain = () =>{
      
    const [data, setData] = useState([]);
    const [totalInfected, setTotalInfected] = useState(0);
        
    useEffect(()=> {
        let baseUrl = "http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected";
        Axios.get(baseUrl)
        .then(res => {
            setData(res.data);
        })
        .catch(er => console.log(er));
    }, []);

    useEffect(()=> setTotalInfected(data.length), [data.length]);

    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => setShowModal(!showModal);

    const orderByAge = () =>{
        setData([...data.sort((a, b) => {
            return a.age - b.age
        })]);
        
    };

    return(
        <div>
            <Container 
                toggleShowModal={toggleShowModal} 
                data={data} 
                showModal={showModal} 
                setData={setData}
                totalInfected={totalInfected}
                orderByAge={orderByAge}>
            </Container>   
        </div>
    );
}


export default InfectedMain;