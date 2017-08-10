import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Clientes extends Component {


    constructor() {
        super();
        this.state = { clientes: [] }
    }


    componentDidMount() {
        fetch(`http://localhost:8080/api/public/cliente/lista`)
            .then(response => response.json())
            .then(lista => {
                this.setState({ clientes: lista })
                console.log(lista);
            }).catch(erro => {
                console.log(erro);
            })
    }




    render() {
        const options = {
            page: 1,  // which page you want to show as default
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: '15', value: 15
            }], // you can change the dropdown list for size per page
            sizePerPage: 5,  // which size per page you want to locate as default
            pageStartIndex: 1, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function

            //   hideSizePerPage: true //> You can hide the dropdown for sizePerPage
            //   alwaysShowAllBtns: true // Always show next and previous button
            //  withFirstAndLast: false // > Hide the going to First and Last page button
        };

        return (
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <i className="fa fa-align-justify"></i> Cliente
                               </div>
                            <BootstrapTable data={this.state.clientes} pagination={true} options={options} >
                                <TableHeaderColumn dataField='id_cliente' isKey={true}>ID</TableHeaderColumn>
                                <TableHeaderColumn dataField='x_cnpj'>CNPJ</TableHeaderColumn>
                                <TableHeaderColumn dataField='cpf'>CPF</TableHeaderColumn>
                                <TableHeaderColumn dataField='x_ie'>IE</TableHeaderColumn>
                                <TableHeaderColumn dataField='telefone'>Telefone</TableHeaderColumn>
                                <TableHeaderColumn dataField='x_cep'>Cep</TableHeaderColumn>
                                <TableHeaderColumn dataField='x_bairro'>Bairro</TableHeaderColumn>
                            </BootstrapTable>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
