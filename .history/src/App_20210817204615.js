import './App.css';
import 'antd/dist/antd.css'
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';


function App() {
  return (
    <div className="App">
      <Navi/>
      <Dashboard/>
    </div>
  );
}

export default App;
