function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Estraneo.</h1>;
}

function formatName(user) {       
    //la funzione cambia i caratteri dei nomi e li unisce
  user.nome = user.nome.toUpperCase();
  user.cognome = user.cognome.toLowerCase();
  return user.nome + ' ' + user.cognome;
}

const user = {
  nome: 'Pippo',
  cognome: 'Pluto'
};

/*const element = (
  <h1>                          //per stamapare 'hello'
    Hello, {formatName(user)}
  </h1>
);*/

//  const element = <a href="https://www.reactjs.org"><h2>link</h2></a>    //per inserire dei link

//  const element = <img src={"http://www.zeusnews.it/img/4/8/1/6/2/0/026184-620-google-vedi-immagini.jpg"}></img>      //per inserire delle immagini

//i tal JSX posso contenere dei figli come in questo caso :
/*const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);*/
      
ReactDOM.render(
element, 
document.getElementById('root')
);
