import React, { useEffect, useState } from "react"; 
import './styles/App.css'
import Header from "./components/UI/Header";
import CustomButton from "./components/UI/CustomButton";
import GetMessage from "./API/GetMessage";
import { ViewProvider } from "./components/ViewProvider";

export function App() {

  const [view, setView] = useState('graph')
  const [points, setPoints] = useState([])
  const [areaInfo, setAreaInfo] = useState([])

 


  useEffect(()=>{
    GetMessage.getAll().then(res =>{
      console.log('callback', res)
      if(res.area){
        setPoints(res.area.points)
      }
    })
  },[])


  const changeView = (e)=>{
    setView(e.target.id)
  }

  return (
    <div className="App">
        <div className="header">
          <Header/>
        </div>
        <div>
          <CustomButton style={{marginTop: '15px'}} onClick={changeView} id='graph'>
                  Графический вид
          </CustomButton>
          <div>
            <CustomButton style={{marginTop: '15px'}} onClick={changeView} id='table'>
                    Табличный вид
            </CustomButton>
          </div>
        </div>
        <div className="graphContainer">
          <div>
            {!!points && <ViewProvider view={view} points={points}/>}
          </div>
        </div>
    </div>
    
  );
}