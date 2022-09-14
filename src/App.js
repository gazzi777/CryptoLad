import './App.css';
import Title from './Components/Title/Title';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './Components/Calculator/Calculator';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element={<Title state={props.state}/>} />
            <Route path="/calculator" element={<Calculator/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
