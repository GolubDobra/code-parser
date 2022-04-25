import './App.css';
import { Search } from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Сигнатурный анализатор кода</div>
        <Search />
      </header>
    </div>
  );
}

export default App;
