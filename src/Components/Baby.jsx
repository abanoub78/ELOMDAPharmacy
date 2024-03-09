
export default function Baby(props) {


  const baby = [
    { imgSrc: "b1.jpeg", title: "Bebelac Milk", price: "220 EP" },
    { imgSrc: "b2.jpeg", title: "SURE Check", price: "65 EP" },
    { imgSrc: "b3.jpeg", title: "Nan Milk", price: "240 EP" },
    { imgSrc: "b4.png", title: "Johnson Gentle", price: "68 EP" },
    { imgSrc: "b5.jpeg", title: "Molfix Pants", price: "320 EP" },
  
  
  ];


  return (
    <>
<div className="baby">
<div className="bg">
        <img src='baby.png' alt='baby'></img>
    </div>
    <div className="medicens">
    <div className="container">
        <h1 className='text-center p-3 fw-bold text-primary'>Mother and Baby</h1>
        <div className="boxes row gap-10">
        {baby.map((e, i) => {
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
  )
}