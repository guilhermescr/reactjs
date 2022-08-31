import '../index.css'

function Evento() {

  function meuEvento() {
    document.querySelector('p').innerHTML = "Evento disparado!";
  }

  return (
    <div>
      <p>Clique para disparar um evento</p>
      <button onClick={meuEvento} type="button">Ativar!</button>
    </div>
  )
}

export default Evento;