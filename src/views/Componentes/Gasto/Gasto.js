import React, { Component } from 'react';


export default class Gasto extends Component {

  constructor() {
    super();
  }

  enviar(evento) {
     evento.preventDefault();

     const requestInfo ={
           method: 'POST',
           body:JSON.stringify({descricao:this.descricao.value,valor:this.valor.value,data:this.data.value}),
           headers: new Headers({
               'Content-type':'application/json'
           })
      } 
            fetch("http://localhost:8080/api/public/gasto/salvo",requestInfo)
            .then(response => {
            if(response.ok){
                return response.text();
            } else {
                throw new Error('Não foi possivel');
            }
        })
      .catch(error => {
           // this.setState({msg:error.message})
        })

    console.log(this.descricao.value)
    console.log(this.data.value)
    console.log(this.valor.value)
  }



  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <strong>Normal</strong> Form
              </div>
              <form onSubmit={this.enviar.bind(this)}>
                <div className="card-block">

                  <div className="form-group">
                    <label htmlFor="descricao">Email</label>
                    <input type="text" id="descricao" className="form-control" placeholder="Enter Descricao.." ref={(input) => this.descricao = input} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="valor">Valor</label>
                    <input type="text" id="valor" className="form-control" placeholder="Enter Valor.." ref={(input) => this.valor = input} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="data">Data</label>
                    <input type="date" id="data" className="form-control" placeholder="Enter Date.." ref={(input) => this.data = input} />
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

