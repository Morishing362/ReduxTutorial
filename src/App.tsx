import './App.css';

import { Counter } from './features/counter/Counter';
import { Users } from './features/users/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Users />
      </header>
    </div>
  );
}

export default App;
