import Home from "./core/Home";
import RegisterPage from "./core/RegistrationForm";
import React,{useEffect,createContext,useReducer,useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'



//export const userContext=createContext();
function Routing() {
//const {state,dispatch}=useContext(userContext);
  return (
    
      <Routes>
        {/* <Route exact path="/newstudent" element={<Newstudent />} /> */}
       
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<RegisterPage />}/>
      
      </Routes>
    
  );
}


function App() {

  return (
    // <userContext.Provider>
    <Router>
    <Routing/>
    </Router>
    // </userContext.Provider>
    );
}

export default App;
