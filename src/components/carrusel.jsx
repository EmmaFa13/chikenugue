import React, { useState } from 'react';
import img1 from "../images/polloOf.jpg";
import "../css/Carrusel.css";

function Carrusel() {

  return (

    <>
    <div className="container mt-5">

    <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={img1} alt="Imagen 1"  />
            </div>
            <div className="carousel-item">
            <img src={img1} alt="Imagen 1"  />
            </div>
            <div className="carousel-item">
            <img src={img1} alt="Imagen 1"  />
            
            </div>
        </div>

        <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" data-slide="next">
            <span className="carousel-control-next-icon"></span>
        </a>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </>
  )
 
}

export default Carrusel;
