import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp";
import Lesson from "./pages/Lesson";
import Leaderboard from "./pages/Leaderboard";
// import Quiz from "./pages/quiz";
import Profile from "./pages/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return(
    <Router>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/signin" element={<SignIn/>}/>
        <Route path ="/signup" element={<SignUp/>}/> 
        <Route path ="/quiz" element={<Lesson/>}/>
        <Route path ="/leader" element={<Leaderboard/>}/>
        <Route path ="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
