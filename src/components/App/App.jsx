import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import authOperations from "redux/auth/auth-operations";
import PrivateRouts from "components/Routs/PrivateRouts";
import PublicRouts from "components/Routs/PublicRouts";
import authSelectors from "redux/auth/auth-selectors";

const HomeView = lazy(() => import('views/Home/Home'));
const Register = lazy(() => import('views/Register/Register'));
const Login = lazy(() => import('views/Login/Login'));
const Contacts = lazy(() => import('views/Contacts/Contacts'));
const NotFound = lazy(() => import('views/NotFound/NotFound'));

export const App = () => {
   const dispatch = useDispatch();
   const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

   useEffect(() =>{
      dispatch(authOperations.fetchCurrentUser());
      }, [dispatch])
      
   return (
      !isFetchingCurrentUser && (
    <Routes>
        <Route path='/' element={ <Layout/> }>

        <Route index element={ 
        <PublicRouts>
         <HomeView /> 
         </PublicRouts>
         }/>

        <Route path='/register' element={
        <PublicRouts restricted>
          <Register />
       </PublicRouts>
      }  />

        <Route path='/login' element={
        <PublicRouts restricted >
          <Login/>
        </PublicRouts>
      }/>

        <Route path="/contacts" element={
            <PrivateRouts>
               <Contacts/>
            </PrivateRouts> 
          }/>
         <Route path="*" element={ <NotFound/> } />
      </Route>
      </Routes>
      )
   );
  };
  
