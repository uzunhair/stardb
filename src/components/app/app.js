import React, {Component} from 'react';

import Header from '../header';
import PlanetsDetails from '../planets-details';
import PersonDetails from '../person-details';

import logo from '../../logo.svg';

export default class App extends Component {

  render(){
    return (
        <>
          <Header />
          <div className="container">
            <div className="mb-5">
              <PlanetsDetails />
            </div>

            <div className="row">
              <div className="col-7">
                <PersonDetails />
              </div>
              <div className="col-5">
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </>
    );
  }
}
