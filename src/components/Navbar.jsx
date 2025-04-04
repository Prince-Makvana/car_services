import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import {useNavigate, NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';
import { app } from '../firebase'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
// import "bootstrap/dist/js/bootstrap.bundle.min"; 
const auth = getAuth(app)

import useFetch from "../hook/useFetch";



const Navbar = () => {

  const [tp,ti] = useFetch();

  const navigate = useNavigate();
      const [username, setUsername] = useState(null);
      const [useremail, setUseremail] = useState(null);
        useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            //setUser(currentUser);
            if (currentUser) {
              setUsername(currentUser.displayName);
              setUseremail(currentUser.email);
            }else{
              setUsername("please signin.")
            }
          });
          return () => unsubscribe(); // Cleanup listener on unmount
        }, []);
  
      const signout = async () =>{
          await signOut(auth).then(() => {
              toast.success("you SignOut..")
              navigate("/login")
            }).catch((error) => {
              console.log(error)
            });
      }  

      const closeOffcanvas = () => {
        const offcanvasElement = document.getElementById("offcanvasWithBothOptions");
        if (offcanvasElement) {
          const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
          if (offcanvasInstance) {
            offcanvasInstance.hide();
          }
        }
      }
  return (
    <>

      {/* Navbar */}

      <nav className="navbar navbar-expand-lg container-fluid px-lg-5 px-md-4 px-sm-1 px-0 position-fixed z-3">
         <div className="container-fluid">
           <img src="/Logo/logo.png" className="logo" alt="Car_Service"/>
           <button className="btn navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" >
             <i className="bi bi-list text-white fs-2"></i>
           </button>
           <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
             <ul className="navbar-nav">
               <li className="nav-item">
                 <NavLink className="nav-link rounded-pill px-3 fs-6 text-white" aria-current="page" to="/">Car Service</NavLink>
               </li>
               <li className="nav-item">
                 <NavLink className="nav-link rounded-pill px-3 fs-6 text-white" to="/insurance-claim">Insurance Claim</NavLink>
               </li>
               <li className="nav-item dropdown">
                 <button className="btn dropdown-toggle nav-link rounded-pill px-3 fs-6 text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Major Brands
                 </button>
                 <ul className="dropdown-menu">
                   <li><NavLink className="dropdown-item text-center mb-2" to="/maruti-suzuki">Maruti Suzuki</NavLink></li>
                   <li><NavLink className="dropdown-item text-center mb-2" to="/tata">Tata</NavLink></li>
                   <li><NavLink className="dropdown-item text-center mb-2" to="/honda">Honda</NavLink></li>
                   <li><NavLink className="dropdown-item text-center mb-2" to="/toyota">Toyota</NavLink></li>
                   <li><NavLink className="dropdown-item text-center mb-2" to="/hyundai">Hyundai</NavLink></li>
                   <li><NavLink className="dropdown-item text-center mb-2" to="/kia">Kia</NavLink></li>
                   <li><NavLink className="dropdown-item text-center mb-2" to="/mg">MG</NavLink></li>
                   <li><NavLink className="dropdown-item text-center mb-2" to="/audi">Audi</NavLink></li>
                   <li><NavLink className="dropdown-item text-center mb-2" to="/mahindra">Mahindra</NavLink></li>
                 </ul>
               </li>
               {/* <li className="nav-item dropdown">
                 <button className="btn dropdown-toggle nav-link rounded-pill px-3 fs-6 text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Citie
                 </button>
                 <ul className="dropdown-menu">
                   <li><NavLink className="dropdown-item text-center mb-2" to="#">City1</NavLink></li>
                   <li><NavLink className="dropdown-item text-center mb-2" to="#">City2</NavLink></li>
                   <li><NavLink className="dropdown-item text-center mb-2" to="#">City3</NavLink></li>
                 </ul>
               </li> */}
               <li className="nav-item">
                 <NavLink className="nav-link rounded-pill px-3 fs-6 text-white" to="/blog">Blog</NavLink>
               </li>
               <li className="nav-item">
                 <NavLink className="nav-link rounded-pill px-3 fs-6 text-white" to="/vehicleai-labs">VehicleAI Labs</NavLink>
               </li>
               {/* <li> */}
                 {/* <a className="fs-6 text-white border-0 rounded-3 py-2 px-3 btn nav-btn" href='/login' type="button">Login</a> */}


                <div className="crt-prof d-flex align-items-center justify-content-center">
                  <div className="cart ms-2 position-relative me-2"  onClick={()=>navigate("/cart")}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart"
                      viewBox="0 0 16 16">
                      <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg> */}
                    <i className="bi bi-cart text-white fs-4"></i>
                    <div className='bg-warning rounded-pill cartbadge'>{ti}</div>

                  </div>
                  <div className="profile-pic ms-2  dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-circle"
                      viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg> */}
                    <i className="bi bi-person-circle text-white fs-4"></i>
                  </div>
                  <div className="dropdown-menu profile-dropdown dropdown-menu-end">
                    <div className="profile-header">
                      <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" />
                      <div>
                        <strong>{username}</strong><br />
                        <span className="text-muted">{useremail}</span>
                      </div>
                    </div>
                    <ul className="profile-menu">
                      <li className='fw-bold fs-5'>
                        <i className="bi bi-person-circle fs-3"></i> View Profile
                      </li>
                      <li className='text-primary fw-bold fs-5' onClick={()=>navigate("/login")}>
                      <i className="bi bi-box-arrow-in-left fs-3"></i>Login
                      </li>
                      <li className='text-danger fw-bold fs-5' onClick={signout}>
                        <i className="bi bi-box-arrow-right fs-3"></i> Logout
                      </li>
                    </ul>
                  </div>

                </div>

               {/* </li> */}
             </ul>
           </div>
         </div>
      </nav>

      {/* offcanvas */}

      <div className="offcanvas offcanvas-start offcanvase-nav" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close offcan-remove" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body offcan">
              <ul className="offcan-ul">
                <li><NavLink to="/" onClick={closeOffcanvas}>Car Service</NavLink></li>
                <li><NavLink to="/insurance-claim" onClick={closeOffcanvas}>Insurance Claim</NavLink></li>
                <li>
                  <div className="off-dropdown text-white fw-bold fs-6">Major Brands<i className="bi bi-caret-down-fill ms-3"></i>
                    <ul className="off-dropdown-list">
                      <li className="text-center"><NavLink className="text-black" to="/maruti-suzuki" onClick={closeOffcanvas}>Maruti Suzuki</NavLink></li>
                      <li className="text-center"><NavLink className="text-black" to="/tata" onClick={closeOffcanvas}>Tata</NavLink></li>
                      <li className="text-center"><NavLink className="text-black" to="/honda" onClick={closeOffcanvas}>Honda</NavLink></li>
                      <li className="text-center"><NavLink className="text-black" to="/toyota" onClick={closeOffcanvas}>Toyota</NavLink></li>
                      <li className="text-center"><NavLink className="text-black" to="/hyundai" onClick={closeOffcanvas}>Hyundai</NavLink></li>
                      <li className="text-center"><NavLink className="text-black" to="/kia" onClick={closeOffcanvas}>Kia</NavLink></li>
                      <li className="text-center"><NavLink className="text-black" to="/mg" onClick={closeOffcanvas}>MG</NavLink></li>
                      <li className="text-center"><NavLink className="text-black" to="/audi" onClick={closeOffcanvas}>Audi</NavLink></li>
                      <li className="text-center"><NavLink className="text-black" to="/mahindra" onClick={closeOffcanvas}>Mahindra</NavLink></li>
                    </ul>
                  </div>
                </li>
                {/* <li>
                  <div className="off-dropdown"><a href="#">Cities<i className="bi bi-caret-down-fill ms-3"></i></a>
                    <ul className="off-dropdown-list">
                      <li className="text-center"><NavLink className="text-black" to="/maruti-suzuki" onClick={closeOffcanvas}>City 1</NavLink></li>
                      <li className="text-center"><NavLink className="text-black" to="/maruti-suzuki" onClick={closeOffcanvas}>City 2</NavLink></li>
                      <li className="text-center"><NavLink className="text-black" to="/maruti-suzuki" onClick={closeOffcanvas}>City 3</NavLink></li>
                    </ul>
                  </div>
                </li> */}
                <li><NavLink to="/blog" onClick={closeOffcanvas}>Blog</NavLink></li> 
                <li><NavLink to="/vehicleai-labs" onClick={closeOffcanvas}>VehicleAI Labs</NavLink></li>
                <li><button className="fs-6 text-white border-0 rounded-3 py-2 px-3 btn offcan-btn" type="button">Login</button></li>
              </ul>
            </div>
      </div>

    </>
  )
}

export default Navbar
