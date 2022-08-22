import logo from './logo.svg';
import './App.css';

function App() {
  const myName = 'Guilherme';

  const img = "https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png";

  function fullName(name, surname) {
    return `Hello, ${name} ${surname}! How are you doing?`;
  }

  return (
    <div className="App">
      <h1>Minha primeira aplicação em React</h1>
      <p>{fullName("Guilherme", "Rocha")}</p>
      <img src={img} alt="A smiley dog" />
    </div>
  );
}

export default App;
