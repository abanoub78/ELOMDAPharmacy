import { HashRouter, Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
// import Products from './Components/Products';
import About from './Components/About';
import Navbar from './Components/Navbar';
// import Footer from './Components/footer';
import Pagenotound from './Components/Pagenotound';
// import Movies from './Components/Movies';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Logout from './Components/Logout'
import Profile from './Components/Profile'
import Baby from './Components/Baby'
import MenCare from './Components/MenCare'
import WomenCare from './Components/WomenCare'
import { useEffect,useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from './Firebase/firebase';



function App() {

  const [uid, setUid] = useState(null); // Define uid state
  const [username, setusername] = useState(); // Define uid state
  const [useremail, setuseremail] = useState(); // Define uid state
  const [selectedMedicines, setSelectedMedicines] = useState([]);



  function handleMedicineSelect(img, title, price) {
    const newSelectedMedicines = [...selectedMedicines, { img, title, price }];
    setSelectedMedicines(newSelectedMedicines);
  }

  useEffect(() => {
    // Initialize Firebase app
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);

    // Add authentication state change listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const uid = user.uid;
        console.log('User is signed in. UID:', uid);

        setusername(user.displayName)
        console.log('Username:', username);
        setUid(uid);
        setuseremail(user.email)
        localStorage.setItem("uid",uid)
      } else {
        // User is signed out
        console.log('User is signed out');
        setUid(null);
        localStorage.removeItem("uid")

      }
    });
    return () => unsubscribe();
  }, [username,useremail]);

  function ProtectRoute(props){
    if(localStorage.getItem("uid")===null){
      console.log(props)
      return <Navigate to='/login/'></Navigate>
    }
    else{
      return props.children
    }
  }
  
  return (

    
    <div className="">
      <HashRouter>
      <Navbar userdata={uid} username={username} useremail={useremail} selectedMedicines={selectedMedicines} setSelectedMedicines={setSelectedMedicines}/>
      <Routes>
        <Route path='/' element={<Home userdata={uid} username={username} onMedicineSelect={handleMedicineSelect}/>}></Route>
        {/* <Route path='/products' element={<Products/>}></Route> */}
        <Route path='/home' element={<Home userdata={uid} username={username}/>}></Route>
        {/* <Route path='/movies' element={<ProtectRoute><Movies/></ProtectRoute>}></Route> */}
        <Route path='/baby' element={<ProtectRoute><Baby onMedicineSelect={handleMedicineSelect}  /></ProtectRoute>}></Route>
        <Route path='/men' element={<ProtectRoute><MenCare onMedicineSelect={handleMedicineSelect} /></ProtectRoute>}></Route>
        <Route path='/women' element={<ProtectRoute><WomenCare onMedicineSelect={handleMedicineSelect} /></ProtectRoute>}></Route>

        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>

        <Route path='*' element={<Pagenotound/>}></Route>

      </Routes>
      </HashRouter>

      {/* <Footer /> */}
     
    </div>
  );
}


export default App;
