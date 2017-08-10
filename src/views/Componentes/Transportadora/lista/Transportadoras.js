import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Transportadoras extends Component { 
  
      constructor(){
          super();
          this.state = {transportadoras: []}
      }
  
      componentDidMount() {
        fetch(`http://localhost:8080/api/public/transportadora/lista`)
            .then(response => response.json())
            .then(trans => {
                this.setState({ transportadoras: trans })
                console.log(trans);
            }).catch(erro => {
                console.log(erro);
            })
    }
  
    render(){
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
                                <i className="fa fa-align-justify"></i> Transportadora
                               </div>
                            <BootstrapTable data={this.state.transportadoras} pagination={true} options={options} >
                                <TableHeaderColumn dataField='id_transportadora' isKey={true}>Product ID</TableHeaderColumn>
                                <TableHeaderColumn dataField='nome'>Product Descrição</TableHeaderColumn>

                            </BootstrapTable>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}