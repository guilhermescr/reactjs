import Frase from './Frase';

function HelloWorld() {

  return (
    <div>
      <Frase />
      <h2>Meu primeiro componente</h2>
      <input type="text" placeholder="Input Component" />
      <Frase />
    </div>
  );

}

export default HelloWorld;