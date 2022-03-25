import React  from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import MainForm from "./components/MainForm";

const App = () => {
  return (
    <div className="container-fluid  text-dark d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      
     
      <BrowserRouter>
        <Routes>
          <Route index element={<MainForm />}/>
          <Route path="/chat/:roomId" element={<ChatRoom/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App