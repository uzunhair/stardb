import React, {Component} from 'react';

import logo from '../../logo.svg';

export default class Navbar extends Component {

    render() {

        const brand = "StarDB";
        const { navbarItems } = this.props;

        const navbarItemsMap = navbarItems.map((item) => {

            const {id, title, link,} = item;

            return(
                <li className="nav-item" key={id}>
                    <a className="nav-link" href={link}>{title}</a>
                </li>
            )

        });

        console.log(navbarItems);

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-0 mb-5">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src={logo} className="navbar-brand-img" alt="logo"/>
                        <span>{brand}</span>
                    </a>
                    <div className="collapse navbar-collapse">

                        <ul className="navbar-nav mr-auto">
                            {navbarItemsMap}
                        </ul>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Profile</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}