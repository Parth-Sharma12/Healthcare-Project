import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {SignIn} from './components/SignIn.js'
import {SignUp} from './components/SignUp.js'
import {DoctorHome} from './components/DoctorHome.js'
import {AdminPanel} from './components/ADMIN/JS/AdminPanel.js'
import {Profile} from './components/ADMIN/JS/Profile.js'
import { FlaggedPosts } from './components/MODERATOR/JS/FlaggedPosts.js';
import PostCard from './components/MODERATOR/JS/PostCard.js';
import { QnA } from './components/MODERATOR/JS/QnA.js';
import QuestionAnswerCard from './components/MODERATOR/JS/QuestionAnswerCard.js';
import { Home } from './components/Responder/JS/Home.js';
import { Unanswered } from './components/Responder/JS/Unanswered.js';
import AnsweringCard from './components/Responder/JS/AnsweringCard.js';
function App() {
  return (
    <Router>
    <Routes>
        {/* Moderator
        <Route path="/" exact element={<FlaggedPosts/>} />
        <Route path="/QnA" exact element={<QnA/>}/> */}

   Responder
      <Route path="/" exact element={<Home/>} />
      <Route path="/Unanswered" exact element={<Unanswered/>} />
  
    </Routes>
  </Router>
  );
     {/* <Route path="/signup" element={<SignUp/>} />
      <Route path="/DoctorHome" element={<DoctorHome/>}/> */}
}
export default App;
