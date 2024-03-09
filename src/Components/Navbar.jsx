import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, push  } from "firebase/database";

// import firebase from 'firebase/app';
// import 'firebase/database';
import {app} from '../Firebase/firebase'

import '../App.css';
export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false); // State to manage cart visibility
  const [alertMessage, setAlertMessage] = useState(null); // State to manage alert message

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };
 
  const totalPrice = props.selectedMedicines.reduce((total, medicine) => {
    return total + parseFloat(medicine.price.replace(' EP', ''));
  }, 0);
  const clearCart = () => {
    props.setSelectedMedicines([]); // Clear the selectedMedicines state
    // setTotalPrice(0); // Reset the total price
  };

  const database = getDatabase(app);
  const UserOrder = ref(database, "UserOrder");


  // Function to send cart data to Firebase Realtime Database
  const sendCartDataToFirebase = () => {
    push(UserOrder,{
      medicines: props.selectedMedicines,
      totalPrice: totalPrice.toFixed(2),
      username:props.username,
      email:props.useremail
    }).then(() => {
      clearCart();
      setAlertMessage('Data Sent successfully');
      setTimeout(() => {
        setAlertMessage(null); // Clear the alert message after 3 seconds
      }, 3000);
   }).catch((error) => {
      // Handle any errors
      setAlertMessage('Error sending data');
      console.error("Error sending data to Firebase:", error);
   });
  };
  const handleLogout = () => {
    // Hide emptyDiv when logout is clicked
    setShowCart(false);
    // Here you can add any logout functionality you need
  };
  return (
    <nav className="mynav navbar navbar-expand-md navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">صيدلية العمدة</Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        onClick={toggleDropdown} 
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse     position-relative ${isOpen ? 'show' : ''}`} id="nav">
        <ol className="navbar-nav me-auto">
          {props.userdata ? (
            <>
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/baby" className="nav-link">Babies</Link>
              </li>
              <li className="nav-item">
                <Link to="/women" className="nav-link">Women Care</Link>
              </li> 
              <li className="nav-item">
                <Link to="/men" className="nav-link">Men Care</Link>
              </li>        
            </>
          ) : ""}

        </ol>

        <ul className="navbar-nav">
          {props.userdata ? (
            <>
              <li className="nav-item order-lg-last order-first">
                <Link to="/logout" className="nav-link" onClick={handleLogout}>Logout</Link>
              </li>
              <li className="nav-item d-flex align-items-center order-lg-first order-last justify-content-center p-20">
                <i className="p-2 cartCar fas fa-cart-plus" onClick={toggleCart}></i>
                <i className='fas mx-2 fa-user d-flex align-items-center position-relative'>
                  <Link to="/profile" className="nav-link position-absolute l-0"></Link>
                </i>
                <p className='navname'>Welcome: {props.username}</p>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item order-lg-last order-first">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item order-lg-last order-first">
                <Link to="/signup" className="nav-link">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {showCart && (
        <div className="emptyDiv position-absolute">
          {alertMessage && <div className='alert alert-primary fw-bold'>{alertMessage}</div>}
          {props.selectedMedicines.map((medicine, index) => (
            <div key={index} className="medicine-item info">
              <img src={medicine.img} alt="medicine" />
              <p>{medicine.title}</p>
              <p>{medicine.price}</p>
            </div>
                        
          )
          
          )
          }
          <>
                <div className="foot">
        <div className="totalprice fw-bold fs-5">Total Price : {totalPrice.toFixed(2)} EP</div>
        <div className="btns">
        <button className='btn btn-outline-danger' onClick={clearCart}>Clear</button>
        <button className='btn btn-outline-primary' onClick={sendCartDataToFirebase}>Send</button>

        </div>
      </div>
          </>
      </div>
      )}


    </nav>
    
  );
}
