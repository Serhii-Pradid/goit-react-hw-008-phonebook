import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeView from "views/Home";
import Login from "views/Login";
import Register from "views/Register";
import Contacts from "views/Contacts/Contacts";
import NotFound from "views/NotFound";

export const App1 = () => {
      
   return (
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<HomeView/>} />
        <Route path='/register' element={ <Register />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path="*" element={<NotFound />} />
      </Route>
      </Routes>
   );
  };
  
