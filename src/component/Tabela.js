
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
   
    }
    render(){
        return (
            <Fragment>
           <Link to="/teste" className="btn btn-flat btn-danger  active buttonMecPock zoom" role="button" aria-pressed="true">Voltar</Link>
        <section className="content">
        <div className="card-body">
            <table id="example2" class="table table-bordered table-hover"ref={el => this.el = el} ></table>
        </div>
        </section>
        </Fragment>
                )
            }
}


export default Tabela
