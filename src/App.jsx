import { useState } from "react"
import LoginPage from "./page/LoginPage"
import RoomPage from "./page/RoomPage";
import ChatPage from "./page/ChatPage";


const App = () => {

  const [isAuth, setIsAuth]= useState(localStorage.getItem('token'))
  //kullanıcın hangi odaya girdğinin statei
   const [room, setRoom]= useState(null)
  
  //YETKİSİ YOKSA GİRŞ SAYAFASINA YÖNLENDİR
  if(!isAuth) return <LoginPage setIsAuth ={setIsAuth}/>;

  //YETKİ  VARSA ODA SECME SAYFASI
 return  (
  
  <div className="container">
    {room ? (
       <ChatPage room= {room} setRoom= {setRoom} />
    )
  : (
<RoomPage setIsAuth={setIsAuth} setRoom={setRoom}/>
  )}
     
  </div>
 )

 

}
export default App