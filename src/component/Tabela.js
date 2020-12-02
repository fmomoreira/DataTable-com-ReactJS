
import React, {Fragment, Component } from 'react'
import { Link } from 'react-router-dom';

const $ = require('jquery')
$.DataTable = require('datatables.net')


 class Tabela extends Component {
    componentDidMount(){
        console.log(this.el)
        this.$el = $(this.el)
       
        this.$el.DataTable(
            {
            data: this.props.data,
                    columns: [
                        { title: "Codigo" },
                        { title: "Descricao" },
                    ]
        }
        )
    }
    componentWillUnmount(){
        this.$el.DataTable().destroy(true)
    }
    
    
    render(){
      
        return (
            
            <Fragment>
           <Link to="/teste" className="btn btn-flat btn-danger  active buttonMecPock zoom" role="button" aria-pressed="true">Voltar</Link>
        <section className="content">
        <div className="card-body">
            <table  class="table table-striped table-dark"ref={el => this.el = el} ></table>
        </div>
        </section>
        </Fragment>
                )
            }
}


export default Tabela
