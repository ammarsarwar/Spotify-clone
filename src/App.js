import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='appContainer flex flex-col'>
      <div className='flex flex-row'>
        <div className='sidebar flex-[0.13]'>
          <Sidebar />
        </div>
        <div className='header flex-[0.87]'>
          <Header />
          <Main />
        </div>
      </div>
        <div className='footer '>
          <Footer />
        </div>
    </div>
  );
}



export default App;
