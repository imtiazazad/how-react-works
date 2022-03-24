import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div>
    <Device name="uphone" price="14000"></Device>
    <Watch></Watch>
    </div>
  );
}

export default App;
