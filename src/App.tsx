import FirstComponent from './components/FirstComponent/firstComponent';
import AvatarImg from './assets/images/avatar.jpeg';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <h1>Building Our First Component</h1>
      <div className="app-content">
        <FirstComponent firstName="Tanay" lastName="Shandilya" img={AvatarImg} />
      </div>
    </div>
  );
}

export default App;
