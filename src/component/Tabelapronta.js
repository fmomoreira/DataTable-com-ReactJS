import React, { Component } from 'react'

import Tabela from './Tabela'



class Tabelapronta extends Component {

 
  render(){
    return(
      <div className="App"> 
      <Tabela data={this.dataSet}>

      </Tabela>
      </div>
    );
  }

   dataSet = [
    [ "1","Borracharia" ],
    [ "2","AutoPeças" ]
];
}

export default Tabelapronta