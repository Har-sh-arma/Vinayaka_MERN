import Lspage from './components/Login_signup/Lspage';
import Spage from './components/Login_signup/Spage';
import Ec from './components/MainFunc/ExamCreator'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lspage />} />
          <Route path="/Lspage" element={<Lspage />} />
          <Route path='/Spage' element={<Spage />} />
          <Route path='/ExamCreator' element={<Ec />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
