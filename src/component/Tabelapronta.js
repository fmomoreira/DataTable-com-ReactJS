import React, { Fragment, useState, useEffect } from 'react'

import Tabela from './Tabela'


function Tabelapronta() {
  //const [dataset, setdataset] = useState();
  let dataSet = [[ "1","Borracharia" ],[ "2","AutoPeças" ]];
  return(

    <Fragment>
      <div className="App"> 
      <Tabela data={dataSet}>

      </Tabela>
      </div>
   </Fragment>
  ) 
  
}

export default Tabelapronta