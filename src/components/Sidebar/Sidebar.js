import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <NavLink to={'/dashboard'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Dashboard <span className="badge badge-info">NEW</span></NavLink>
            </li>
            <li className="nav-title">
              Elementos
            </li>

            <li className={this.activeRoute("/componentes")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-puzzle"></i> Components</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <NavLink to={'/componentes/gasto'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> Gasto</NavLink>
                </li>
              </ul>
            </li>
          </ul>

        </nav>
      </div>
    )
  }
}

export default Sidebar;
