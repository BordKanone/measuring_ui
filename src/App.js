import React, { useEffect, useState } from "react"; 
import GraphMeasuring from "./components/GraphMeasuring";
import './styles/App.css'
import Header from "./components/UI/Header";
import FormButton from "./components/UI/FormButton/FormButton";
import GetMessage from "./API/GetMessage";

export function App() {

  const [message, setMessage] = useState()


  // async function fetchMessage(){
  //     const response = await GetMessage.getAll();
  //     setMessage(response.area.points[1].channels[1])
  // }

  useEffect(()=>{
    GetMessage.getAll().then(res => res.json()).then(res=>{
      console.log('callback', res)
      if(res.area){
        setMessage(res.area.points[1].channels[1])
      }
    })
  },[])

  return (
    <div className="App">
        <div className="header">
          <Header/>
        </div>
        <div>
          <FormButton style={{marginTop: '15px'}} onClick={fetchMessage}>
                  Поулчить данные
          </FormButton>
          <FormButton style={{marginTop: '15px'}}>
                  Графический вид
          </FormButton>
          <div>
            <FormButton style={{marginTop: '15px'}}>
                    Табличный вид
            </FormButton>
          </div>
        </div>
        <div className="graphContainer">
          
          <div>
            {!!message && <GraphMeasuring channel={message} />}
          </div>
        </div>
    </div>
    
  );
}