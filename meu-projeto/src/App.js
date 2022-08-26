import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Bark from './components/Bark';
import List from './components/List';

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
      <HelloWorld />
      <SayMyName nome="Guilherme" sobrenome="Rocha" />
      <SayMyName nome="Karina" sobrenome="Rocha" />
      <Bark bark={sayWoof(2)} />
      <List />
    </div>
  );
}

export default App;
