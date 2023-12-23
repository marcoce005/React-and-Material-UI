// un Elemento descrive cosa si vuole visionare a schermo
//const element = <h1><b>Hello, World</b></h1>
      
//ReactDOM.render(element, document.getElementById('root'));    //serve per reindirizzare un elemento al DOM

// Aggiornare un elemento Renderizzato

function tick() {
  const element = (
  <div>
      <h1>Hello, word!</h1>
      <h2>Sono le {new Date().toLocaleTimeString()}</h2>
      
      <ul align="left">
        <li>
          dd
        </li>
      </ul>
  </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);    //delay di 1 secondo
