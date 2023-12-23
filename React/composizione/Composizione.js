// Composizione 
/*        // Contenimento : Esistono componenti che si comportano da contenitori per altri componenti, non possono quindi sapere a priori quali componenti avranno come figli. 

function BordoFigo(props) {
  return (
    <div className={'BordoFigo BordoFigo-' + props.colore}>
      {props.children}
      </div>
  );
}

function FinestraBenvenuto() {
  return (
    <BordoFigo colore="blue">
      <h1 className="Finestra-titolo">Benvenuto!</h1>
      <p className="Finestra-messaggio">
        Ti ringraziamo per questa tua visita nella nostra
        nave spaziale!
      </p>
      </BordoFigo>
  );
}

ReactDOM.render(
  <FinestraBenvenuto />,
  document.getElementById('root')
);      */


// Specializzazioni (ridimensionamento della scritte automaticamente)
// In React, ciò si ottiene mediante composizione, dove componenti più “specifici” renderizzano la versione più “generica” configurandola mediante props

function BordoFigo(props) {
  return (
    <div className={'BordoFigo BordoFigo-' + props.colore}>
      {props.children}
    </div>
  );
}

function Finestra(props) {
  return (
    <BordoFigo colore="blue">
      <h1 className="Finestra-titolo">{props.titolo}</h1>
      <p className="Finestra-messaggio">
        {props.messaggio}
      </p>
      {props.children}
    </BordoFigo>
  );
}

class FinestraRegistrazione extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Finestra
        titolo="Programma di Esplorazione di Marte"
        messaggio="Qual'è il tuo nome?">
        <input
          value={this.state.login}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSignUp}>
          Registrami!
        </button>
      </Finestra>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Benvenuto a bordo, ${this.state.login}!`);
  }
}

ReactDOM.render(
  <FinestraRegistrazione />,
  document.getElementById('root')
);
