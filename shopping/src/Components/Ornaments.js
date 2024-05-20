import React from 'react'
import J1 from "./J1.jpeg";
import J2 from "./J2.jpeg";
import J3 from "./J3.jpeg";
import J4 from "./J4.jpeg";

export default function Ornaments() {
    return (
        <div>

            <h1 align="center">Ornaments</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="carousel-item active">
                            <img src={J1} className="d-block w-100" alt="" id="b"></img>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="carousel-item active">
                            <img src={J2} className="d-block w-100" alt="" id="b"></img>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="carousel-item active">
                            <img src={J3} className="d-block w-100" alt="" id="b"></img>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="carousel-item active">
                            <img src={J4} className="d-block w-100" alt="" id="b"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}