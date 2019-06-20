import React, {Component} from 'react';

import Navbar from '../../bootstrap/navbar';


export default class App extends Component {

  state = {
    navbarItem: [
      {id: 1, title: 'Home', link: '/'},
      {id: 2, title: 'Features', link: '/'},
      {id: 3, title: 'Pricing', link: '/'},
    ]
  };

  render(){

    const {navbarItem} = this.state;

    return (
        <>
          <Navbar navbarItems={navbarItem} />
          <div className="container">
            <header className="App-header">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </>
    );
  }
}
