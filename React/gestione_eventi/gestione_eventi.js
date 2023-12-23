import React from 'react';
import ReactDOM from 'react-dom';

/*  //  esempio pulsante
<button onClick={attivaLasers}>     // camelCase
  Attiva Lasers
</button> */

// in React non è possibile ritornare 'false' Bisogna chiamare 'preventDefault'

/*  // esempio pulsante che restituisce 'false'
function Form(){
  function handleSubmit(e) {      // 'e' è un evento specifico
    e.preventDefault();
    console.log('Hai cliccato Invia');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Invia</button>
    </form>
  );
} */


/*    // Interruttore renderizza un pulsante che consente all’utente di alternare gli stati “Acceso” e “Spento”:

class Interruttore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {acceso: true};

    // Necessario per accedere al corretto valore di `this` all'interno della callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      acceso: !state.acceso,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.acceso ? 'Acceso' : 'Spento'}
      </button>
    );
  }
}

ReactDOM.render(
  <Interruttore />,
  document.getElementById('root')
);    */


// Passare argomenti ai Gestori Eventi

<button onClick={(e) => this.deleteRow(id, e)}>       // usando al funzione freccia
  Elimina riga
  </button>

<button onClick={this.deleteRow.bind(this, id)}>      // usando 'Function.prototype.bind'
  Elimina riga
  </button>
