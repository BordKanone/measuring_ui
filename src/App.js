import React, { useEffect, useState } from "react"; 
import './styles/App.css'
import Header from "./components/UI/Header";
import CustomButton from "./components/UI/CustomButton";
import GetMessage from "./API/GetMessage";
import { ViewProvider } from "./components/ViewProvider";

export function App() {

  const [view, setView] = useState('graph')
  const [points, setPoints] = useState([])
  const [area, setArea] = useState({name:'', inn:''})
  const [sender, setSender] = useState({name:'', code:''})
  const [ messageDate, setMessageDate] = useState({datetime: '', day:''})

 


  useEffect(()=>{
    GetMessage.getAll().then(res =>{
      console.log('callback', res)
      if(res.area){
        setPoints(res.area.points)
        setArea({name:res.area.name, inn:res.area.inn})
        setSender({name:res.sender_name, code:res.sender_code})
        setMessageDate({datetime:res.datetime, day:res.day})
      }
    })
  },[])


  const changeView = (e)=>{
    setView(e.target.id)
  }

  return (
    <div className="App">
        <div className="header">
          <Header sender={sender} messageDate={messageDate} area={area}/>
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