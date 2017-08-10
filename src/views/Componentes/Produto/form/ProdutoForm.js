import React, { Component } from 'react';


export default class ProdutoForm extends Component{
     
  
  
  
    enviar(evento){

    }
    
  
  
  
    render(){
        return(
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <strong>Produto</strong> Form
                                  </div>
                            <form onSubmit={this.enviar.bind(this)}>
                                <div className="card-block">

                                    <div className="form-group">
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" id="nome" className="form-control" placeholder="Enter Descricao.." ref={(input) => this.nome = input} />
                                    </div>
                                  

                                </div>


                                <div className="card-footer">
                                    <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
                                    <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
                                </div>


                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}