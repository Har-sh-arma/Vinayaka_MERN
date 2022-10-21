import Lspage from './components/Login_signup/Lspage';
import Spage from './components/Login_signup/Spage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lspage />} />
          <Route path="/Lspage" element={<Lspage />} />
          <Route path='/Spage' element={<Spage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
