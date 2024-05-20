
import React from 'react'
import './Website.css'
import B2 from "./B2.jpeg";
import S3 from "./S3.jpeg";
import P4 from "./P4.jpeg";
import Ornaments from './Ornaments'
import Perfumes from './Perfumes'
import Shoes from './Shoes'
import Bags from './Bags'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";



export default function Website() {
  return (
    <Router>
    <div>
        <div className="container">
            <div className="row">
                <div className='col-md-12'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">Home</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="Ornaments">Ornaments</Link>
                                    </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="Shoes">Shoes</Link>
                                </li>
                                <li className="nav-item">
                                        <Link className="nav-link" to="bags">Bags</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link className="nav-link" to="Perfumes">Perfumes</Link>
                                    </li>
                                    </ul>
                                
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                    <Routes>
        <Route exact path="/Ornaments" element={<Ornaments/>}/>
            <Route exact path="/Shoes" element={<Shoes/>}/>
            <Route exact path="/Perfumes" element={<Perfumes/>}/>
            <Route exact path="/Bags" element={<Bags/>}/>
        </Routes>
                </div>
            </div>
        </div>
     <div className="container green">
        <div className="row">
            <div className="col-12">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={B2} className="d-block w-100" alt="" id="a"></img>
                        </div>
                        <div className="carousel-item">
                            <img src={S3} className="d-block w-100" alt="" id="a"></img>
                        </div>
                        <div className="carousel-item">
                            <img src={P4} className="d-block w-100" alt="" id="a"></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            </div>
            
    </div>
    </div>
 </Router>
         
  );
}



    
     






    
    

