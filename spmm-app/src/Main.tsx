import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import MigrationRequestsHistoryPage from './Pages/MigrationRequestsHistoryPage/MigrationRequestsHistoryPage';
import MigrationRequestsPage from './Pages/MigrationRequestsPage/MigrationRequestsPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';


const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path='/migrationRequests' element={<MigrationRequestsPage/>}></Route>
      <Route path='/migrationRequestsHistory' element={<MigrationRequestsHistoryPage/>}></Route>
    </Routes>
  );
}


export default Main;