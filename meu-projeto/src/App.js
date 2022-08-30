import './App.css';
import Evento from './components/Evento';

function App() {

  function sayWoof(number) {
    let barkSound = "";
    for (let i = 1; i <= number; i++) {
      barkSound += "Woof ";
      if (i === number) {
        barkSound += "!";
      }
    }
    return barkSound;
  }

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento />
    </div>
  );
}

export default App;
