/*        //  In HTML, gli elementi di un form come <input>, <textarea> e <select> mantengono tipicamente il proprio stato e lo aggiornano in base all’input dell’utente. In React, lo stato mutabile viene tipicamente mantenuto nella proprietà state dei componenti e viene poi aggiornato solo mediante setState().

class FormNome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    alert("E' stato inserito un nome: " + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (          // casella di completaneto
    <form onSubmit={this.handleSubmit}>
      <label>
        Nome :
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Invio" />
    </form>
 }
}

ReactDOM.render(
  <FormNome />,
  document.getElementById('root')
);          */


/*        //  In React, invece, <textarea> utilizza l’attributo value. Per questo, un form che utilizza una <textarea> può essere scritto in modo molto simile a come verrebbe scritto se utilizzasse un semplice input di una sola riga

class FormTema extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value : 'Per favore scrivi un tema riguardo il tuo elemento DOM preferito.'};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
  }

handleSubmit(event) {
    alert("Un tema è stato inviato: " + this.state.value);
    event.preventDefault();
  }
  
    render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Tema :
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Invio" />
    </form>
  );
 }
}

ReactDOM.render(
  <FormTema />,
  document.getElementById('root')
);          */


/*      //  Tag Select    (selezione con input multipli)
//  React, piuttosto che usare l’attributo selected, usa l’attributo value dell’elemento radice select. Ciò facilita le cose in un componente controllato in quanto bisogna aggiornare lo stato in un posto solo.

class FormGusti extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'cocco'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Il tuo gusto preferito è: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (        // selezione multipla
      <form onSubmit={this.handleSubmit}>
        <label>
          Seleziona il tuo gusto preferito:
          <select            value={this.state.value}
            onChange={this.handleChange}>

            <option value="pompelmo">Pompelmo</option>
            <option value="limone">Limone</option>
            <option value="cocco">Cocco</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <FormGusti />,
  document.getElementById('root')
);          */

// si può oassare un array nell'attributo 'value' permettendo di sele<ionare opzioni multiple in un tag 'select'

//      <select multiple={true} value={['B', 'C']}>


//  Gestione di input Multipli
// Quando devi gestire diversi elementi input, puoi aggiungere un attributo name ad ognuno di essi e far sì che la funzione handler controlli cosa fare in base al valore di 'event.target.name'.

class Prenotazione extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presente: true,
      numeroOspiti: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(
      this
    );
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  render() {
    return (      //checkbox e selezione numeri
      <form>      
        <label>
          Sarà presente:
          <input
            name="presente"
            type="checkbox"
            checked={this.state.presente}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Numero di ospiti:
          <input
            name="numeroOspiti"
            type="number"
            value={this.state.numeroOspiti}
            onChange={this.handleInputChange}
            min="0"
            max="10"
          />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Prenotazione />,
  document.getElementById('root')
);
