/*function Clock(props) {
  return (
    <div>
      <h1>Ciao, mondo!</h1>
      <h2>Sono le {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}*/

/*  OROLOGIO CON I METODI
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  // metodi lifecycle 'metodi del ciclo di vita'
  componentDidMount() {
     this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {          // l'orologia scatta ogni secondo
    this.setState({
      date: new Date()
    });
  }
  
  render() {
    return (
      <div>
        <h1>Ciao, mondo!</h1>
       <h2>Sono le {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
  */

// gli STATI : 'setState()'

// Sbagliato non ri-rendenderizza il componente
this.state.comment = 'Hello';

// Giusto
this.setState({comment: 'Hello'});

/*     React potrebbe accorpare più chiamate a setState() in un unico aggiornamento per migliorare la performance.

Poiché this.props e this.state potrebbero essere aggiornate in modo asincrono, non dovresti basarti sul loro valore per calcolare lo stato successivo.    */

// Giusto
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));    // utilizzando una funzione freccia oppure una normale funzione


//    gli aggiornamenti vengono applicati tramite Merge
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
// si posso aggiornare indipendentemente con 'setState()'

componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
