

const RoomPage = ({setIsAuth,setRoom}) => {

//oturumu kapat
    const logout= ()=> {
        setIsAuth(false);
        localStorage.removeItem('token')
    }

    const handleSubmit= (e)=> {
        //sayfa yenilemeyi engelledik
        e.preventDefault();

        const room=e.target[0].value.toLowerCase();

        //girilecek odanın stati güncelledik
        setRoom(room)
    }

  return (

    <form onSubmit={handleSubmit} className="room-form">

        <h1>Chat Odası</h1>
        <p>Hangi Odaya Gireceksniz</p>
        <input type="text" placeholder="ör:haftasonu" required />

        <button>Odaya Gir</button>

        <button onClick={logout}>Çıkış Yap</button>

    </form>
  )
}

export default RoomPage