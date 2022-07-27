import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className='appContainer flex flex-row'>
      <div className='sidebar flex-[0.2] '>
        <Sidebar />
      </div>
      <div className='header flex-[0.80]'>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
