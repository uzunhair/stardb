import React, {Component} from 'react';
import logo from '../../logo.svg';

export default class Navbar extends Component {
    state = {
        navbarItems: [
            {id: 1, title: 'People', link: '/'},
            {id: 2, title: 'Planets', link: '/'},
            {id: 3, title: 'Starships', link: '/'},
        ]
    };

    render() {

        const brand = "StarDB";
        const { navbarItems } = this.state;
        const navbarItemsMap = navbarItems.map((item) => {

            const {id, title, link,} = item;

            return(
                <li className="nav-item" key={id}>
                    <a className="nav-link" href={link}>{title}</a>
                </li>
            )

        });

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

                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-light my-2 my-sm-0" type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </form>

                    </div>
                </div>
            </nav>
        )
    }
}