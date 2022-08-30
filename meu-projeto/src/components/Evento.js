import '../index.css'

function Evento() {

  function meuEvento() {
    document.querySelector('p').innerHTML = "Evento disparado!";
  }

  function mudaCorDosElementos() {
    const body = document.querySelector('body');
    body.classList.toggle("dark_color");
  }

  return (
    <div>
      <p>Clique para disparar um evento</p>
      <button onClick={meuEvento} type="button">Ativar!</button>
      <p>Clique para mudar cor de fundo</p>
      <button onClick={mudaCorDosElementos} type="button">Mudar Cor dos Elementos</button>
    </div>
  )
}

export default Evento;