import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import Gasto from '../../views/Componentes/Gasto/';
import ClienteForm from '../../views/Componentes/Cliente/form';
import TransportadoraForm from '../../views/Componentes/Transportadora/form';

import Dashboard from '../../views/Dashboard/';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <div className="container-fluid">
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/componentes/gasto" name="Gasto" component={Gasto}/>
                <Route path="/cliente/form" name="Cliente" component={ClienteForm}/>
                 <Route path="/transportadora/form" name="Transportadora" component={TransportadoraForm}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </div>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
