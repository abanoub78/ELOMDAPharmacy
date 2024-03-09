import React ,{} from 'react';
import { useNavigate } from 'react-router-dom';
import Medicines from './Medicines';
import Footer from './footer'

export default function Home(props) {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Navigate to the signup component
    navigate('/signup');
  };




  return (

<>

          {props.userdata ? (
              <div className="homebg  p-30">

            <Medicines x={props.onMedicineSelect}/>
            </div>

          ) : (
            <>
        <div className='homebg position-fixed d-flex align-items-center justify-content-center'>
           <div className="container cont">
            <div className="row">
          <div className="col text-center">
            <img src="doc.png" alt="doc" className="dicpic" />
          </div>
        </div>

              <p className='text-dark p-20 fw-bold fs-1'>مرحبا بيك في صيدلية العمدة</p>
              <p className='text-dark p-20 fw-bold fs-3'>اعمل حساب لكي تستطيع الدخول</p>
              <button className='btn btn-primary' onClick={handleGetStarted}>Get Started</button>
              </div>
              </div>
            </>
          )}
<Footer />
    </>
  );
}
