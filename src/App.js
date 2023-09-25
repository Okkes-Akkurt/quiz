import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes} from 'react-router-dom';
import InputPage from './components/InputPage';
import FilterPage from './components/FilterPage';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <div className='App'>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<InputPage/>}/>
                  <Route path='/filter' element={<FilterPage/>}/>
                  <Route path='/result' element={<ResultPage/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
