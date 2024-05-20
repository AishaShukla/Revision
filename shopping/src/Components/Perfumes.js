import React from 'react'
import P1 from "./P1.jpeg";
import P2 from "./P2.jpeg";
import P3 from "./P3.jpeg";
import P4 from "./P4.jpeg";

export default function Perfumes() {
    return (
      <div>

    <h1 align="center">Perfumes</h1>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
            <div className="carousel-item active">
<img src={P1} className="d-block w-100" alt="" id="b"></img>
</div> 
            </div>
            <div className="col-md-3">
            <div className="carousel-item active">
<img src={P2} className="d-block w-100" alt="" id="b"></img>
</div> 
            </div>
            <div className="col-md-3">
            <div className="carousel-item active">
<img src={P3} className="d-block w-100" alt="" id="b"></img>
</div> 
            </div>
            <div className="col-md-3">
            <div className="carousel-item active">
<img src={P4} className="d-block w-100" alt="" id="b"></img>
</div> 
            </div>
        </div>
    </div>
 </div>
    )
}