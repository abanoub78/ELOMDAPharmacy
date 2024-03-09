import React from 'react'

export default function WomenCare(props) {

  const women = [
    { imgSrc: "w1.jpeg", title: "BO Musk", price: "360 EP" },
    { imgSrc: "w2.jpeg", title: "Water Face Tonic", price: "200 EP" },
    { imgSrc: "w3.png", title: "Anthelios", price: "80 EP" },
    { imgSrc: "w4.png", title: "Always", price: "360 EP" },
    { imgSrc: "w5.jpeg", title: "Skin Mask", price: "375 EP" },
  
  
  ];


  return (
    <div>
          <>
<div className="baby">
<div className="bg">
        <img src='w.jpg' alt='women'></img>
    </div>
    <div className="medicens">
    <div className="container">
        <h1 className='text-center p-3 fw-bold text-primary'>Women Care</h1>
        <div className="boxes row gap-10">
        {women.map((e, i) => {
          return (
            <div className="card col" key={i} >
            <img className="card-img-top" src={e.imgSrc} alt="Card"></img>
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="foot">
              <button className="btn btn-primary" id='buy' onClick={() => props.onMedicineSelect(e.imgSrc,e.title, e.price)}>اشتري</button>
              <p>{e.price}</p>
              </div>
            </div>
          </div>
          )
        }
        )
        }



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
    </div>
</div>
</div>
      
    </>
    </div>
  )
}
