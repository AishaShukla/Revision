import React from 'react'
import B1 from "./B1.jpeg";
import B2 from "./B2.jpeg";
import B3 from "./B3.jpeg";
import B4 from "./B4.jpeg";

export default function Shoes() {
    return (
        <div>

            <h1 align="center">Footwears</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="carousel-item active">
                            <img src={B1} className="d-block w-100" alt="" id="b"></img>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="carousel-item active">
                            <img src={B2} className="d-block w-100" alt="" id="b"></img>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="carousel-item active">
                            <img src={B3} className="d-block w-100" alt="" id="b"></img>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="carousel-item active">
                            <img src={B4} className="d-block w-100" alt="" id="b"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}