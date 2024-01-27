import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import MainPage from './pages/Home/MainPage';
import Nav from './Nav';
import Header from './Header';
import ChatListPage from './pages/Chat/chatListPage';
import ViewArticlePage from './pages/Article/ViewArticlePage';
import LoginPage from './pages/User/LoginPage';
import MyPage from './pages/User/MyPage';
import CreateAdoptPage from './pages/Article/CreateAdoptPage';
import Notification from './pages/Home/Notification';
import Register from './pages/User/Register';
import Back from './Back';
import Tag from './Tag';
import MapPage from './pages/Map/MapPage';
import ShelterMyPage from './pages/Article/ShelterMyPage';
import ShelterInfoPage from './pages/Article/ShelterInfoPage';
import SettingPage from './pages/User/SettingPage';
import FollowingPage from './pages/User/FollowingPage';
import AccountInfoPage from './pages/User/AccountInfoPage';
import EmailConfirm from './pages/User/EmailConfirm';
import GoogleRegister from './pages/User/GoogleRegister';
import CreateReviewPage from './pages/Article/CreateReviewPage';
import Message from './pages/Chat/Message';
import DeleteAccount from './pages/User/DeleteAccount';

// import GoogleRegister from './GoogleRegister';
// import Filter from './Filter';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Nav" element={<Nav />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/ChatListPage" element={<ChatListPage />} />
          <Route path="/ViewArticlePage" element={<ViewArticlePage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/MapPage" element={<MapPage />} />
          <Route path="/CreateAdoptPage" element={<CreateAdoptPage />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Back" element={<Back />} />
          <Route path="/CreateAdoptPage" element={<CreateAdoptPage />} />
          <Route path="/CreateReviewPage" element={<CreateReviewPage />} />
          <Route path="/Tag" element={<Tag />} />
          <Route path="/ShelterMyPage" element={<ShelterMyPage />} />
          <Route path="/ShelterInfoPage" element={<ShelterInfoPage />} />
          <Route path="/SettingPage" element={<SettingPage />} />
          <Route path="/FollowingPage" element={<FollowingPage />} />
          <Route path="/AccountInfoPage" element={<AccountInfoPage />} />
          <Route path='/EmailConfirm' element={<EmailConfirm />} />
          <Route path="/Message" element={<Message />} />
          <Route path="/DeleteAccount" element={<DeleteAccount />} />
          <Route path='/GoogleRegister' element={<GoogleRegister />} />
          <Route path='/CreateReviewPage' element={<CreateReviewPage />} />
  
          {/* <Route path='/Login' element={<Login />} /> */}
          {/* <Route path='/Filter' element={<Filter />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
