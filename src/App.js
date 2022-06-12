import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <div className="header">
        <label className="title">COVID 19 Dashboard</label>
        <nav className='nav'>
          <Link className='nav-item' to='/'>Home</Link>
          <Link className='nav-item' to='/policy'>Policy Data</Link>
          <Link className='nav-item' to='/patient'>Patient Data</Link>
          <Link className='nav-item' to='/case'>Case Data</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
