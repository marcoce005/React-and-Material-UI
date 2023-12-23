/*      // Renderizzazione Condizionale

class ControlloLogin extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {utenteAutenticato: false};
  }
  
  handleLoginClick() {
    this.setState({utenteAutenticato: true});
  }
  handleLogoutClick() {
    this.setState({utenteAutenticato: false});
  }
  
  render() {
    const utenteAutenticato = this.state.utenteAutenticato;
    let bottone;
    
    if (utenteAutenticato) {
      bottone = (
        <BottoneLogout onClick={this.handleLogoutClick} />
      );
    } else {
      bottone = (
        <BottoneLogin onClick={this.handleLoginClick} />
      );
  }
  
    return (
       <div>
          <Benvenuto utenteAutenticato={utenteAutenticato} />
          {bottone}
        </div>
      );
    }
  }

function BottoneLogin(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function BottoneLogout(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function BenvenutoUtente(props) {
  return <h1>Bentornato/a!</h1>;
}

function BenvenutoOspite(props) {
  return <h1>Autenticati, per favore</h1>;
}

function Benvenuto(props) {
  const utenteAutenticato = props.utenteAutenticato;
  if (utenteAutenticato) {
    return <BenvenutoUtente />;
  }
  return <BenvenutoOspite />;
}

ReactDOM.render(
  <ControlloLogin />,
  document.getElementById('root')
);      */


/*      // Condi<ione 'IF' inline con Operatore Logico && 'and'

function CasellaDiPosta(props) {
  const messaggiNonLetti = props.messaggiNonLetti;
  
  return (
    <div>
      <h1>Ciao</h1>
      {messaggiNonLetti.length > 0 && (
        <h2>
          Hai {messaggiNonLetti.length} messaggi non letti.. 
        </h2>
      )}
      </div>
    );
}

// Funziona perché in JavaScript, true && espressione si risolve sempre in espressione, mentre false && espressione si risolve sempre in false.

const messaggi = ['messaggio1', 'messaggio2', 'messaggio3', 'messaggio4'];
ReactDOM.render(
  <CasellaDiPosta messaggiNonLetti={messaggi} />,
  document.getElementById('root')
);        */


// Prevenire la Renderizzazione di un componente
// In alcuni rari casi potresti volere che un componente sia nascosto anche se viene renderizzato da un altro componente. Per ottenere questo risultato devi ritornare 'null' al posto del suo output di renderizzazione.

function MessaggioAvviso(props) {
  if (!props.attenzione) {
    return null;
  }

  return <div className="warning">ATTENZIONE!</div>;
}

class Pagina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mostraAvviso: true};
    this.handleToggleClick = this.handleToggleClick.bind(
      this
    );
  }

  handleToggleClick() {
    this.setState(state => ({
      mostraAvviso: !state.mostraAvviso,
    }));
  }

  render() {
    return (
      <div>
        <MessaggioAvviso attenzione={this.state.mostraAvviso} />
        <button onClick={this.handleToggleClick}>
          {this.state.mostraAvviso ? 'Nascondi' : 'Mostra'}
        </button>
      </div>
    );
  }
}

//    Ritornando null dal metodo render di un componente, non modifica il comportamento dei metodi di lifecycle del componente. Ad esempio componentDidUpdate viene ancora chiamato.

ReactDOM.render(
  <Pagina />,
  document.getElementById('root')
);
