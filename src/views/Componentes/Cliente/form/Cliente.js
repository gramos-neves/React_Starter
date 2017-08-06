import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import Axios from 'axios';


export default class Client extends Component {

    constructor() {
        super();
        this.state = {
            cep: '',
            cnpj: '',
            cpf: '',
            IE: '',
            endereco: ''
            , bairro: ''
            , cidade: ''
            , uf: ''
            , x_numero: ''
        }
    }

    handleDados(e) {
        // Pegando o CEP
        const cep = e.target.value;
        // Consultando a API
        Axios.get(`https://viacep.com.br/ws/${cep}/json`)
            .then((res) => {
                console.log(res)
                let endereco = res.data.logradouro;
                let bairro = res.data.bairro;
                let cidade = res.data.localidade;
                let uf = res.data.uf;
                // Mudando o estado
                this.setState({
                    endereco: endereco
                    , bairro: bairro
                    , cidade: cidade
                    , uf: uf
                })
            })
    }




    enviar(evento) {
        evento.preventDefault();

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({
                nome: this.nome.value,
                x_numero: this.state.x_numero,
                x_cep: this.state.cep,
                cpf: this.state.cpf,
                x_cnpj: this.state.cnpj,
                x_ie: this.state.IE,
                telefone: this.state.cnpj,
                celular: this.state.cnpj,
                x_bairro: this.state.bairro,
                x_mun: this.state.cidade,
                x_uf: this.state.uf,
                x_lgr: this.state.endereco
            }),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }
        fetch("http://localhost:8080/api/public/cliente/salvo", requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Não foi possivel');
                }
            })
            .catch(error => {
                // this.setState({msg:error.message})
            })

        //  console.log(this.nome.value)
        // console.log(this.state.IE)
        console.log(this.state)
    }


    SalvaAlteracao(nomeInput, evento) {
        var campo = {};
        campo[nomeInput] = evento.target.value;
        this.setState(campo)
    }


    render() {
        return (
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <strong>Cliente</strong> Form
                                  </div>
                            <form onSubmit={this.enviar.bind(this)}>
                                <div className="card-block">

                                    <div className="form-group">
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" id="nome" className="form-control" placeholder="Enter Descricao.." ref={(input) => this.nome = input} />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label htmlFor="cnpj">CNPJ</label>
                                            <InputMask mask="99.999.999/9999-99" type="text" id="cnpj" className="form-control" placeholder="Enter Valor.." value={this.state.cnpj} onChange={this.SalvaAlteracao.bind(this, 'cnpj')} />
                                        </div>
                                        <div className="col-sm-4">
                                            <label htmlFor="cpf">CPF</label>
                                            <InputMask mask="999.999.999-99" type="text" id="cpf" className="form-control" placeholder="Enter Valor.." value={this.state.cpf} onChange={this.SalvaAlteracao.bind(this, 'cpf')} />
                                        </div>
                                        <div className="col-sm-4">
                                            <label htmlFor="IE">IE</label>
                                            <InputMask mask="999.999.999.999" type="text" id="IE" className="form-control"
                                                placeholder="Enter Valor.." value={this.state.IE} onChange={this.SalvaAlteracao.bind(this, 'IE')} />
                                        </div>
                                    </div>
                                    {/* Endereço */}
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label htmlFor="cep">Cep</label>
                                            <input type="text" id="cep" className="form-control" placeholder="Enter Date.." value={this.state.cep} onChange={this.SalvaAlteracao.bind(this, 'cep')} onBlur={this.handleDados.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="endereco">Endereço</label>
                                        <input type="text" id="endereco" className="form-control" placeholder="Enter Valor.." value={this.state.endereco} />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="bairro">Bairro</label>
                                            <input type="text" id="bairro" className="form-control" placeholder="Enter Valor.." value={this.state.bairro} />
                                        </div>
                                        <div className="col-sm-2">
                                            <label htmlFor="x_numero">Número</label>
                                            <input type="text" id="x_numero" className="form-control" placeholder="Enter Valor.." value={this.state.x_numero} onChange={this.SalvaAlteracao.bind(this, 'x_numero')} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label htmlFor="cidade">Cidade</label>
                                            <input type="text" id="cidade" className="form-control" placeholder="Enter Valor.." value={this.state.cidade} />
                                        </div>

                                        <div className="col-sm-2">
                                            <label htmlFor="uf">UF</label>
                                            <input type="text" id="uf" className="form-control" placeholder="Enter Valor.." value={this.state.uf} />
                                        </div>
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