import React from 'react'
import S1 from "./S1.jpeg";
import S2 from "./S2.jpeg";
import S3 from "./S3.jpeg";
import S4 from "./S4.jpeg";

export default function Shoes() {
    return (
        <div>

            <h1 align="center">Footwears</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="carousel-item active">
                            <img src={S1} className="d-block w-100" alt="" id="b"></img>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="carousel-item active">
                            <img src={S2} className="d-block w-100" alt="" id="b"></img>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="carousel-item active">
                            <img src={S3} className="d-block w-100" alt="" id="b"></img>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="carousel-item active">
                            <img src={S4} className="d-block w-100" alt="" id="b"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}