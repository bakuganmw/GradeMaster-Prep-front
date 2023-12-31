import NavbarElement from "../components/Navbar";
import "./MainPage.css";
import Video from "../videos/background.mp4";
import { MdArrowRight, MdArrowForward } from "react-icons/md";
import { useState } from "react";
const MainPage = () => {
  const [hover, setHover] = useState(false);
  const logged = JSON.parse(localStorage.getItem('user'));
  let username;
  if(logged){
    username = logged.username;
  }
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div className="App">
      <NavbarElement />
      <div className="mainLook">
        <video
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
          className="videoLook"
        ></video>
      </div>
      <div className="headerContent">
        <h1>Witaj w GradeMaster</h1>
        {logged == null
        ? <div><p>Zrób konto i ucz się z nami</p>
        <div>
          <a href="/signup">
          <button onMouseEnter={onHover} onMouseLeave={onHover}>Zarejestruj się {hover ? <MdArrowForward/> : <MdArrowRight />}</button>
          </a>
        </div></div>
        : <h1 className="mt-4">{username}</h1>}
        
      </div>
    </div>
  );
};

export default MainPage;
