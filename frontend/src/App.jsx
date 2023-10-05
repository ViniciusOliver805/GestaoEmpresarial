//import para usarmos o rearoveitamento de estruturas
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
            <Outlet />


    </div>
  );
}

export default App;
