import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';

function App() {
  return (
    
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
        <Topbar></Topbar>
        <div class="container-fluid">
          <Dashboard></Dashboard>
        </div>
        </div>
        </div>
      </div>
    
  );
}

export default App;

