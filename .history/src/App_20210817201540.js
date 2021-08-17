import './App.css';
import 'antd/dist/antd.css'
import { Button,DatePicker } from 'antd';

function App() {
  return (
    <div className="App">
      <h1>antd version:</h1>
    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
    </div>
  );
}

export default App;
