// Il modo più semplice di definire un componente è quello di scrivere una funzione JavaScript
/*function Ciao(props) {
  return <h1>Ciao, {props.nome}</h1>;   // i componenti vanno con la lettera iniziale maiuscola
}*/

/*function App() {
  return (              //componenti composti
  <div>           
      <Ciao nome="Sara" />
      <Ciao nome="Pipppo" />
      <Ciao nome="Pluto" />
  </div>
  );
}*/

function Commento(props) {
  return (
    <div className="Commento">
      <Info-Utente utente={props.autore} />
        <Avatar utente={props.autore} />
      </div>
      <div className="Commento-testo">
        {props.testo}
      </div>
      <div className="Commento-data">
        {formatDate(props.data)}
      </div>
    </div>
  );
}

function Avatar(props) {      //estraimo il componente Avatar
  return (
    <img className="Avatar"
      src={props.utente.avatarUrl}
      alt={props.utente.nome}
    />
  );
}
      
function InfoUtente(props) {      // estraiamo il componente InfoUtente
  return (
    <div className="InfoUtente">
      <Avatar utente={props.utente} />
      <div className="InfoUtente-nome">
        {props.utente.nome}
      </div>
    </div>
  );
}

// const elemento = <Ciao nome="Sara" />;
        
ReactDOM.render(
  //elemento,
  /*<App />,      //renderizza tutto il componente      */
  document.getElementById('root')
);

// Le props posso essere usate SOLO in LETTURA
