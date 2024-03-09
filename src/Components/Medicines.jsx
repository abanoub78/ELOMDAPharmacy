import React, { useState, useEffect } from 'react';
import '../App.css';
function Medicines(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = activeIndex === 2 ? 0 : activeIndex + 1;
      setActiveIndex(newIndex);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);


// function write(){
//   console.log("hello")
// }
const med = [
  { imgSrc: "a1.jpeg", title: "Antodine", price: "12 EP" },
  { imgSrc: "a2.png", title: "Famotak", price: "36 EP" },
  { imgSrc: "a3.jpg", title: "Epicogel", price: "40 EP" },
  { imgSrc: "a5.jpg", title: "Maalox", price: "53 EP" },
  { imgSrc: "a20.jpeg", title: "Osteocare", price: "40 EP" },
  { imgSrc: "a22.jpeg", title: "Viagra", price: "100 EP" },
  { imgSrc: "a7.jpeg", title: "Asprine", price: "40 EP" },
  { imgSrc: "a8.jpeg", title: "Xithrone 500", price: "80 EP" },
  { imgSrc: "a18.jpeg", title: "Systane Ultra", price: "240 EP" },
  { imgSrc: "a19.jpeg", title: "Panadol", price: "18 EP" },
  { imgSrc: "a12.jpeg", title: "Cipralex 10", price: "600 EP" },
  { imgSrc: "a16.jpeg", title: "Strepsils Orange", price: "140 EP" },
  { imgSrc: "a14.webp", title: "Mebo", price: "45 EP" },
  { imgSrc: "a15.jpeg", title: "Crestor 10", price: "185 EP" },
  { imgSrc: "a11.jpeg", title: "Claritine 10", price: "75 EP" },

];

  return (
<>
<div className="ads">
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="xcarouselExampleIndicators" data-slide-to="0" ></li>
        <li data-target="xcarouselExampleIndicators" data-slide-to="1" ></li>
        <li data-target="xcarouselExampleIndicators" data-slide-to="2" ></li>
      </ol>
      <div className="carousel-inner contimgs">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
          <img className="d-block" src="m4.jpg" alt="First slide" />
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
          <img className="d-block" src="m5.jpg" alt="Second slide" />
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
          <img className="d-block" src="m6.jpg" alt="Third slide" />
        </div>
      </div>
    </div>
</div>
<div className="medicens">
    <div className="container">
        <h1 className='text-center p-3 fw-bold text-primary'>Prescription Medicine</h1>
        <div className="boxes row gap-10">
        {med.map((e, i) => {
          return (
            <div className="card col" key={i} >
            <img className="card-img-top" src={e.imgSrc} alt="Card"></img>
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="foot">
              <button className="btn btn-primary" id='buy' onClick={() => props.x(e.imgSrc,e.title, e.price)}>اشتري</button>
              <p>{e.price}</p>
              </div>
            </div>
          </div>
          )
        }
        )
        }



    </div>
    </div>
</div>

<nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center p-5">
        <li className="page-item"><a className="page-link" href="x">Previous</a></li>
        <li className="page-item"><a className="page-link" href="x">1</a></li>
        <li className="page-item"><a className="page-link" href="x">2</a></li>
        <li className="page-item"><a className="page-link" href="x">3</a></li>
        <li className="page-item"><a className="page-link" href="x">4</a></li>
        <li className="page-item"><a className="page-link" href="x">5</a></li>
        <li className="page-item"><a className="page-link" href="x">...</a></li>
        <li className="page-item"><a className="page-link" href="x">Next</a></li>
      </ul>
</nav>

   
</>
  );
}

export default Medicines;
