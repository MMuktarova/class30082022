import Header from './components/Header';
import ChangeText from './components/changeText/ChangeText';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header name="Alex" age={22} />
        <ChangeText/>
      </header>
    </div>
  );
}

export default App;
