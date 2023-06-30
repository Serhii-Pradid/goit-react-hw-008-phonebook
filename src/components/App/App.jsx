import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeView from "views/Home/Home";
import Login from "views/Login/Login";
import Register from "views/Register/Register";
import Contacts from 'views/Contacts/Contacts'
import NotFound from "views/NotFound/NotFound";

export const App = () => {
      
   return (
    <Routes>
        <Route path='/' element={ <Layout/> }>
        <Route index element={ <HomeView/> }/>
        <Route path='/register' element={ <Register/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/contacts' element={ <Contacts/>} />
        <Route path="*" element={ <NotFound/>} />
      </Route>
      </Routes>
   );
  };
  
