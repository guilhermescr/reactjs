import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Bark from './components/Bark';
import BestObject from './components/BestObject';

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

  function getYear() {
    let year = new Date().getFullYear();
    return year;
  }

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Guilherme" sobrenome="Rocha" />
      <SayMyName nome="Karina" sobrenome="Rocha" />
      <Bark bark={sayWoof(2)} />
      <BestObject date={getYear()} />
    </div>
  );
}

export default App;
