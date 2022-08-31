import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/Home.scss'

export default function HomePage() {

    const navigate = useNavigate();
    const adminLogin = () => {

        navigate('/login');
    }

    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand">Epic Software Solution</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav m-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Link-1</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Link-2</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Link-3</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Link-4</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="px-2 search" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn-search" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <section className="main">
                <div className="container py-5">
                    <div className="row py-4">
                        <div className="col-lg-7 pt-5 text-center">
                            <h1 className="pt-5">Welcome to My Office - Administrator Panel</h1>
                            <button className="btn1 mt-3" onClick={adminLogin}>Admin</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}