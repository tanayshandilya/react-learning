import './styles/App.css';
import StatefulComponent from './components/StatefulComponent/statefulComponent';

function App() {
  return (
    <div className="app">
      <h1>Building A Stateful Component</h1>
      <div className="app-content">
        <StatefulComponent min={5} max={15} initialCount={10} />
      </div>
    </div>
  );
}

export default App;
