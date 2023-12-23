/*      //  Renderizzare Liste di Componenti

const numeri = [1, 2, 3, 4, 5];
const lista = numeri.map((numero) =>      // eseguiamo un ciclo nell'array con 'map()'
    <li>{numero}</li>
);

ReactDOM.render(
  <ul>{lista}</ul>,       // includiamo l'array nell'elemento '<ul>' e renderizziamo
  document.getElementById('root')
);      */


//  Chiavi
//  Le chiavi aiutano React a identificare quali elementi sono stati aggiornati, aggiunti o rimossi
/*
const numeri = [1, 2, 3, 4, 5];
const lista = numeri.map((numero) =>      // eseguiamo un ciclo nell'array con 'map()'
    <li key={numero.toString()}>
       {numero}
    </li>
);      */

// Estrarre Componenti con Chiavi

function Numero(props) {
  // Non è necessario specificare la chiave
  return <li>{props.valore}</li>;
}

function ListaNumeri(props) {
  const numeri = props.numeri;
  const lista = numeri.map((numero) =>
   // La chiave, in questo caso, deve essere specificata all'interno dell'array
      <Numero key={numero.toString()} valore={numero} />
   );
  return (
  <ul>
    {lista}
  </ul>
 );
}

const numeri = [1, 2, 3, 4, 5];
ReactDOM.render(
  <ListaNumeri numeri={numeri} />,
  document.getElementById('root')
);

// Le Chiavi Devono Essere Uniche Tra Gli Elementi Adiacenti
// non hanno bisogno di essere uniche a livello globale. Possiamo usare le stesse chiavi quando creiamo due array diversi:
