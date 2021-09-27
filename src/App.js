import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { name: 'Lucas'}
  }

  handleBClick () {
    const { name } = this.state
    const nameId = document.getElementById('nameID').value;
    this.setState={name = nameId}
    console.log(name)

  }

  render() {
    const { name } = this.state


    return (
      <div className="App">

        <div className="container">

          <div className="Name">
            <label for="nameID">Nome:</label>
            <input type="text" id="nameID" placeholder="Informe o nome"></input>
          </div>

          <div className="Sex">
            <label for="nameID">Sexo: </label>
            <label>Masculino:<input type="radio" name="sex" id="nameID" ></input></label>
            <label>Feminino:<input type="radio" name="sex" id="nameID" ></input></label>
          </div>

          <div className="Fone-email">
            <label for="phoneID">Telefone:</label>
            <input type="number" id="phoneID" placeholder="Informe o telefone"></input>
            <label for="emailID">Email</label>
            <input type="text" id="emailID" placeholder="Informe o email"></input>
          </div>

          <div className="Date">
            <label for="dateID">Data de nascimento:</label>
            <input type="date" id="dateID" ></input>
          </div>

          <div className="Endereco">
            <label for="cpfID">CPF:</label>
            <input type="number" id="cpfID" placeholder="Informe o CPF"></input>
            <label for="streetID">Rua</label>
            <input type="text" id="streetID" placeholder="Rua..."></input>
            <label for="numberID">Número:</label>
            <input type="number" id="numberID" placeholder="Informe o número" ></input>
            <label for="cityID">Cidade:</label>
            <input type="text" id="cityID" placeholder="Informe a sua cidade"></input>
          </div>

          <div className="Obs">
            <label for="obsID">Observação:</label>
            <textarea type="text" id="obsID" rows="5" cols="33"></textarea>
          </div>

          <button onClick={() => {this.handleBClick} }>Salvar</button>

        </div>

      </div>
    );
  }

}


export default App;
