import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from './hooks/useLocalStorage'

import './App.css';
import Home from './components/Home/Home'
import UserInfo from './components/UserInfo/UserInfo'

// interface IUserInfo {
//   login: string;
// }

function App() {

  const [userInfo, setUserInfo] = useLocalStorage([], 'userInfo')
  const [userRepo, setUserRepo] = useLocalStorage([], 'userRepo')

  function getUser (user: any) {
    setUserInfo(user)
  }

  function getRepo(repo: any) {
    setUserRepo(repo)
  }
  
  return (
    <div className='app'>
        <h5 style={{color: 'rgb(98 98 98)', margin: '20px 20px', textAlign: 'left', fontSize: '15px', width: '550px'}}>
        This application was made as a test task. <br/>
        Main point was implement application which search users by name, <br/>
        ability to select a user and find out more information about him. <br/>
        Search field was made according to principle lazy loading, <br/>
        this was made to send fewer requests on server.
         <br/>
        </h5>
        <h1>Github Searcher</h1>
        <Routes>
          <Route path='/' element={<Home getUser={getUser} getRepo={getRepo} />}/>
          <Route path='/user-info' element={<UserInfo user={userInfo} repo={userRepo}/>}/>
        </Routes>
    </div>
  );
}

export default App;
