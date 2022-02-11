import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
      </Routes>
      <GlobalStyle/>
    </BrowserRouter>
    </>
  );
}

export default App;
