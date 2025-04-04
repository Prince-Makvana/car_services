import React, { useEffect, useRef, useState } from 'react'
import "../Nav_Pills.css"
import Reviews from '../../Reviews'
import Footer from '../../Footer'
import Mahindra_All_Brands from './Mahindra_all_brands'

import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { getFirestore, doc, setDoc, getDocs, getDoc, collection, query, where } from "firebase/firestore";
import { arrayUnion, updateDoc } from "firebase/firestore";
import { app } from '../../../firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app);

import useFetch from "../../../hook/useFetch";


const Xuv700_Petrol = () => {

    const [tp,ti] = useFetch();

        // ################################################################# add cart st
        const [email, setEmail] = useState(null);

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setEmail(user.email); // Set user email
                } else {
                    setEmail(null); // No user logged in
                }
            });
    
            return () => unsubscribe(); // Cleanup on unmount
        }, []);
    
        // const addcart = async (brand,model,service,price) => {
        //     const id =  Math.floor(10000 + Math.random() * 90000);
        //     console.log(brand,model,service,price,email,id)
        //     await setDoc(doc(db, "prince-user", email), {
        //         id: [brand,model,service,price]
    
        //     }, { merge: true });
        // };

        const addcart = async (brand, model, service, price) => {
            if (!email) return; // Ensure user is logged in
            const randomId = Math.floor(10000 + Math.random() * 90000).toString();
            const formatDate = () => {
                const options = { day: "2-digit", month: "short", year: "numeric" };
                return new Date().toLocaleDateString("en-US", options).replace(" ", ", ");
            };
            const date = formatDate();
            const cartItem = { id: randomId, brand, model, service, price, date };
            console.log(brand, model, service, price, email, randomId);
            try {
                const userDocRef = doc(db, "user", email);
                  await updateDoc(userDocRef, {
                    cartItems: arrayUnion(cartItem) // Append new item to cartItems array
                  });
                // await setDoc(doc(db, "prince-user", "saasa"), {
                //     id: "asasa"

                // }, { merge: true });
                toast.success("Item added to cart");
            } catch (error) {
                console.error("Error adding to cart:", error);
                toast.error("Failed to add item");
            }
        };
    
        // ################################################################# add cart end
    





  return (
    <div className='container-fluid' style={{marginTop:"80px"}}>

        {/* section-1 */}

        <div className="row justify-content-center bg-dark-subtle py-4">
            <div className="col-lg-9 col-md-11 col-sm-12">


                <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-Periodic-tab" data-bs-toggle="pill" data-bs-target="#pills-Periodic" type="button" role="tab" aria-controls="pills-Periodic" aria-selected="true">Periodic Car Services</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-Denting-tab" data-bs-toggle="pill" data-bs-target="#pills-Denting" type="button" role="tab" aria-controls="pills-Denting" aria-selected="false">Denting Painting</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-Mechanical-tab" data-bs-toggle="pill" data-bs-target="#pills-Mechanical" type="button" role="tab" aria-controls="pills-Mechanical" aria-selected="false">Mechanical Repairs</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-AC-tab" data-bs-toggle="pill" data-bs-target="#pills-AC" type="button" role="tab" aria-controls="pills-AC" aria-selected="false">Car AC Services</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-Wheel-tab" data-bs-toggle="pill" data-bs-target="#pills-Wheel" type="button" role="tab" aria-controls="pills-Wheel" aria-selected="false">Wheel Car</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-Cleaning-tab" data-bs-toggle="pill" data-bs-target="#pills-Cleaning" type="button" role="tab" aria-controls="pills-Cleaning" aria-selected="false">Car Cleaning</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-Spa-tab" data-bs-toggle="pill" data-bs-target="#pills-Spa" type="button" role="tab" aria-controls="pills-Spa" aria-selected="false">Car Detailing & Spa</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-Custom-tab" data-bs-toggle="pill" data-bs-target="#pills-Custom" type="button" role="tab" aria-controls="pills-Custom" aria-selected="false">Custom Repairs</button>
                    </li>
                </ul>
            
                




            </div>
        </div>
        


        {/* section-2 */}

        <div className="row justify-content-center bg-body-secondary py-4">
            <div className="col-lg-10 col-md-11 col-sm-12">
                
            <div className="tab-content" id="pills-tabContent">


                {/* Periodic Car Services */}
                
                <div className="tab-pane fade show active" id="pills-Periodic" role="tabpanel" aria-labelledby="pills-Periodic-tab" tabIndex="0">

                    <div className="row m-0 p-0">

                        <div className="col-lg-8 col-md-11 col-sm-12" style={{overflow:"scroll", scrollbarWidth:"thin", height:"550px"}}>
                            
                            <div className="row mb-5">
                                <div className="col-2 d-none d-md-block">
                                    <img src="/Major_Brand/Periodic_Car_Services/service.png" style={{width:"100px", height:"75px"}} alt="" />
                                </div>
                                <div className="col bg-white p-4 ms-4" style={{position:"relative"}}>
                                    <div className="row mb-3 main-div">
                                        <div className="col fs-4 fw-bold">Basic Car Service</div>
                                        <div className="col text-end fw-bold fs-6" style={{color:"#ff0000"}}>Rs. 3200</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Car Wash</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Interior Vacuuming(Carpet & Seat)</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Heater/Spark Plugs Checking</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Car Inspection</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Coolant Top Up (200 ml)</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Air Filter Cleaning</p></div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Dashboard & tyre Polish</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Wiper Fluid Replacement</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Oil Filter Replacement</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Engine Oil Replacement</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Battery Water Top-Up</p></div>
                                        </div>
                                    </div>
                                    <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{position:"absolute", left:"50%", top:"95%"}}  onClick={() => addcart("Mahindra","XUV 700 Petrol","Basic Car Service","3200")}>Add To Cart +</button>
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-2 d-none d-md-block">
                                    <img src="/Major_Brand/Periodic_Car_Services/service.png" style={{width:"100px", height:"75px"}} alt="" />
                                </div>
                                <div className="col bg-white p-4 ms-4" style={{position:"relative"}}>
                                    <div className="row mb-3 main-div">
                                        <div className="col fs-4 fw-bold">Standard Car Service</div>
                                        <div className="col text-end fw-bold fs-6" style={{color:"#ff0000"}}>Rs. 4299</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Car Wash</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Interior Vacuuming(Carpet & Seat)</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Car Scanning</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Heater/Spark Plugs Checking</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Front Brake Pads Serviced</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Brake Fluid Top-Up</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>AC Filter Cleaning</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Air Filter Replacement</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Engine Oil Replacement</p></div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Dashboard & tyre Polish</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Car Inspection</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Fuel Filter Checking</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Rear Brake Shoes Serviced</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Battery Water top-up</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Coolant Top Up (200 ml)</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Wiper Fluid Replacement</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Oil Filter Replacement</p></div>
                                        </div>
                                    </div>
                                    <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{position:"absolute", left:"50%", top:"95%"}}  onClick={() => addcart("Mahindra","XUV 700 Petrol","Standard Car Service","4299")}>Add To Cart +</button>
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-2 d-none d-md-block">
                                    <img src="/Major_Brand/Periodic_Car_Services/service.png" style={{width:"100px", height:"75px"}} alt="" />
                                </div>
                                <div className="col bg-white p-4 ms-4" style={{position:"relative"}}>
                                    <div className="row mb-3 main-div">
                                        <div className="col-7 fs-4 fw-bold">Comprehensive  Car Service</div>
                                        <div className="col text-end fw-bold fs-6" style={{color:"#ff0000"}}>Rs. 5501</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Throttle Body Cleaning</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Car Wash</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Tyre Rotation</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Air Filter Replacement</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Wiper Fluid Replacement</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Brake Fluid Top-Up</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Gear Oil Top-Up</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Engine Oil Replacement</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Fuel Filter Checking</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Car Scanning</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Wheel Balancing</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Rear Brake Shoes Cleaning</p></div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Dashboard & tyre Polish</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Interior Vacuuming ( Carpet & Seats )</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Oil Filter Replacement</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>AC Filter Replacement</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Coolant Top Up (200 ml)</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Battery Water top-up</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Front Brake Pads Cleaning</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Heater/Spark Plugs Checking</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Engine Flushing</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Car Inspection</p></div>
                                            <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{color: "#ff0000"}}></i><p className='m-0'>Wheel Alignment</p></div>
                                        </div>
                                    </div>
                                    <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{position:"absolute", left:"50%", top:"95%"}}  onClick={() => addcart("Mahindra","XUV 700 Petrol","Comprehensive  Car Service","5501")}>Add To Cart +</button>
                                </div>
                            </div>


                        </div>

                        <div className="col-lg-4 col-md-11 col-sm-12">
                            <div className='bg-white py-4 px-4 m-0 my-5 shadow-lg'>
                                <h2 className='fw-bold my-4'>Your Cart</h2>
                            
                                <div className='row bg-secondary-subtle border border-secondary rounded-1 mb-4'>
                                    <img src="/Major_Brand/Mahindra/xuv-700.jpeg" className='col-3 bg-white my-4 ms-4 rounded-3' style={{width: "100px", height: "60px"}} alt="" />
                                    <div className='col mt-4 mb-3 ms-1'>
                                        <p className='fs-5 fw-bold mb-0'>Mahindra</p>
                                        <p className='mb-0 text-secondary' style={{fontSize:"small"}}><span className='fw-bold text-black'>XUV 700 </span>Petrol</p>
                                        <button className='border-0 bg-transparent' style={{justifySelf:"end", display:"flex"}}>Change</button>
                                    </div>
                                </div>
                            
                                <p style={{color:"#ff0000"}}>Total Items: {ti}</p>
                                <hr />
                                <div className='row'>
                                    <p className='col fw-bold mb-0' style={{color:"#ff0000"}}>TOTAL</p>
                                    <p className='col text-end mb-0'>Rs. {tp}</p>
                                </div>
                                <hr />
                                <button className='fs-6 fw-bold px-4 py-2 my-4 border-0 mb-2 shadow-lg place-order' style={{display:"flex", justifySelf:"center"}}>Place Order</button>
                            </div>
                        </div>

                    </div>

                    <div className="row py-5">
                        <p className='fs-2 mb-4'>Why Choose VehicleCare for Periodic Car Services in Gurgaon for Your Mahindra XUV 700 Petrol?</p>
                        <p className='fs-4 fw-bold mb-2'>Why Periodic Service is Essential for Your Mahindra XUV 700:</p>
                        <p className='mb-0 ms-3 text-secondary'>1. Ensures optimal performance and longevity for Your XUV 700 Petrol Car</p>
                        <p className='mb-0 ms-3 text-secondary'>2. Detects potential issues early, avoiding costly repairs.</p>
                        <p className='mb-0 ms-3 text-secondary'>3. Key components like the engine, brake pads, and tyres are inspected.</p>
                        <p className='mb-0 ms-3 text-secondary'>4. Regular checks on lights, brakes, and tyres ensure road safety.</p>
                        <p className='mb-0 ms-3 text-secondary'>5. Prevents unexpected breakdowns.</p>
                        <p className='mb-4 ms-3 text-secondary'>6. Boosts resale value with a well-maintained Mahindra XUV 700 Petrol Car.</p>
                        <p className='fs-4 fw-bold mb-2'>Our Service Packages:</p>
                        <p className='mb-0 text-secondary'><span className='fw-bold' style={{color:"#ff0000"}}>Basic Car Service - </span>Essential services to keep your XUV 700 running smoothly.</p>
                        <p className='mb-0 text-secondary'><span className='fw-bold' style={{color:"#ff0000"}}>Standard Car Service - </span>Popular choice with extra services on top of the basic.</p>
                        <p className='mb-4 text-secondary'><span className='fw-bold' style={{color:"#ff0000"}}>Comprehensive Car Service - </span>Our premium package for full inspection and safety.</p>
                        <p className='fs-4 fw-bold mb-2'>Why VehicleCare Stands Out for Your Mahindra XUV 700 Petrol?</p>
                        <p className='text-secondary'>Skilled professionals, genuine parts, and top-quality service of your Mahindra XUV 700 Car. Satisfaction is guaranteed, with warranties and high-tech tools for all services.From AC gas recharging to wheel balancing, we deliver happiness with care.</p>
                    </div>

                    <div className="row pt-5 pb-3">

                        <p className='p-0 fs-4 fw-bold text-secondary mb-4'>Car Service Types and Recommendations</p>
                        <table className="table table-bordered">
                            <thead className="table-light">
                                <tr>
                                    <th className='text-secondary'>Service Type</th>
                                    <th className='text-secondary'>Description</th>
                                    <th className='text-secondary'>When to Avail</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='text-secondary'>Basic Car Service</td>
                                    <td className='text-secondary'>Includes Engine oil and Oil filter changes, checking and topping up essential fluids, and a basic vehicle check.</td>
                                    <td className='text-secondary'>Every 8,000-10,000 km or every 6 months. Ideal for routine maintenance and low-mileage usage.</td>
                                </tr>
                                <tr>
                                    <td className='text-secondary'>Standard Car Service</td>
                                    <td className='text-secondary'>Covers all aspects of Basic Service plus brake inspection, suspension check, and air filter Cleaning.</td>
                                    <td className='text-secondary'>Every 10,000-12,000 km or 8-9 months. Suitable for moderate usage or before long trips.</td>
                                </tr>
                                <tr>
                                    <td className='text-secondary'>Comprehensive Car Service</td>
                                    <td className='text-secondary'>Includes Standard Service tasks with additional services like wheel alignment & balancing, tyre rotation checkup, AC servicing, battery check, throttle body cleaning, engine flushing, and thorough inspection of all systems.</td>
                                    <td className='text-secondary'>Every 15,000-17,000 km or every 1-1.2 years. Recommended for high-mileage cars or post-warranty checks.</td>
                                </tr>
                            </tbody>
                         </table>

                    </div>

                    <div className="row py-5">
                        <p className='fs-3 fw-bold mb-4'>Frequently Asked Questions on VehicleCare Periodic Car Services:</p>
                        <div className="accordion py-2" id="accordionExample">

                            <div className="accordion-item my-3">
                            <h2 className="accordion-header">
                                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Why should I get Periodic Car Service for my Mahindra XUV 700 car in Gurgaon from VehicleCare?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body p-4">
                                    Regular periodic car service from VehicleCare in Gurgaon ensures your Mahindra XUV 700's optimal performance and longevity. VehicleCare uses advanced diagnostics, and genuine parts, and follows manufacturers' guidelines with meticulous attention to detail. With our expertise in Gurgaon, we guarantee a smooth and safe driving experience, enhancing your car's overall reliability and resale value.                                </div>
                            </div>
                            </div>

                            <div className="accordion-item my-3">
                            <h2 className="accordion-header">
                                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    What is the recommended frequency for servicing my Mahindra XUV 700 in Gurgaon with VehicleCare?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body p-4">
                                    VehicleCare recommends servicing your Mahindra XUV 700 in Gurgaon at least once a year or after every 10,000 km, whichever comes first, to maintain your vehicle's optimal performance.
                                </div>
                            </div>
                            </div>

                            <div className="accordion-item my-3">
                            <h2 className="accordion-header">
                                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Do I need to service my Mahindra XUV 700 car even if it's relatively new in Gurgaon?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body p-4">
                                Yes, regular servicing is crucial for your vehicle regardless of its age. VehicleCare in Gurgaon helps identify potential issues in your car early, preventing costly repairs and ensuring long-term reliability.
                                </div>
                            </div>
                            </div>

                            <div className="accordion-item my-3">
                            <h2 className="accordion-header">
                                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What does a periodic car service for my Mahindra XUV 700 include in Gurgaon?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body p-4">
                                VehicleCare's Mahindra XUV 700 service in Gurgaon includes a comprehensive inspection, fluid checks, filter replacements, brake inspection, tire rotation, and other essential tasks outlined in the manufacturer's service schedule.
                                </div>
                            </div>
                            </div>

                            <div className="accordion-item my-3">
                            <h2 className="accordion-header">
                                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                How long does a typical Mahindra XUV 700 service at VehicleCare in Gurgaon take?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body p-4">
                                The duration may vary for every car, but on average, a periodic service for a Mahindra XUV 700 at VehicleCare in Gurgaon takes around 3 to 4 hours. However, this can change based on additional repairs or any other services needed.
                                </div>
                            </div>
                            </div>

                            <div className="accordion-item my-3">
                            <h2 className="accordion-header">
                                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                How to know if my Mahindra XUV 700 needs standard service or comprehensive service in Gurgaon?
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body p-4">
                                VehicleCare's standard service in Gurgaon is a general service package that includes basic car services and inspection and is recommended after every 10,000 km. On the other hand, a comprehensive service in Gurgaon is required after every 40,000 km and is a more elaborate service package, including top-to-bottom servicing, replacement, and maintenance.
                                </div>
                            </div>
                            </div>

                            <div className="accordion-item my-3">
                            <h2 className="accordion-header">
                                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                What makes VehicleCare's Mahindra XUV 700 periodic service unique from Mahindra authorised service centres in Gurgaon?
                                </button>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body p-4">
                                VehicleCare in Gurgaon is simple, pocket-friendly, efficient, and reliable. You can book a service for your Mahindra XUV 700 from the comfort of your home, office, or anywhere. The pick-up and drop location is your choice, and you get great deals and discounts every time you opt for a service from VehicleCare. Just book a service through the VehicleCare app or website and relax.
                                </div>
                            </div>
                            </div>

                            <div className="accordion-item my-3">
                            <h2 className="accordion-header">
                                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                Is there a warranty on the Mahindra XUV 700 periodic service from VehicleCare in Gurgaon?
                                </button>
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body p-4">
                                VehicleCare offers a limited warranty on parts and labour for the services performed during the periodic maintenance of your Mahindra XUV 700 in Gurgaon.
                                </div>
                            </div>
                            </div>

                            <div className="accordion-item my-3">
                            <h2 className="accordion-header">
                                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                How do I know that VehicleCare uses genuine parts for my Mahindra XUV 700 car service in Gurgaon?
                                </button>
                            </h2>
                            <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body p-4">
                                VehicleCare in Gurgaon takes pride in delivering only top-quality, industry-standard, and genuine car parts from its channel of authorised dealers. Therefore, any car parts at VehicleCare are 100% genuine and come with a limited warranty period.
                                </div>
                            </div>
                            </div>

                            <div className="accordion-item my-3">
                            <h2 className="accordion-header">
                                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                How can I check the status of my Mahindra XUV 700 service at VehicleCare in Gurgaon?
                                </button>
                            </h2>
                            <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body p-4">
                                VehicleCare provides regular updates during the service process, and you can contact our 24x7 customer support directly for real-time information about your Mahindra XUV 700's service status or track your service on the VehicleCare app or through WhatsApp in Gurgaon.
                                </div>
                            </div>
                            </div>

                         </div>

                    </div>

                </div>


                {/* Denting Painting */}

                <div className="tab-pane fade" id="pills-Denting" role="tabpanel" aria-labelledby="pills-Denting-tab" tabIndex="0">

                          <div className="row m-0 p-0">

                              <div className="col-lg-8 col-md-11 col-sm-12" style={{ overflow: "scroll", scrollbarWidth: "thin", height: "550px" }}>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Bonnet.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Bonnet</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2500.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Bonnet","2500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Boot.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Boot</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2500.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Boot","2500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Left Fender.png" style={{ width: "100px", height: "45px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Left Fender</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2400.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Laft Fender","2400")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Right Fender.png" style={{ width: "100px", height: "45px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Right Fender</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2400.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Right Fender","2400")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Front Bumper.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Front Bumper</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2500.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Front Bumper","2500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Left Front Door.png" style={{ width: "100px", height: "45px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Left Front Door</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2500.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Left Front Door","2500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Right Front Door.png" style={{ width: "100px", height: "45px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Right Front Door</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2500.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Right Front Door","2500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Left Quarter Panel.png" style={{ width: "100px", height: "45px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Left Quarter Panel</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2400.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Left Quarter Panel","2400")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Right Quarter Panel.png" style={{ width: "100px", height: "45px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Right Quarter Panel</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2400.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Right Quarter Panel","2400")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Rear Bumper.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Rear Bumper</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2500.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>4 Layers of Painting</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Rear Bumper","2500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Left Rear Door.png" style={{ width: "100px", height: "45px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Left Rear Door</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2500.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Left Rear Door","2500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Right Rear Door.png" style={{ width: "100px", height: "45px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Right Rear Door</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2500.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Right Rear Door","2500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Roof.png" style={{ width: "100px", height: "55px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Roof</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 3500.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Roof","3500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Left Running Board.png" style={{ width: "100px", height: "45px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Left Running Board</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2400.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Left Running Board","2400")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Right Running Board.png" style={{ width: "100px", height: "45px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Right Running Board</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2400.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Right Running Board","2400")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Denting_Painting/Full Body.png" style={{ width: "100px", height: "60px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Full Body</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 23500.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Pannel Rubbing Polishing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Clear Coat Protective Layer Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Grade A Primer Applied</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Removal of Dents</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Premium DuPont Paint</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Years Warranty on Paint</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Full Body","23500")}>Add To Cart +</button>
                                      </div>
                                  </div>



                              </div>

                              <div className="col-lg-4 col-md-11 col-sm-12">
                                  <div className='bg-white py-4 px-4 m-0 my-5 shadow-lg'>
                                      <h2 className='fw-bold my-4'>Your Cart</h2>

                                      <div className='row bg-secondary-subtle border border-secondary rounded-1 mb-4'>
                                          <img src="/Major_Brand/Mahindra/xuv-700.jpeg" className='col-3 bg-white my-4 ms-4 rounded-3' style={{ width: "100px", height: "60px" }} alt="" />
                                          <div className='col mt-4 mb-3 ms-1'>
                                              <p className='fs-5 fw-bold mb-0'>Mahindra</p>
                                              <p className='mb-0 text-secondary' style={{ fontSize: "small" }}><span className='fw-bold text-black'>XUV 700 </span>Petrol</p>
                                              <button className='border-0 bg-transparent' style={{ justifySelf: "end", display: "flex" }}>Change</button>
                                          </div>
                                      </div>

                                      <p style={{ color: "#ff0000" }}>Total Items: {ti}</p>
                                      <hr />
                                      <div className='row'>
                                          <p className='col fw-bold mb-0' style={{ color: "#ff0000" }}>TOTAL</p>
                                          <p className='col text-end mb-0'>Rs. {tp}</p>
                                      </div>
                                      <hr />
                                      <button className='fs-6 fw-bold px-4 py-2 my-4 border-0 mb-2 shadow-lg place-order' style={{ display: "flex", justifySelf: "center" }}>Place Order</button>
                                  </div>
                              </div>

                          </div>

                          <div className="row py-5">
                              <p className='fs-2 mb-4'>Why Choose VehicleCare for Denting Painting in Gurgaon for Your Mahindra XUV 700 Petrol?</p>
                              <p className='fs-4 fw-bold mb-2'>Why Fix Dents of Your Mahindra XUV 700 Petrol?</p>
                              <p className='mb-0 ms-3 text-secondary'>1. <span className='fw-bold' style={{color:"#ff0000"}}>Preserve Resale Value - </span>Dents lower your Mahindra XUV 700 resale value.</p>
                              <p className='mb-0 ms-3 text-secondary'>2. <span className='fw-bold' style={{color:"#ff0000"}}>Prevent Rust - </span>Leaving dents leads to rust, raising repair costs.</p>
                              <p className='mb-0 ms-3 text-secondary'>3. <span className='fw-bold' style={{color:"#ff0000"}}>Restore Appearance - </span>Restores your car's appearance and maintains its visual appeal.</p>
                              <p className='mb-4 ms-3 text-secondary'>4. <span className='fw-bold' style={{color:"#ff0000"}}>Maintain Structural Integrity - </span>Protects the structural integrity of the car.</p>
                              <p className='fs-4 fw-bold mb-2'>Why VehicleCare Stands Out for Your Mahindra XUV 700 Petrol?</p>
                              <p className='mb-0 ms-3 text-secondary'>1. Denting-painting services are available for all car models including Mahindra XUV 700 Petrol in Gurgaon.</p>
                              <p className='mb-0 ms-3 text-secondary'>2. Genuine, high-grade paints with advanced tools.</p>
                              <p className='mb-0 ms-3 text-secondary'>3. Services include - Localised per-panel repairs, Full body denting and painting, Custom and fibre/plastic dent removal, 100% colour match for a showroom-like finish.</p>
                              <p className='mb-4 ms-3 text-secondary'>4. Paint warranties are provided at every VehicleCare workshop.</p>
                              <p className='fs-4 fw-bold mb-2'>The VehicleCare Promise:</p>
                              <p className='text-secondary'>Attention to detail with manufacturer-approved paints. Guaranteed quality and durability with a flawless finish.</p>
                          </div>

                          <div className="row py-5">
                              <p className='fs-3 fw-bold mb-4'>Frequently Asked Questions on VehicleCare Periodic Car Services:</p>
                              <div className="accordion py-2" id="accordionExample">

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          What types of vehicles does VehicleCare cater to in Gurgaon for denting and painting services?
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                          VehicleCare in Gurgaon specialises in denting and painting services for a wide range of vehicles, including cars, SUVs, and luxury models like Mahindra.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          What kind of damages can be repaired on my Mahindra XUV 700 at VehicleCare workshops in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                          VehicleCare Gurgaon workshops are equipped to repair any kind of sheet metal damage in your car, like dents and tear, or paint damages like scratches, blemishes, cuffs, or paint chips, plastic or fibre paint damage on your Mahindra XUV 700.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                          Does VehicleCare use genuine manufacturer-approved paints for denting and painting services in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                          Yes, VehicleCare in Gurgaon strictly adheres to using genuine and manufacturer-approved paints, ensuring an exact color match and maintaining the integrity of your vehicle's finish.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                          Can VehicleCare match the paint color exactly to my Mahindra XUV 700 in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                          We use premium industry-grade paints over grade A primer and specialised color palettes approved by Mahindra in Gurgaon, which offer an exact match with your original Mahindra XUV 700 color.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                          How much time does denting-painting repair take in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                          A single panel on your Mahindra XUV 700 car in Gurgaon may take up to 24-48 hours due to the elaborative procedures involved, which is followed by different steps like rubbing, polishing, and buffing. A full car body denting and painting for a Mahindra XUV 700 in Gurgaon may take up to a week depending upon different other factors.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                          Are there different charges for denting and painting in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                          The charges of both denting and painting in Gurgaon may vary depending on the degree of damage to the car. A minor dent on your car body also includes the painting charge; however, for big dents and damages, denting and painting services can be charged separately.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                          Is there any warranty on my car painting services at VehicleCare workshops in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                          Yes, VehicleCare in Gurgaon provides a warranty on every car painting service.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                          Can VehicleCare assist with insurance claims for denting and painting services in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                          Absolutely. Our team in Gurgaon is experienced in coordinating with insurance providers to simplify the claims process for our customers.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                          Is VehicleCare equipped to handle specific requirements for high-end vehicles like Mahindra during denting and painting services in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                          Yes, VehicleCare in Gurgaon has expertise in handling high-end vehicles, including Mahindra. Our technicians are trained to meet the specific standards and requirements of luxury car repairs.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                          What do customers say about their experiences with VehicleCare's denting and painting services in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                          Customers in Gurgaon consistently praise VehicleCare for its professionalism, attention to detail, and overall quality of denting and painting services. You can find testimonials on our website or inquire at our service centre for customer feedback.
                                          </div>
                                      </div>
                                  </div>

                              </div>

                          </div>             

                </div>


                {/* Mechanical Repairs */}

                <div className="tab-pane fade" id="pills-Mechanical" role="tabpanel" aria-labelledby="pills-Mechanical-tab" tabIndex="0">
                          <div className="row m-0 p-0">

                              <div className="col-lg-8 col-md-11 col-sm-12" style={{ overflow: "scroll", scrollbarWidth: "thin", height: "550px" }}>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Altenator.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Altenator</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 12000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Recommended: In Case of frequently Discharging Battery</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Additional</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting of Alternator</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Alternator Belt</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Alternator Replacement</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Alternator","12000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Altenator Belt.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Altenator Belt</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Alternator Belt","500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Arm Bush.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Arm Bush</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Arm Bush","500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Axle Left.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Axle Left</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 4500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Axle Left","4500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Axle Right.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Axle Right</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 4500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Axle Right","4500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Brake Shoe.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Brake Shoe</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1200</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Brake Shoe","1200")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Battery.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Battery</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 4000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Battery","4000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Belt Complete.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Belt Complete</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Belt Complete","2500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Blower.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Blower</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 3000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Blower","3000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Blower Housing.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Blower Housing</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Blower Housing","1500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Brake Hoses.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Brake Hoses</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 800</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Brake Hoses","800")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Brake Pads.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Brake Pads</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Brake Pads","2000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/C-Mount Rear.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">C-Mount Rear</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1800</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","C-Mount Rear","1800")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Caliper Pin.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Caliper Pin</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 600</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Caliper Pin","600")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Catalytic Converter.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Catalytic Converter</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 10000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Catalytic Converter","10000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Clutch Assembly.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Clutch Assembly</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 6500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Clutch Assembly","6500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Clutch Magnet.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Clutch Magnet</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Clutch Magnet","2500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Coil Spring.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Coil Spring</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1200</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Coil Spring","1200")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Condensor.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Condensor</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 5000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Condensor","5000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Control ARM Left.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Control ARM Left</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 3000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Control ARM Left","3000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Control ARM Right.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Control ARM Right</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 3000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Control ARM Right","3000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Control Panel.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Control Panel</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Control Panel","1500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Cooling Coil.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Cooling Coil</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 4000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Cooling Coil","4000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Crank Case Gasket.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Crank Case Gasket</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 900</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Crank Case Gasket","900")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Discharge Pipe.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Discharge Pipe</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Discharge Pipe","1000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Duct.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Duct</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1200</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Duct","1200")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/EGR Valve Gasket.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">EGR Valve Gasket</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","EGR Valve Gasket","2000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Exhaust Manifold Gasket.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Exhaust Manifold Gasket</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Exhaust Manifold Gasket","1000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Exhaust Pipe Gasket.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Exhaust Pipe Gasket</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 800</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Exhaust Pipe Gasket","800")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Expansion Valve.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Expansion Valve</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 6000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Expansion Valve","6000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Flywheel.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Flywheel</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 6000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Flywheel","6000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Front Left Shocker.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Front Left Shocker</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 3000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Front Left Shocker","3000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Front Mounting Left.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Front Mounting Left</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Front Mounting Left","2500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Front Mounting Right.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Front Mounting Right</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Front Mounting Right","2500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Front Right Shocker.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Front Right Shocker</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 3000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Front Right Shocker","3000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Fuel Hoses.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Fuel Hoses</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Fuel Hoses","1000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Fuel Pipe.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Fuel Pipe</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Fuel Pipe","1000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Fuel Pump Module.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Fuel Pump Module</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 4500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Fuel Pump Module","4500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Fuel Rail.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Fuel Rail</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Fuel Rail","2000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Fuel Tank.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Fuel Tank</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 8000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Fuel Tank","8000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Head Gasket.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Head Gasket</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Head Gasket","1500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Head Lamp Left.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Head Lamp Left</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 3000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Head Lamp Left","3000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Head Lamp Right.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Head Lamp Right</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 3000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Head Lamp Right","3000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Heating Core.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Heating Core</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 3000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Heating Core","3000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Intake Manifold Gasket.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Intake Manifold Gasket</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1200</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Intake Manifold Gasket","1200")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Jumping Rod Bush.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Jumping Rod Bush</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 800</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Jumping Rod Bush","800")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Link Rod.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Link Rod</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Link Rod","1500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Master Cylinder.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Master Cylinder</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 3000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Master Cylinder","3000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Muffler.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Muffler</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 4000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Muffler","4000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Oil Cooler Gasket.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Oil Cooler Gasket</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 900</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Oil Cooler Gasket","900")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/ORVM Cap.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">ORVM Cap</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 800</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","ORVM Cap","800")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Power Steering Pump Gasket.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Power Steering Pump Gasket</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Power Steering Pump Gasket","1000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Rack End.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Rack End</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Rack End","1500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Rear Left Shocker.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Rear Left Shocker</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 3000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Rear Left Shocker","3000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Rear Right Shocker.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Rear Right Shocker</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 3000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Rear Right Shocker","3000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Resistor.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Resistor</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 600</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Resistor","600")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Shocker Mount.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Shocker Mount</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1200</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Shocker Mount","1200")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Side View Mirror Left.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Side View Mirror Left</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Side View Mirror Left","2000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Side View Mirror Right.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Side View Mirror Right</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Side View Mirror Right","2000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Silencer.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Silencer</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 5000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Silencer","5000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Steering Rack Assembly.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Steering Rack Assembly</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 7000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Steering Rack Assembly","7000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Sub Mirror.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Sub Mirror</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1200</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Sub Mirror","1200")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Suction Pipe.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Suction Pipe</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Suction Pipe","1500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Tail Lamp Left.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Tail Lamp Left</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1600</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Tail Lamp Left","1600")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Tail Lamp Right.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Tail Lamp Right</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1600</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Tail Lamp Right","1600")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Tappet Packaging Cover.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Tappet Packaging Cover</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 800</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Tappet Packaging Cover","800")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Throttle Body Cleaning.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Throttle Body Cleaning</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Throttle Body Cleaning","1500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Tie Rod.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Tie Rod</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1200</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Tie Rod","1200")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Timing Belt.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Timing Belt</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Timing Belt","2000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Washer Pipe.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Washer Pipe</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 800</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Washer Pipe","800")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Washer Reservoir.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Washer Reservoir</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Washer Reservoir","1500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Water Pump Belt.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Water Pump Belt</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1200</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Water Pump Belt","1200")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Wiper Blades.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Wiper Blades</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Wiper Blades","500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Wiper Linkage.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Wiper Linkage</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 800</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Wiper Linkage","800")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Mechanical_Repairs/Wiper Motor.png" style={{ width: "100px", height: "75px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Wiper Motor</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2700</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Opening & Fitting</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>1 Month Warranty</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Wiper Motor","2700")}>Add To Cart +</button>
                                      </div>
                                  </div>



                              </div>

                              <div className="col-lg-4 col-md-11 col-sm-12">
                                  <div className='bg-white py-4 px-4 m-0 my-5 shadow-lg'>
                                      <h2 className='fw-bold my-4'>Your Cart</h2>

                                      <div className='row bg-secondary-subtle border border-secondary rounded-1 mb-4'>
                                          <img src="/Major_Brand/Mahindra/xuv-700.jpeg" className='col-3 bg-white my-4 ms-4 rounded-3' style={{ width: "100px", height: "60px" }} alt="" />
                                          <div className='col mt-4 mb-3 ms-1'>
                                              <p className='fs-5 fw-bold mb-0'>Mahindra</p>
                                              <p className='mb-0 text-secondary' style={{ fontSize: "small" }}><span className='fw-bold text-black'>XUV 700 </span>Petrol</p>
                                              <button className='border-0 bg-transparent' style={{ justifySelf: "end", display: "flex" }}>Change</button>
                                          </div>
                                      </div>

                                      <p style={{ color: "#ff0000" }}>Total Items: {ti}</p>
                                      <hr />
                                      <div className='row'>
                                          <p className='col fw-bold mb-0' style={{ color: "#ff0000" }}>TOTAL</p>
                                          <p className='col text-end mb-0'>Rs. {tp}</p>
                                      </div>
                                      <hr />
                                      <button className='fs-6 fw-bold px-4 py-2 my-4 border-0 mb-2 shadow-lg place-order' style={{ display: "flex", justifySelf: "center" }}>Place Order</button>
                                  </div>
                              </div>

                          </div>

                          <div className="row py-5">
                              <p className='fs-2 mb-4'>Why Choose VehicleCare for Denting Painting in Gurgaon for Your Mahindra XUV 700 Petrol?</p>
                              <p className='fs-4 fw-bold mb-2'>Why Fix Dents of Your Mahindra XUV 700 Petrol?</p>
                              <p className='mb-0 ms-3 text-secondary'>1. <span className='fw-bold' style={{ color: "#ff0000" }}>Preserve Resale Value - </span>Dents lower your Mahindra XUV 700 resale value.</p>
                              <p className='mb-0 ms-3 text-secondary'>2. <span className='fw-bold' style={{ color: "#ff0000" }}>Prevent Rust - </span>Leaving dents leads to rust, raising repair costs.</p>
                              <p className='mb-0 ms-3 text-secondary'>3. <span className='fw-bold' style={{ color: "#ff0000" }}>Restore Appearance - </span>Restores your car's appearance and maintains its visual appeal.</p>
                              <p className='mb-4 ms-3 text-secondary'>4. <span className='fw-bold' style={{ color: "#ff0000" }}>Maintain Structural Integrity - </span>Protects the structural integrity of the car.</p>
                              <p className='fs-4 fw-bold mb-2'>Why VehicleCare Stands Out for Your Mahindra XUV 700 Petrol?</p>
                              <p className='mb-0 ms-3 text-secondary'>1. Denting-painting services are available for all car models including Mahindra XUV 700 Petrol in Gurgaon.</p>
                              <p className='mb-0 ms-3 text-secondary'>2. Genuine, high-grade paints with advanced tools.</p>
                              <p className='mb-0 ms-3 text-secondary'>3. Services include - Localised per-panel repairs, Full body denting and painting, Custom and fibre/plastic dent removal, 100% colour match for a showroom-like finish.</p>
                              <p className='mb-4 ms-3 text-secondary'>4. Paint warranties are provided at every VehicleCare workshop.</p>
                              <p className='fs-4 fw-bold mb-2'>The VehicleCare Promise:</p>
                              <p className='text-secondary'>Attention to detail with manufacturer-approved paints. Guaranteed quality and durability with a flawless finish.</p>
                          </div>

                          <div className="row py-5">
                              <p className='fs-3 fw-bold mb-4'>Frequently Asked Questions on VehicleCare Periodic Car Services:</p>
                              <div className="accordion py-2" id="accordionExample">

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              What types of vehicles does VehicleCare cater to in Gurgaon for denting and painting services?
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare in Gurgaon specialises in denting and painting services for a wide range of vehicles, including cars, SUVs, and luxury models like Mahindra.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              What kind of damages can be repaired on my Mahindra XUV 700 at VehicleCare workshops in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare Gurgaon workshops are equipped to repair any kind of sheet metal damage in your car, like dents and tear, or paint damages like scratches, blemishes, cuffs, or paint chips, plastic or fibre paint damage on your Mahindra XUV 700.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Does VehicleCare use genuine manufacturer-approved paints for denting and painting services in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              Yes, VehicleCare in Gurgaon strictly adheres to using genuine and manufacturer-approved paints, ensuring an exact color match and maintaining the integrity of your vehicle's finish.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                              Can VehicleCare match the paint color exactly to my Mahindra XUV 700 in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              We use premium industry-grade paints over grade A primer and specialised color palettes approved by Mahindra in Gurgaon, which offer an exact match with your original Mahindra XUV 700 color.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                              How much time does denting-painting repair take in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              A single panel on your Mahindra XUV 700 car in Gurgaon may take up to 24-48 hours due to the elaborative procedures involved, which is followed by different steps like rubbing, polishing, and buffing. A full car body denting and painting for a Mahindra XUV 700 in Gurgaon may take up to a week depending upon different other factors.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                              Are there different charges for denting and painting in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              The charges of both denting and painting in Gurgaon may vary depending on the degree of damage to the car. A minor dent on your car body also includes the painting charge; however, for big dents and damages, denting and painting services can be charged separately.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                              Is there any warranty on my car painting services at VehicleCare workshops in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              Yes, VehicleCare in Gurgaon provides a warranty on every car painting service.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                              Can VehicleCare assist with insurance claims for denting and painting services in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              Absolutely. Our team in Gurgaon is experienced in coordinating with insurance providers to simplify the claims process for our customers.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                              Is VehicleCare equipped to handle specific requirements for high-end vehicles like Mahindra during denting and painting services in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              Yes, VehicleCare in Gurgaon has expertise in handling high-end vehicles, including Mahindra. Our technicians are trained to meet the specific standards and requirements of luxury car repairs.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                              What do customers say about their experiences with VehicleCare's denting and painting services in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              Customers in Gurgaon consistently praise VehicleCare for its professionalism, attention to detail, and overall quality of denting and painting services. You can find testimonials on our website or inquire at our service centre for customer feedback.
                                          </div>
                                      </div>
                                  </div>

                              </div>

                          </div>    
                </div>


                {/* Car AC Services */}

                <div className="tab-pane fade" id="pills-AC" role="tabpanel" aria-labelledby="pills-AC-tab" tabIndex="0">
                           <div className="row m-0 p-0">

                              <div className="col-lg-8 col-md-11 col-sm-12" style={{ overflow: "scroll", scrollbarWidth: "thin", height: "550px" }}>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Car_AC_Services/AC Gas CheckUp.png" style={{ width: "100px", height: "100px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">AC Gas CheckUp</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 600</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>AC Inspection</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "90%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","AC Gas CheckUp","600")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Car_AC_Services/AC Service.png" style={{ width: "100px", height: "100px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">AC Service</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>AC Inspection</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>C Filter Cleaning</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>AC Gas Topup (up to 400gms)</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>AC Vent Cleaning</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Condenser Cleaning</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Every 5,000 Kms or 3 Months (Recommended)</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","AC Service","2500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Car_AC_Services/AC Compressor.png" style={{ width: "100px", height: "100px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col-7 fs-4 fw-bold">AC Compressor</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 8000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>AdditionalFree Pickup & Drop</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>AC Gas</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Expansion Valve</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Spare Part Cost Only</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>In Case of Compressor Leakage or Less Cooling</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Compressor Oil</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Sensors Additional</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>AC Pipe</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Compressor Replacement (OES)</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>3 Months WarrantyRecommended</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","AC Compressor","8000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Car_AC_Services/AC Gas.png" style={{ width: "100px", height: "100px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col-7 fs-4 fw-bold">AC Gas</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1200</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "85%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","AC Gas","1200")}>Add To Cart +</button>
                                      </div>
                                  </div>


                              </div>

                              <div className="col-lg-4 col-md-11 col-sm-12">
                                  <div className='bg-white py-4 px-4 m-0 my-5 shadow-lg'>
                                      <h2 className='fw-bold my-4'>Your Cart</h2>

                                      <div className='row bg-secondary-subtle border border-secondary rounded-1 mb-4'>
                                          <img src="/Major_Brand/Mahindra/xuv-700.jpeg" className='col-3 bg-white my-4 ms-4 rounded-3' style={{ width: "100px", height: "60px" }} alt="" />
                                          <div className='col mt-4 mb-3 ms-1'>
                                              <p className='fs-5 fw-bold mb-0'>Mahindra</p>
                                              <p className='mb-0 text-secondary' style={{ fontSize: "small" }}><span className='fw-bold text-black'>XUV 700 </span>Petrol</p>
                                              <button className='border-0 bg-transparent' style={{ justifySelf: "end", display: "flex" }}>Change</button>
                                          </div>
                                      </div>

                                      <p style={{ color: "#ff0000" }}>Total Items: {ti}</p>
                                      <hr />
                                      <div className='row'>
                                          <p className='col fw-bold mb-0' style={{ color: "#ff0000" }}>TOTAL</p>
                                          <p className='col text-end mb-0'>Rs. {tp}</p>
                                      </div>
                                      <hr />
                                      <button className='fs-6 fw-bold px-4 py-2 my-4 border-0 mb-2 shadow-lg place-order' style={{ display: "flex", justifySelf: "center" }}>Place Order</button>
                                  </div>
                              </div>

                           </div>

                          <div className="row py-5">
                              <p className='fs-2 mb-4'>Why Choose VehicleCare for Periodic Car Services in Gurgaon for Your Mahindra XUV 700 Petrol?</p>
                              <p className='fs-4 fw-bold mb-2'>Why Periodic Service is Essential for Your Mahindra XUV 700:</p>
                              <p className='mb-0 ms-3 text-secondary'>1. Ensures optimal performance and longevity for Your XUV 700 Petrol Car</p>
                              <p className='mb-0 ms-3 text-secondary'>2. Detects potential issues early, avoiding costly repairs.</p>
                              <p className='mb-0 ms-3 text-secondary'>3. Key components like the engine, brake pads, and tyres are inspected.</p>
                              <p className='mb-0 ms-3 text-secondary'>4. Regular checks on lights, brakes, and tyres ensure road safety.</p>
                              <p className='mb-0 ms-3 text-secondary'>5. Prevents unexpected breakdowns.</p>
                              <p className='mb-4 ms-3 text-secondary'>6. Boosts resale value with a well-maintained Mahindra XUV 700 Petrol Car.</p>
                              <p className='fs-4 fw-bold mb-2'>Our Service Packages:</p>
                              <p className='mb-0 text-secondary'><span className='fw-bold' style={{ color: "#ff0000" }}>Basic Car Service - </span>Essential services to keep your XUV 700 running smoothly.</p>
                              <p className='mb-0 text-secondary'><span className='fw-bold' style={{ color: "#ff0000" }}>Standard Car Service - </span>Popular choice with extra services on top of the basic.</p>
                              <p className='mb-4 text-secondary'><span className='fw-bold' style={{ color: "#ff0000" }}>Comprehensive Car Service - </span>Our premium package for full inspection and safety.</p>
                              <p className='fs-4 fw-bold mb-2'>Why VehicleCare Stands Out for Your Mahindra XUV 700 Petrol?</p>
                              <p className='text-secondary'>Skilled professionals, genuine parts, and top-quality service of your Mahindra XUV 700 Car. Satisfaction is guaranteed, with warranties and high-tech tools for all services.From AC gas recharging to wheel balancing, we deliver happiness with care.</p>
                          </div>

                          <div className="row py-5">
                              <p className='fs-3 fw-bold mb-4'>Frequently Asked Questions on VehicleCare Periodic Car Services:</p>
                              <div className="accordion py-2" id="accordionExample">

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              Why should I get Periodic Car Service for my Mahindra XUV 700 car in Gurgaon from VehicleCare?
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              Regular periodic car service from VehicleCare in Gurgaon ensures your Mahindra XUV 700's optimal performance and longevity. VehicleCare uses advanced diagnostics, and genuine parts, and follows manufacturers' guidelines with meticulous attention to detail. With our expertise in Gurgaon, we guarantee a smooth and safe driving experience, enhancing your car's overall reliability and resale value.                                </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              What is the recommended frequency for servicing my Mahindra XUV 700 in Gurgaon with VehicleCare?
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare recommends servicing your Mahindra XUV 700 in Gurgaon at least once a year or after every 10,000 km, whichever comes first, to maintain your vehicle's optimal performance.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Do I need to service my Mahindra XUV 700 car even if it's relatively new in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              Yes, regular servicing is crucial for your vehicle regardless of its age. VehicleCare in Gurgaon helps identify potential issues in your car early, preventing costly repairs and ensuring long-term reliability.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                              What does a periodic car service for my Mahindra XUV 700 include in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare's Mahindra XUV 700 service in Gurgaon includes a comprehensive inspection, fluid checks, filter replacements, brake inspection, tire rotation, and other essential tasks outlined in the manufacturer's service schedule.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                              How long does a typical Mahindra XUV 700 service at VehicleCare in Gurgaon take?
                                          </button>
                                      </h2>
                                      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              The duration may vary for every car, but on average, a periodic service for a Mahindra XUV 700 at VehicleCare in Gurgaon takes around 3 to 4 hours. However, this can change based on additional repairs or any other services needed.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                              How to know if my Mahindra XUV 700 needs standard service or comprehensive service in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare's standard service in Gurgaon is a general service package that includes basic car services and inspection and is recommended after every 10,000 km. On the other hand, a comprehensive service in Gurgaon is required after every 40,000 km and is a more elaborate service package, including top-to-bottom servicing, replacement, and maintenance.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                              What makes VehicleCare's Mahindra XUV 700 periodic service unique from Mahindra authorised service centres in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare in Gurgaon is simple, pocket-friendly, efficient, and reliable. You can book a service for your Mahindra XUV 700 from the comfort of your home, office, or anywhere. The pick-up and drop location is your choice, and you get great deals and discounts every time you opt for a service from VehicleCare. Just book a service through the VehicleCare app or website and relax.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                              Is there a warranty on the Mahindra XUV 700 periodic service from VehicleCare in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare offers a limited warranty on parts and labour for the services performed during the periodic maintenance of your Mahindra XUV 700 in Gurgaon.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                              How do I know that VehicleCare uses genuine parts for my Mahindra XUV 700 car service in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare in Gurgaon takes pride in delivering only top-quality, industry-standard, and genuine car parts from its channel of authorised dealers. Therefore, any car parts at VehicleCare are 100% genuine and come with a limited warranty period.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                              How can I check the status of my Mahindra XUV 700 service at VehicleCare in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare provides regular updates during the service process, and you can contact our 24x7 customer support directly for real-time information about your Mahindra XUV 700's service status or track your service on the VehicleCare app or through WhatsApp in Gurgaon.
                                          </div>
                                      </div>
                                  </div>

                              </div>

                          </div>
                </div>


                {/* Wheel Car */}

                <div className="tab-pane fade" id="pills-Wheel" role="tabpanel" aria-labelledby="pills-Wheel-tab" tabIndex="0">
                          <div className="row m-0 p-0">

                              <div className="col-lg-8 col-md-11 col-sm-12" style={{ overflow: "scroll", scrollbarWidth: "thin", height: "550px" }}>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Wheel_Care/Wheel Alignment.png" style={{ width: "100px", height: "100px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Wheel Alignment</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 500.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Every 6 Months or 5,000 Kms (Recommended)</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Steering Adjustment and Correction</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Camber and Castor Adjustment</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Alloy Weights Additional</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>All Four Tyre Rotation as per Tread Wear</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Laser Assisted Wheel Alignment</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Automated Wheel Balancing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Weight Correction</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Wheel Alignment","500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Wheel_Care/Wheel Balancing.png" style={{ width: "100px", height: "100px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Wheel Balencing</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 500.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Every 6 Months or 5,000 Kms (Recommended)</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Steering Adjustment and Correction</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Camber and Castor Adjustment</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Alloy Weights Additional</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>All Four Tyre Rotation as per Tread Wear</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Laser Assisted Wheel Alignment</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Automated Wheel Balancing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Weight Correction</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Wheel Balencing","500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                              </div>

                              <div className="col-lg-4 col-md-11 col-sm-12">
                                  <div className='bg-white py-4 px-4 m-0 my-5 shadow-lg'>
                                      <h2 className='fw-bold my-4'>Your Cart</h2>

                                      <div className='row bg-secondary-subtle border border-secondary rounded-1 mb-4'>
                                          <img src="/Major_Brand/Mahindra/xuv-700.jpeg" className='col-3 bg-white my-4 ms-4 rounded-3' style={{ width: "100px", height: "60px" }} alt="" />
                                          <div className='col mt-4 mb-3 ms-1'>
                                              <p className='fs-5 fw-bold mb-0'>Mahindra</p>
                                              <p className='mb-0 text-secondary' style={{ fontSize: "small" }}><span className='fw-bold text-black'>XUV 700 </span>Petrol</p>
                                              <button className='border-0 bg-transparent' style={{ justifySelf: "end", display: "flex" }}>Change</button>
                                          </div>
                                      </div>

                                      <p style={{ color: "#ff0000" }}>Total Items: {ti}</p>
                                      <hr />
                                      <div className='row'>
                                          <p className='col fw-bold mb-0' style={{ color: "#ff0000" }}>TOTAL</p>
                                          <p className='col text-end mb-0'>Rs. {tp}</p>
                                      </div>
                                      <hr />
                                      <button className='fs-6 fw-bold px-4 py-2 my-4 border-0 mb-2 shadow-lg place-order' style={{ display: "flex", justifySelf: "center" }}>Place Order</button>
                                  </div>
                              </div>

                          </div>

                          <div className="row py-5">
                              <p className='fs-2 mb-4'>Why Choose VehicleCare for Periodic Car Services in Gurgaon for Your Mahindra XUV 700 Petrol?</p>
                              <p className='fs-4 fw-bold mb-2'>Why Periodic Service is Essential for Your Mahindra XUV 700:</p>
                              <p className='mb-0 ms-3 text-secondary'>1. Ensures optimal performance and longevity for Your XUV 700 Petrol Car</p>
                              <p className='mb-0 ms-3 text-secondary'>2. Detects potential issues early, avoiding costly repairs.</p>
                              <p className='mb-0 ms-3 text-secondary'>3. Key components like the engine, brake pads, and tyres are inspected.</p>
                              <p className='mb-0 ms-3 text-secondary'>4. Regular checks on lights, brakes, and tyres ensure road safety.</p>
                              <p className='mb-0 ms-3 text-secondary'>5. Prevents unexpected breakdowns.</p>
                              <p className='mb-4 ms-3 text-secondary'>6. Boosts resale value with a well-maintained Mahindra XUV 700 Petrol Car.</p>
                              <p className='fs-4 fw-bold mb-2'>Our Service Packages:</p>
                              <p className='mb-0 text-secondary'><span className='fw-bold' style={{ color: "#ff0000" }}>Basic Car Service - </span>Essential services to keep your XUV 700 running smoothly.</p>
                              <p className='mb-0 text-secondary'><span className='fw-bold' style={{ color: "#ff0000" }}>Standard Car Service - </span>Popular choice with extra services on top of the basic.</p>
                              <p className='mb-4 text-secondary'><span className='fw-bold' style={{ color: "#ff0000" }}>Comprehensive Car Service - </span>Our premium package for full inspection and safety.</p>
                              <p className='fs-4 fw-bold mb-2'>Why VehicleCare Stands Out for Your Mahindra XUV 700 Petrol?</p>
                              <p className='text-secondary'>Skilled professionals, genuine parts, and top-quality service of your Mahindra XUV 700 Car. Satisfaction is guaranteed, with warranties and high-tech tools for all services.From AC gas recharging to wheel balancing, we deliver happiness with care.</p>
                          </div>

                          <div className="row py-5">
                              <p className='fs-3 fw-bold mb-4'>Frequently Asked Questions on VehicleCare Periodic Car Services:</p>
                              <div className="accordion py-2" id="accordionExample">

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              Why should I get Periodic Car Service for my Mahindra XUV 700 car in Gurgaon from VehicleCare?
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              Regular periodic car service from VehicleCare in Gurgaon ensures your Mahindra XUV 700's optimal performance and longevity. VehicleCare uses advanced diagnostics, and genuine parts, and follows manufacturers' guidelines with meticulous attention to detail. With our expertise in Gurgaon, we guarantee a smooth and safe driving experience, enhancing your car's overall reliability and resale value.                                </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              What is the recommended frequency for servicing my Mahindra XUV 700 in Gurgaon with VehicleCare?
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare recommends servicing your Mahindra XUV 700 in Gurgaon at least once a year or after every 10,000 km, whichever comes first, to maintain your vehicle's optimal performance.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Do I need to service my Mahindra XUV 700 car even if it's relatively new in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              Yes, regular servicing is crucial for your vehicle regardless of its age. VehicleCare in Gurgaon helps identify potential issues in your car early, preventing costly repairs and ensuring long-term reliability.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                              What does a periodic car service for my Mahindra XUV 700 include in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare's Mahindra XUV 700 service in Gurgaon includes a comprehensive inspection, fluid checks, filter replacements, brake inspection, tire rotation, and other essential tasks outlined in the manufacturer's service schedule.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                              How long does a typical Mahindra XUV 700 service at VehicleCare in Gurgaon take?
                                          </button>
                                      </h2>
                                      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              The duration may vary for every car, but on average, a periodic service for a Mahindra XUV 700 at VehicleCare in Gurgaon takes around 3 to 4 hours. However, this can change based on additional repairs or any other services needed.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                              How to know if my Mahindra XUV 700 needs standard service or comprehensive service in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare's standard service in Gurgaon is a general service package that includes basic car services and inspection and is recommended after every 10,000 km. On the other hand, a comprehensive service in Gurgaon is required after every 40,000 km and is a more elaborate service package, including top-to-bottom servicing, replacement, and maintenance.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                              What makes VehicleCare's Mahindra XUV 700 periodic service unique from Mahindra authorised service centres in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare in Gurgaon is simple, pocket-friendly, efficient, and reliable. You can book a service for your Mahindra XUV 700 from the comfort of your home, office, or anywhere. The pick-up and drop location is your choice, and you get great deals and discounts every time you opt for a service from VehicleCare. Just book a service through the VehicleCare app or website and relax.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                              Is there a warranty on the Mahindra XUV 700 periodic service from VehicleCare in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare offers a limited warranty on parts and labour for the services performed during the periodic maintenance of your Mahindra XUV 700 in Gurgaon.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                              How do I know that VehicleCare uses genuine parts for my Mahindra XUV 700 car service in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare in Gurgaon takes pride in delivering only top-quality, industry-standard, and genuine car parts from its channel of authorised dealers. Therefore, any car parts at VehicleCare are 100% genuine and come with a limited warranty period.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                              How can I check the status of my Mahindra XUV 700 service at VehicleCare in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare provides regular updates during the service process, and you can contact our 24x7 customer support directly for real-time information about your Mahindra XUV 700's service status or track your service on the VehicleCare app or through WhatsApp in Gurgaon.
                                          </div>
                                      </div>
                                  </div>

                              </div>

                          </div>
                </div>


                {/* Car Cleaning */}

                <div className="tab-pane fade" id="pills-Cleaning" role="tabpanel" aria-labelledby="pills-Cleaning-tab" tabIndex="0">
                          <div className="row m-0 p-0">

                              <div className="col-lg-8 col-md-11 col-sm-12" style={{ overflow: "scroll", scrollbarWidth: "thin", height: "550px" }}>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Car_Cleaning/Car Wash.png" style={{ width: "100px", height: "80px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Car Wash</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 500.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Smart Dry Wash</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Wheel and Tire Cleaning</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Engine Bay Cleaning</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Window Cleaning</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Polish</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Hand DryExterior Detailing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Dashboard and Console</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Interior Vacuuming</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Cleaning:</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Car Wash","500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Car_Cleaning/Car Interior Dry Cleaning.png" style={{ width: "100px", height: "60px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Car Interior Dry Cleaning</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1600.00</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Smart Dry Wash</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Wheel and Tire Cleaning</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Engine Bay Cleaning</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Window Cleaning</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Polish</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Hand DryExterior Detailing</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Dashboard and Console</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Interior Vacuuming</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Cleaning:</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Car Interior Dry Cleaning","1600")}>Add To Cart +</button>
                                      </div>
                                  </div>

                              </div>

                              <div className="col-lg-4 col-md-11 col-sm-12">
                                  <div className='bg-white py-4 px-4 m-0 my-5 shadow-lg'>
                                      <h2 className='fw-bold my-4'>Your Cart</h2>

                                      <div className='row bg-secondary-subtle border border-secondary rounded-1 mb-4'>
                                          <img src="/Major_Brand/Mahindra/xuv-700.jpeg" className='col-3 bg-white my-4 ms-4 rounded-3' style={{ width: "100px", height: "60px" }} alt="" />
                                          <div className='col mt-4 mb-3 ms-1'>
                                              <p className='fs-5 fw-bold mb-0'>Mahindra</p>
                                              <p className='mb-0 text-secondary' style={{ fontSize: "small" }}><span className='fw-bold text-black'>XUV 700 </span>Petrol</p>
                                              <button className='border-0 bg-transparent' style={{ justifySelf: "end", display: "flex" }}>Change</button>
                                          </div>
                                      </div>

                                      <p style={{ color: "#ff0000" }}>Total Items: {ti}</p>
                                      <hr />
                                      <div className='row'>
                                          <p className='col fw-bold mb-0' style={{ color: "#ff0000" }}>TOTAL</p>
                                          <p className='col text-end mb-0'>Rs. {tp}</p>
                                      </div>
                                      <hr />
                                      <button className='fs-6 fw-bold px-4 py-2 my-4 border-0 mb-2 shadow-lg place-order' style={{ display: "flex", justifySelf: "center" }}>Place Order</button>
                                  </div>
                              </div>

                          </div>

                          <div className="row py-5">
                              <p className='fs-2 mb-4'>Why Choose VehicleCare for Periodic Car Services in Gurgaon for Your Mahindra XUV 700 Petrol?</p>
                              <p className='fs-4 fw-bold mb-2'>Why Periodic Service is Essential for Your Mahindra XUV 700:</p>
                              <p className='mb-0 ms-3 text-secondary'>1. Ensures optimal performance and longevity for Your XUV 700 Petrol Car</p>
                              <p className='mb-0 ms-3 text-secondary'>2. Detects potential issues early, avoiding costly repairs.</p>
                              <p className='mb-0 ms-3 text-secondary'>3. Key components like the engine, brake pads, and tyres are inspected.</p>
                              <p className='mb-0 ms-3 text-secondary'>4. Regular checks on lights, brakes, and tyres ensure road safety.</p>
                              <p className='mb-0 ms-3 text-secondary'>5. Prevents unexpected breakdowns.</p>
                              <p className='mb-4 ms-3 text-secondary'>6. Boosts resale value with a well-maintained Mahindra XUV 700 Petrol Car.</p>
                              <p className='fs-4 fw-bold mb-2'>Our Service Packages:</p>
                              <p className='mb-0 text-secondary'><span className='fw-bold' style={{ color: "#ff0000" }}>Basic Car Service - </span>Essential services to keep your XUV 700 running smoothly.</p>
                              <p className='mb-0 text-secondary'><span className='fw-bold' style={{ color: "#ff0000" }}>Standard Car Service - </span>Popular choice with extra services on top of the basic.</p>
                              <p className='mb-4 text-secondary'><span className='fw-bold' style={{ color: "#ff0000" }}>Comprehensive Car Service - </span>Our premium package for full inspection and safety.</p>
                              <p className='fs-4 fw-bold mb-2'>Why VehicleCare Stands Out for Your Mahindra XUV 700 Petrol?</p>
                              <p className='text-secondary'>Skilled professionals, genuine parts, and top-quality service of your Mahindra XUV 700 Car. Satisfaction is guaranteed, with warranties and high-tech tools for all services.From AC gas recharging to wheel balancing, we deliver happiness with care.</p>
                          </div>

                          <div className="row py-5">
                              <p className='fs-3 fw-bold mb-4'>Frequently Asked Questions on VehicleCare Periodic Car Services:</p>
                              <div className="accordion py-2" id="accordionExample">

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              Why should I get Periodic Car Service for my Mahindra XUV 700 car in Gurgaon from VehicleCare?
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              Regular periodic car service from VehicleCare in Gurgaon ensures your Mahindra XUV 700's optimal performance and longevity. VehicleCare uses advanced diagnostics, and genuine parts, and follows manufacturers' guidelines with meticulous attention to detail. With our expertise in Gurgaon, we guarantee a smooth and safe driving experience, enhancing your car's overall reliability and resale value.                                </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              What is the recommended frequency for servicing my Mahindra XUV 700 in Gurgaon with VehicleCare?
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare recommends servicing your Mahindra XUV 700 in Gurgaon at least once a year or after every 10,000 km, whichever comes first, to maintain your vehicle's optimal performance.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Do I need to service my Mahindra XUV 700 car even if it's relatively new in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              Yes, regular servicing is crucial for your vehicle regardless of its age. VehicleCare in Gurgaon helps identify potential issues in your car early, preventing costly repairs and ensuring long-term reliability.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                              What does a periodic car service for my Mahindra XUV 700 include in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare's Mahindra XUV 700 service in Gurgaon includes a comprehensive inspection, fluid checks, filter replacements, brake inspection, tire rotation, and other essential tasks outlined in the manufacturer's service schedule.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                              How long does a typical Mahindra XUV 700 service at VehicleCare in Gurgaon take?
                                          </button>
                                      </h2>
                                      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              The duration may vary for every car, but on average, a periodic service for a Mahindra XUV 700 at VehicleCare in Gurgaon takes around 3 to 4 hours. However, this can change based on additional repairs or any other services needed.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                              How to know if my Mahindra XUV 700 needs standard service or comprehensive service in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare's standard service in Gurgaon is a general service package that includes basic car services and inspection and is recommended after every 10,000 km. On the other hand, a comprehensive service in Gurgaon is required after every 40,000 km and is a more elaborate service package, including top-to-bottom servicing, replacement, and maintenance.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                              What makes VehicleCare's Mahindra XUV 700 periodic service unique from Mahindra authorised service centres in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare in Gurgaon is simple, pocket-friendly, efficient, and reliable. You can book a service for your Mahindra XUV 700 from the comfort of your home, office, or anywhere. The pick-up and drop location is your choice, and you get great deals and discounts every time you opt for a service from VehicleCare. Just book a service through the VehicleCare app or website and relax.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                              Is there a warranty on the Mahindra XUV 700 periodic service from VehicleCare in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare offers a limited warranty on parts and labour for the services performed during the periodic maintenance of your Mahindra XUV 700 in Gurgaon.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                              How do I know that VehicleCare uses genuine parts for my Mahindra XUV 700 car service in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare in Gurgaon takes pride in delivering only top-quality, industry-standard, and genuine car parts from its channel of authorised dealers. Therefore, any car parts at VehicleCare are 100% genuine and come with a limited warranty period.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                              How can I check the status of my Mahindra XUV 700 service at VehicleCare in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare provides regular updates during the service process, and you can contact our 24x7 customer support directly for real-time information about your Mahindra XUV 700's service status or track your service on the VehicleCare app or through WhatsApp in Gurgaon.
                                          </div>
                                      </div>
                                  </div>

                              </div>

                          </div>
                </div>


                {/* Car Detailing & Spa */}

                <div className="tab-pane fade" id="pills-Spa" role="tabpanel" aria-labelledby="pills-Spa-tab" tabIndex="0">
                          <div className="row m-0 p-0">

                              <div className="col-lg-8 col-md-11 col-sm-12" style={{ overflow: "scroll", scrollbarWidth: "thin", height: "550px" }}>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Car_Detailing_&_Spa/Complete Car Detailing.png" style={{ width: "100px", height: "40px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Complete Car Detailing</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 7000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Paying attention to crevices, seams, and other small areas that can accumulate dirt and grime.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Odor Removal: Using specialized products to neutralize odors and leave the interior smelling fresh.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Cleaning and dressing plastic and vinyl surfaces, including the dashboard, console, door panels, and other interior trim.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Deep cleaning of carpets, floor mats, and upholstery with specialized shampoos to remove stains and odors.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Cleaning air vents to ensure they are free from dust and allergens.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Cleaning the interior windows and mirrors for clear visibility.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Cleaning leather seats and surfaces, followed by conditioning to maintain suppleness and prevent cracking.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Thorough vacuuming of seats, carpets, floor mats, and trunk to remove dirt and debris.</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Complate Car Detailing","7000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Car_Detailing_&_Spa/Ceramic Coating.png" style={{ width: "100px", height: "40px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Ceramic Coating</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 25000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary mb-4'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Our experts perform a multi-stage paint correction process to remove swirl marks, scratches, and oxidation, ensuring a flawless base for the coating.</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Begin with a detailed hand wash to remove surface dirt, followed by a clay bar treatment to eliminate embedded contaminants.</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Ceramic Coating","25000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Car_Detailing_&_Spa/PPF - Paint Protection Film.png" style={{ width: "100px", height: "50px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">PPF - Paint Protection Film</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 30000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary mb-4'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Some PPFs offer a hydrophobic surface, making it easier to clean and repelling water and dirt.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-4'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>PPF protects against UV rays, preventing the paint from fading or yellowing over time.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-4'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>High-quality PPF is virtually invisible and maintains the original appearance of the vehicle’s paint.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-4'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary mb-4'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Resistant to chemical stains from bird droppings, bug splatter, tree sap, and road tar.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-4'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Some PPFs have self-healing properties, where minor scratches and swirl marks disappear with heat from the sun or a heat gun.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-4'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>PPF is resistant to scratches, chips, and other minor abrasions. It can absorb impacts that would otherwise damage the paint.</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","PPF - Paint Protection Film","30000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Car_Detailing_&_Spa/Rubbing Polishing.png" style={{ width: "100px", height: "50px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Rubbing Polishing</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Wipe off the residue with a clean microfiber towel.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Apply the rubbing compound to a small section of the car using a foam or microfiber applicator pad.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Thoroughly wash and dry the car to remove dirt and debris.</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Use a dual-action or rotary polisher to work the compound into the paint. Keep the polisher moving to avoid burning the paint.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Identify areas with scratches, oxidation, and other imperfections.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Rubbing Polishing","1500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Car_Detailing_&_Spa/Teflon Coating.png" style={{ width: "100px", height: "50px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Teflon Coating</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 5000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Allow the coating to cure as per the manufacturer's instructions. This may involve letting the car sit for a specified period without exposing it to water or extreme weather conditions.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Apply a small amount of Teflon coating to an applicator pad or cloth. Work on one small section at a time to ensure even coverage.</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Use a clean microfiber towel or a polishing machine with a soft pad to buff the applied coating into the paint. This helps the coating bond with the surface and enhances its protective properties.</p></div>
                                                  <div className='d-flex align-items-center text-secondary'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Use a high-quality Teflon coating product from a reputable brand. Read and follow the manufacturer’s instructions carefully.</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Teflon Coating","5000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Car_Detailing_&_Spa/Anti Rust Coating.png" style={{ width: "100px", height: "80px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Anti Rust Coating</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 2500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Follow the manufacturer's instructions for application. This may involve spraying, brushing, or rolling the product onto the surface.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Select an anti-rust product suited to the specific needs of your vehicle and the area being treated.</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Mask off any areas that should not be coated, such as exhaust components, brake parts, and any electrical connections.</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Anti Rust Coating","2500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                              </div>

                              <div className="col-lg-4 col-md-11 col-sm-12">
                                  <div className='bg-white py-4 px-4 m-0 my-5 shadow-lg'>
                                      <h2 className='fw-bold my-4'>Your Cart</h2>

                                      <div className='row bg-secondary-subtle border border-secondary rounded-1 mb-4'>
                                          <img src="/Major_Brand/Mahindra/xuv-700.jpeg" className='col-3 bg-white my-4 ms-4 rounded-3' style={{ width: "100px", height: "60px" }} alt="" />
                                          <div className='col mt-4 mb-3 ms-1'>
                                              <p className='fs-5 fw-bold mb-0'>Mahindra</p>
                                              <p className='mb-0 text-secondary' style={{ fontSize: "small" }}><span className='fw-bold text-black'>XUV 700 </span>Petrol</p>
                                              <button className='border-0 bg-transparent' style={{ justifySelf: "end", display: "flex" }}>Change</button>
                                          </div>
                                      </div>

                                      <p style={{ color: "#ff0000" }}>Total Items: {ti}</p>
                                      <hr />
                                      <div className='row'>
                                          <p className='col fw-bold mb-0' style={{ color: "#ff0000" }}>TOTAL</p>
                                          <p className='col text-end mb-0'>Rs. {tp}</p>
                                      </div>
                                      <hr />
                                      <button className='fs-6 fw-bold px-4 py-2 my-4 border-0 mb-2 shadow-lg place-order' style={{ display: "flex", justifySelf: "center" }}>Place Order</button>
                                  </div>
                              </div>

                          </div>

                          <div className="row py-5">
                              <p className='fs-2 mb-4'>Why Choose VehicleCare for Periodic Car Services in Gurgaon for Your Mahindra XUV 700 Petrol?</p>
                              <p className='fs-4 fw-bold mb-2'>Why Periodic Service is Essential for Your Mahindra XUV 700:</p>
                              <p className='mb-0 ms-3 text-secondary'>1. Ensures optimal performance and longevity for Your XUV 700 Petrol Car</p>
                              <p className='mb-0 ms-3 text-secondary'>2. Detects potential issues early, avoiding costly repairs.</p>
                              <p className='mb-0 ms-3 text-secondary'>3. Key components like the engine, brake pads, and tyres are inspected.</p>
                              <p className='mb-0 ms-3 text-secondary'>4. Regular checks on lights, brakes, and tyres ensure road safety.</p>
                              <p className='mb-0 ms-3 text-secondary'>5. Prevents unexpected breakdowns.</p>
                              <p className='mb-4 ms-3 text-secondary'>6. Boosts resale value with a well-maintained Mahindra XUV 700 Petrol Car.</p>
                              <p className='fs-4 fw-bold mb-2'>Our Service Packages:</p>
                              <p className='mb-0 text-secondary'><span className='fw-bold' style={{ color: "#ff0000" }}>Basic Car Service - </span>Essential services to keep your XUV 700 running smoothly.</p>
                              <p className='mb-0 text-secondary'><span className='fw-bold' style={{ color: "#ff0000" }}>Standard Car Service - </span>Popular choice with extra services on top of the basic.</p>
                              <p className='mb-4 text-secondary'><span className='fw-bold' style={{ color: "#ff0000" }}>Comprehensive Car Service - </span>Our premium package for full inspection and safety.</p>
                              <p className='fs-4 fw-bold mb-2'>Why VehicleCare Stands Out for Your Mahindra XUV 700 Petrol?</p>
                              <p className='text-secondary'>Skilled professionals, genuine parts, and top-quality service of your Mahindra XUV 700 Car. Satisfaction is guaranteed, with warranties and high-tech tools for all services.From AC gas recharging to wheel balancing, we deliver happiness with care.</p>
                          </div>

                          <div className="row py-5">
                              <p className='fs-3 fw-bold mb-4'>Frequently Asked Questions on VehicleCare Periodic Car Services:</p>
                              <div className="accordion py-2" id="accordionExample">

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              Why should I get Periodic Car Service for my Mahindra XUV 700 car in Gurgaon from VehicleCare?
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              Regular periodic car service from VehicleCare in Gurgaon ensures your Mahindra XUV 700's optimal performance and longevity. VehicleCare uses advanced diagnostics, and genuine parts, and follows manufacturers' guidelines with meticulous attention to detail. With our expertise in Gurgaon, we guarantee a smooth and safe driving experience, enhancing your car's overall reliability and resale value.                                </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              What is the recommended frequency for servicing my Mahindra XUV 700 in Gurgaon with VehicleCare?
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare recommends servicing your Mahindra XUV 700 in Gurgaon at least once a year or after every 10,000 km, whichever comes first, to maintain your vehicle's optimal performance.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Do I need to service my Mahindra XUV 700 car even if it's relatively new in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              Yes, regular servicing is crucial for your vehicle regardless of its age. VehicleCare in Gurgaon helps identify potential issues in your car early, preventing costly repairs and ensuring long-term reliability.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                              What does a periodic car service for my Mahindra XUV 700 include in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare's Mahindra XUV 700 service in Gurgaon includes a comprehensive inspection, fluid checks, filter replacements, brake inspection, tire rotation, and other essential tasks outlined in the manufacturer's service schedule.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                              How long does a typical Mahindra XUV 700 service at VehicleCare in Gurgaon take?
                                          </button>
                                      </h2>
                                      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              The duration may vary for every car, but on average, a periodic service for a Mahindra XUV 700 at VehicleCare in Gurgaon takes around 3 to 4 hours. However, this can change based on additional repairs or any other services needed.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                              How to know if my Mahindra XUV 700 needs standard service or comprehensive service in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare's standard service in Gurgaon is a general service package that includes basic car services and inspection and is recommended after every 10,000 km. On the other hand, a comprehensive service in Gurgaon is required after every 40,000 km and is a more elaborate service package, including top-to-bottom servicing, replacement, and maintenance.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                              What makes VehicleCare's Mahindra XUV 700 periodic service unique from Mahindra authorised service centres in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare in Gurgaon is simple, pocket-friendly, efficient, and reliable. You can book a service for your Mahindra XUV 700 from the comfort of your home, office, or anywhere. The pick-up and drop location is your choice, and you get great deals and discounts every time you opt for a service from VehicleCare. Just book a service through the VehicleCare app or website and relax.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                              Is there a warranty on the Mahindra XUV 700 periodic service from VehicleCare in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare offers a limited warranty on parts and labour for the services performed during the periodic maintenance of your Mahindra XUV 700 in Gurgaon.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                              How do I know that VehicleCare uses genuine parts for my Mahindra XUV 700 car service in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare in Gurgaon takes pride in delivering only top-quality, industry-standard, and genuine car parts from its channel of authorised dealers. Therefore, any car parts at VehicleCare are 100% genuine and come with a limited warranty period.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                              How can I check the status of my Mahindra XUV 700 service at VehicleCare in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare provides regular updates during the service process, and you can contact our 24x7 customer support directly for real-time information about your Mahindra XUV 700's service status or track your service on the VehicleCare app or through WhatsApp in Gurgaon.
                                          </div>
                                      </div>
                                  </div>

                              </div>

                          </div>
                </div>


                {/* Custom Repairs */}

                <div className="tab-pane fade" id="pills-Custom" role="tabpanel" aria-labelledby="pills-Custom-tab" tabIndex="0">
                          <div className="row m-0 p-0">

                              <div className="col-lg-8 col-md-11 col-sm-12" style={{ overflow: "scroll", scrollbarWidth: "thin", height: "550px" }}>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Custom_Repairs/Car Scanning.png" style={{ width: "100px", height: "60px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Car Scanning</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1500</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Scans various control modules, including those for power windows, seats, and infotainment systems.</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Diagnoses issues with heating, ventilation, and air conditioning (HVAC) systems.</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Car Scanning","1500")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Custom_Repairs/Other Diagnosis.png" style={{ width: "100px", height: "60px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Other Diagnosis</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 1000</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Fluid systems (e.g., brake lines, coolant hoses, fuel lines).</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Electrical components (e.g., fuses, relays, wiring).</p></div>
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Mechanical components (e.g., belts, pulleys, bearings).</p></div>
                                                  <div className='d-flex align-items-center text-secondary mb-3'><i className='bi bi-check fs-4' style={{ color: "#ff0000" }}></i><p className='m-0'>Free Pickup & Drop</p></div>
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Other Diagnosis","1000")}>Add To Cart +</button>
                                      </div>
                                  </div>

                                  <div className="row mb-5">
                                      <div className="col-2 d-none d-md-block">
                                          <img src="/Major_Brand/Custom_Repairs/Tyre.png" style={{ width: "100px", height: "80px" }} alt="" />
                                      </div>
                                      <div className="col bg-white p-4 ms-4" style={{ position: "relative" }}>
                                          <div className="row mb-3 main-div">
                                              <div className="col fs-4 fw-bold">Tyre</div>
                                              <div className="col text-end fw-bold fs-6" style={{ color: "#ff0000" }}>Rs. 3700</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-6 col-sm-12">
                                              </div>
                                              <div className="col-md-6 col-sm-12">
                                              </div>
                                          </div>
                                          <button className='border-0 px-4 py-2 fw-bold add-to-cart' style={{ position: "absolute", left: "50%", top: "95%" }} onClick={() => addcart("Mahindra","XUV 700 Petrol","Tyre","3700")}>Add To Cart +</button>
                                      </div>
                                  </div>

                              </div>

                              <div className="col-lg-4 col-md-11 col-sm-12">
                                  <div className='bg-white py-4 px-4 m-0 my-5 shadow-lg'>
                                      <h2 className='fw-bold my-4'>Your Cart</h2>

                                      <div className='row bg-secondary-subtle border border-secondary rounded-1 mb-4'>
                                          <img src="/Major_Brand/Mahindra/xuv-700.jpeg" className='col-3 bg-white my-4 ms-4 rounded-3' style={{ width: "100px", height: "60px" }} alt="" />
                                          <div className='col mt-4 mb-3 ms-1'>
                                              <p className='fs-5 fw-bold mb-0'>Mahindra</p>
                                              <p className='mb-0 text-secondary' style={{ fontSize: "small" }}><span className='fw-bold text-black'>XUV 700 </span>Petrol</p>
                                              <button className='border-0 bg-transparent' style={{ justifySelf: "end", display: "flex" }}>Change</button>
                                          </div>
                                      </div>

                                      <p style={{ color: "#ff0000" }}>Total Items: {ti}</p>
                                      <hr />
                                      <div className='row'>
                                          <p className='col fw-bold mb-0' style={{ color: "#ff0000" }}>TOTAL</p>
                                          <p className='col text-end mb-0'>Rs. {tp}</p>
                                      </div>
                                      <hr />
                                      <button className='fs-6 fw-bold px-4 py-2 my-4 border-0 mb-2 shadow-lg place-order' style={{ display: "flex", justifySelf: "center" }}>Place Order</button>
                                  </div>
                              </div>

                          </div>

                          <div className="row py-5">
                              <p className='fs-2 mb-4'>Why Choose VehicleCare for Periodic Car Services in Gurgaon for Your Mahindra XUV 700 Petrol?</p>
                              <p className='fs-4 fw-bold mb-2'>Why Periodic Service is Essential for Your Mahindra XUV 700:</p>
                              <p className='mb-0 ms-3 text-secondary'>1. Ensures optimal performance and longevity for Your XUV 700 Petrol Car</p>
                              <p className='mb-0 ms-3 text-secondary'>2. Detects potential issues early, avoiding costly repairs.</p>
                              <p className='mb-0 ms-3 text-secondary'>3. Key components like the engine, brake pads, and tyres are inspected.</p>
                              <p className='mb-0 ms-3 text-secondary'>4. Regular checks on lights, brakes, and tyres ensure road safety.</p>
                              <p className='mb-0 ms-3 text-secondary'>5. Prevents unexpected breakdowns.</p>
                              <p className='mb-4 ms-3 text-secondary'>6. Boosts resale value with a well-maintained Mahindra XUV 700 Petrol Car.</p>
                              <p className='fs-4 fw-bold mb-2'>Our Service Packages:</p>
                              <p className='mb-0 text-secondary'><span className='fw-bold' style={{ color: "#ff0000" }}>Basic Car Service - </span>Essential services to keep your XUV 700 running smoothly.</p>
                              <p className='mb-0 text-secondary'><span className='fw-bold' style={{ color: "#ff0000" }}>Standard Car Service - </span>Popular choice with extra services on top of the basic.</p>
                              <p className='mb-4 text-secondary'><span className='fw-bold' style={{ color: "#ff0000" }}>Comprehensive Car Service - </span>Our premium package for full inspection and safety.</p>
                              <p className='fs-4 fw-bold mb-2'>Why VehicleCare Stands Out for Your Mahindra XUV 700 Petrol?</p>
                              <p className='text-secondary'>Skilled professionals, genuine parts, and top-quality service of your Mahindra XUV 700 Car. Satisfaction is guaranteed, with warranties and high-tech tools for all services.From AC gas recharging to wheel balancing, we deliver happiness with care.</p>
                          </div>

                          <div className="row py-5">
                              <p className='fs-3 fw-bold mb-4'>Frequently Asked Questions on VehicleCare Periodic Car Services:</p>
                              <div className="accordion py-2" id="accordionExample">

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              Why should I get Periodic Car Service for my Mahindra XUV 700 car in Gurgaon from VehicleCare?
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              Regular periodic car service from VehicleCare in Gurgaon ensures your Mahindra XUV 700's optimal performance and longevity. VehicleCare uses advanced diagnostics, and genuine parts, and follows manufacturers' guidelines with meticulous attention to detail. With our expertise in Gurgaon, we guarantee a smooth and safe driving experience, enhancing your car's overall reliability and resale value.                                </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              What is the recommended frequency for servicing my Mahindra XUV 700 in Gurgaon with VehicleCare?
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare recommends servicing your Mahindra XUV 700 in Gurgaon at least once a year or after every 10,000 km, whichever comes first, to maintain your vehicle's optimal performance.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Do I need to service my Mahindra XUV 700 car even if it's relatively new in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              Yes, regular servicing is crucial for your vehicle regardless of its age. VehicleCare in Gurgaon helps identify potential issues in your car early, preventing costly repairs and ensuring long-term reliability.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                              What does a periodic car service for my Mahindra XUV 700 include in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare's Mahindra XUV 700 service in Gurgaon includes a comprehensive inspection, fluid checks, filter replacements, brake inspection, tire rotation, and other essential tasks outlined in the manufacturer's service schedule.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                              How long does a typical Mahindra XUV 700 service at VehicleCare in Gurgaon take?
                                          </button>
                                      </h2>
                                      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              The duration may vary for every car, but on average, a periodic service for a Mahindra XUV 700 at VehicleCare in Gurgaon takes around 3 to 4 hours. However, this can change based on additional repairs or any other services needed.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                              How to know if my Mahindra XUV 700 needs standard service or comprehensive service in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare's standard service in Gurgaon is a general service package that includes basic car services and inspection and is recommended after every 10,000 km. On the other hand, a comprehensive service in Gurgaon is required after every 40,000 km and is a more elaborate service package, including top-to-bottom servicing, replacement, and maintenance.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                              What makes VehicleCare's Mahindra XUV 700 periodic service unique from Mahindra authorised service centres in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare in Gurgaon is simple, pocket-friendly, efficient, and reliable. You can book a service for your Mahindra XUV 700 from the comfort of your home, office, or anywhere. The pick-up and drop location is your choice, and you get great deals and discounts every time you opt for a service from VehicleCare. Just book a service through the VehicleCare app or website and relax.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                              Is there a warranty on the Mahindra XUV 700 periodic service from VehicleCare in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare offers a limited warranty on parts and labour for the services performed during the periodic maintenance of your Mahindra XUV 700 in Gurgaon.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                              How do I know that VehicleCare uses genuine parts for my Mahindra XUV 700 car service in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare in Gurgaon takes pride in delivering only top-quality, industry-standard, and genuine car parts from its channel of authorised dealers. Therefore, any car parts at VehicleCare are 100% genuine and come with a limited warranty period.
                                          </div>
                                      </div>
                                  </div>

                                  <div className="accordion-item my-3">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                              How can I check the status of my Mahindra XUV 700 service at VehicleCare in Gurgaon?
                                          </button>
                                      </h2>
                                      <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div className="accordion-body p-4">
                                              VehicleCare provides regular updates during the service process, and you can contact our 24x7 customer support directly for real-time information about your Mahindra XUV 700's service status or track your service on the VehicleCare app or through WhatsApp in Gurgaon.
                                          </div>
                                      </div>
                                  </div>

                              </div>

                          </div>
                </div>


            </div>

            </div>
        </div>






    {/* section-3 */}

    <Reviews/>

    {/* section-4 */}

    <Mahindra_All_Brands/>

    {/* section-5 */}

    <Footer/>







    </div>
  )
}

export default Xuv700_Petrol
