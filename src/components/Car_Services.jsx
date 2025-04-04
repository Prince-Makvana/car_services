import React from 'react'
import "./Car_Services.css"
import Reviews from './Reviews'
import Vehiclecare from './Vehiclecare'
import Footer from './Footer'

const Car_Services = () => {
  return (

    <div className="container-fluid main-section">

            {/* section-1 */}

            <div className="row section-1 py-5">
              <div className="col">
                <div className="container">

                  <div className="row">

                    <div className="col-lg-4 col-md-12 col-sm-12 p-4 order-lg-1 order-2">
                      <h1 className="mb-4 fw-bold">Book the Best Car Service In <span style={{color: "#ff0000"}}>Ahmedabad</span></h1>
                      <form>
                        <select name="" id="" className="form-control rounded-pill mb-3 py-3 ps-4 shadow">
                          <option value="">Select Your Car</option>
                          <option value="Maruti Suzuki">Maruti Suzuki</option>
                        </select>
                        <input type="text" placeholder="Enter Your Mobile" className="form-control rounded-pill mb-4 py-3 ps-4 shadow"/>
                        <div className="d-flex justify-content-center">
                          <button type="button" className="btn btn-get-quote rounded-pill px-lg-5 px-4 py-lg-3 py-2 fs-5 fw-bold shadow">Get Quote</button>
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-8 col-md-12 col-sm-12 order-lg-2 order-1">
                      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active s1btn-carousle rounded-circle" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" className="s1btn-carousle rounded-circle" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" className="s1btn-carousle rounded-circle" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active" data-bs-interval="5000">
                            <img src="/Car_services/Section-1/car-carousel-1.jpg" className="d-block w-100 rounded-3" alt="..."/>
                          </div>
                          <div className="carousel-item" data-bs-interval="5000">
                            <img src="/Car_services/Section-1/car-carousel-2.jpg" className="d-block w-100 rounded-3" alt="..."/>
                          </div>
                          <div className="carousel-item" data-bs-interval="5000">
                            <img src="/Car_services/Section-1/car-carousel-3.jpeg" className="d-block w-100 rounded-3" alt="..."/>
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                          <span aria-hidden="true"><i className="bi bi-caret-left-fill bg-white text-dark fs-4 rounded-circle p-1"></i></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                          <span aria-hidden="true"><i className="bi bi-caret-right-fill bg-white text-dark fs-4 rounded-circle p-1"></i></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>



            {/* section-2 */}

            <div className="row section-2 pt-lg-4 pb-lg-5 pb-4">
              <div className="col">
                <div className="container">

                  <div className="row mb-3">
                    <div className="col fs-1 fw-bold text-center">Services We Offer</div>
                  </div>

                  <div className="row mb-3 justify-content-center">
                    <p className="col-lg-7 col-md-11 text-center d-none d-md-block">Find the best service packages for your car. Select from a wide range of car services, from general service to car wash, accidental repair to custom repair, cashless insurance claims, and much more.</p>
                  </div>

                 
                  <div className="row mb-3 justify-content-center">
                    <div className="col-lg-10 col-md-11 col-sm-12">
                      <div className="container text-center">
                        <div className="row justify-content-center row-cols-2 row-cols-lg-6 g-3">
                          <div className="col">
                            <div className="border border-secondary shadow-lg rounded-3 bg-black teansform">
                              <img src="/Car_services/Section-2/car-service.png" className="w-100 p-2 p-lg-3" alt=""/>
                              <h5 className="text-white pb-2">Car Service</h5>
                            </div>
                          </div>
                          <div className="col">
                            <div className="border border-secondary shadow-lg rounded-3 bg-black teansform">
                              <img src="/Car_services/Section-2/wheel-care.png" className="w-100 p-2 p-lg-3" alt=""/>
                              <h5 className="text-white pb-2">Wheel Care</h5>
                            </div>
                          </div>
                          <div className="col">
                            <div className="border border-secondary shadow-lg rounded-3 bg-black teansform">
                              <img src="/Car_services/Section-2/AC-Repair.png" className="w-100 p-2 p-lg-3" alt=""/>
                              <h5 className="text-white pb-2">Car AC Repair</h5>
                            </div>
                          </div>
                          <div className="col">
                            <div className="border border-secondary shadow-lg rounded-3 bg-black teansform">
                              <img src="/Car_services/Section-2/battery.png" className="w-100 p-2 p-lg-3" alt=""/>
                              <h5 className="text-white pb-2">Car Battery</h5>
                            </div>
                          </div>
                          <div className="col">
                            <div className="border border-secondary shadow-lg rounded-3 bg-black teansform">
                              <img src="/Car_services/Section-2/dent-paint.png" className="w-100 p-2 p-lg-3" alt=""/>
                              <h5 className="text-white pb-2">Dent Paint</h5>
                            </div>
                          </div>
                          <div className="col">
                            <div className="border border-secondary shadow-lg rounded-3 bg-black teansform">
                              <img src="/Car_services/Section-2/car-repair.png" className="w-100 p-2 p-lg-3" alt=""/>
                              <h5 className="text-white pb-2">Custom Repair</h5>
                            </div>
                          </div>
                          <div className="col">
                            <div className="border border-secondary shadow-lg rounded-3 bg-black teansform">
                              <img src="/Car_services/Section-2/insurance-claim.png" className="w-100 p-2 p-lg-3" alt=""/>
                              <h5 className="text-white pb-2">Insurance Claim</h5>
                            </div>
                          </div>
                          <div className="col">
                            <div className="border border-secondary shadow-lg rounded-3 bg-black teansform">
                              <img src="/Car_services/Section-2/amc.png" className="w-100 p-2 p-lg-3" alt=""/>
                              <h5 className="text-white pb-2">AMC</h5>
                            </div>
                          </div>
                          <div className="col">
                            <div className="border border-secondary shadow-lg rounded-3 bg-black teansform">
                              <img src="/Car_services/Section-2/warranty.png" className="w-100 p-2 p-lg-3" alt=""/>
                              <h5 className="text-white pb-2">Warranty</h5>
                            </div>
                          </div>
                          <div className="col">
                            <div className="border border-secondary shadow-lg rounded-3 bg-black teansform">
                              <img src="/Car_services/Section-2/ev.png" className="w-100 p-2 p-lg-3" alt=""/>
                              <h5 className="text-white pb-2">EV</h5>
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

            <div className="row section-3 py-5">
              <div className="col">
                <div className="container">

                  <div className="row mb-4">
                    <div className="col fs-1 fw-bold text-center">Service In 4 Easy Steps</div>
                  </div>
                 
                  <div className="row mb-3 justify-content-center">
                    <div className="col-lg-11 col-md-12 col-sm-12">
                      <div className="container">
                        <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 g-md-5">
                          <div className="col">
                            <div className="row border border-black shadow-lg rounded-3 bg-secondary-subtle p-3">
                              <div className="col-3 p-0 d-flex justify-content-center align-item-center">
                                <img src="/Car_services/Section-3/select your car.png" className="w-100" alt=""/>
                              </div>
                              <div className="col ms-1">
                                <p className="fs-6 mb-2 fw-bold">Select Your Car</p>
                                <p className="m-0" style={{fontSize: "smaller"}}>Choose from our portfolio of cars.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="row border border-black shadow-lg rounded-3 bg-secondary-subtle p-3">
                              <div className="col-3 p-0 d-flex justify-content-center align-item-center">
                                <img src="/Car_services/Section-3/free_pickup_drop.png" className="w-100" alt=""/>
                              </div>
                              <div className="col ms-1">
                                <p className="fs-6 mb-2 fw-bold">Free Pick-Up & Drop</p>
                                <p className="m-0" style={{fontSize: "smaller"}}>Get free pick up & drop on all booked services.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="row border border-black shadow-lg rounded-3 bg-secondary-subtle p-3">
                              <div className="col-3 p-0 d-flex justify-content-center align-item-center">
                                <img src="/Car_services/Section-3/live_tracking.png" className="w-100" alt=""/>
                              </div>
                              <div className="col ms-1">
                                <p className="fs-6 mb-2 fw-bold">Live Tracking</p>
                                <p className="m-0" style={{fontSize: "smaller"}}>Get real-time updates on your car location & status.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="row border border-black shadow-lg rounded-3 bg-secondary-subtle py-3 ps-3">
                              <div className="col-3 p-0 d-flex justify-content-center align-item-center">
                                <img src="/Car_services/Section-3/30days warranty.png" className="w-100" alt=""/>
                              </div>
                              <div className="col ms-1">
                                <p className="fs-6 mb-2 fw-bold">30 Days Warranty</p>
                                <p className="m-0" style={{fontSize: "smaller"}}>Stay assured. Get 30 days warranty on all car services.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>



            {/* section-4 */}

            <div className="row section-4 py-4">
              <div className="col">
                <div className="container">

                  <div className="row mb-4">
                    <div className="col fs-1 fw-bold text-center"><span style={{color: "#ff0000"}}>Car Service </span>Price List in India 2025</div>
                  </div>
                 
                  <div className="row mb-3 justify-content-center">
                    <div className="col-lg-10 col-md-11 col-sm-12">
                      <div className="container">
                        <ul className="list-group shadow-lg">
                          <li className="list-group-item d-flex justify-content-between bg-black border-secondary">
                            <div className="fw-bold text-white">Car Service List</div>
                            <span className="text-white">Price Starts From (₹)</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between bg-secondary-subtle border-secondary">
                            <div className="fw-bold">1. General Service</div>
                            <span>Rs. 2199/-</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between bg-secondary-subtle border-secondary">
                            <div className="fw-bold">2. Car Inspection</div>
                            <span>Rs. 499/-</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between bg-secondary-subtle border-secondary">
                            <div className="fw-bold">3. RSA (Towing Service)</div>
                            <span>Rs. 999/-</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between bg-secondary-subtle border-secondary">
                            <div className="fw-bold">4. RSA (Jump Start)</div>
                            <span>Rs. 499/-</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between bg-secondary-subtle border-secondary">
                            <div className="fw-bold">5. Denting & Painting</div>
                            <span>Rs. 2000/-</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between bg-secondary-subtle border-secondary">
                            <div className="fw-bold">6. Full Body Denting & Painting</div>
                            <span>Rs. 20000/-</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between bg-secondary-subtle border-secondary">
                            <div className="fw-bold">7. Dry Denting</div>
                            <span>Rs. 300/-</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>



            {/* section-5 */}

            
            <div className="row section-5 py-5 bg-secondary-subtle border-bottom border-secondary-subtle my-3 justify-content-center">


              {/* md and lg screen */}

              <div className="col-lg-9 col-md-11 d-none d-md-block">
                 
                  <table className="table table-bordered text-center shadow-lg my-4">
                    <thead>
                      <tr>
                        <th className="fs-3 px-5 bg-black text-white">VehicleCare<br/> Benefits</th>
                        <th className="bg-black text-white"><p className="fs-5 bg-secondary p-3 m-2">Local Mechanic</p></th>
                        <th className="bg-black text-white"><p className="fs-5 bg-secondary p-3 m-2">Authorized Service Center</p></th>
                        <th className="bg-black text-white"><p className="fs-5 p-3 m-2" style={{backgroundColor: "#ff0000"}}>Vehiclecare</p></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="d-flex justify-content-center align-item-center p-1">
                          <img src="/Car_services/Section-5/free pick up and drop.png" style={{height: "30px", width: "30px"}} alt=""/>
                          <p className="fs-6 fw-bold m-0 ps-2">Free pick up and drop</p>
                        </td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-check"></i></h2></td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-check" style={{color: "#ff0000"}}></i></h2></td>
                      </tr>
                      <tr>
                        <td className="d-flex justify-content-center align-item-center p-1">
                          <img src="/Car_services/Section-5/40 point check up.png" style={{height: "30px", width: "30px"}} alt=""/>
                          <p className="fs-6 fw-bold m-0 ps-2">40 point check up</p>
                        </td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-check" style={{color: "#ff0000"}}></i></h2></td>
                      </tr>
                      <tr>
                        <td className="d-flex justify-content-center align-item-center p-1">
                          <img src="/Car_services/Section-5/3 months warranty.png" style={{height: "30px", width: "30px"}} alt=""/>
                          <p className="fs-6 fw-bold m-0 ps-2">3 months warranty</p>
                        </td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-check"></i></h2></td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-check" style={{color: "#ff0000"}}></i></h2></td>
                      </tr>
                      <tr>
                        <td className="d-flex justify-content-center align-item-center p-1">
                          <img src="/Car_services/Section-5/genuine spares.png" style={{height: "30px", width: "30px"}} alt=""/>
                          <p className="fs-6 fw-bold m-0 ps-2">Genuine spares</p>
                        </td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-check"></i></h2></td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-check" style={{color: "#ff0000"}}></i></h2></td>
                      </tr>
                      <tr>
                        <td className="d-flex justify-content-center align-item-center p-1">
                          <img src="/Car_services/Section-5/doorstep service.png" style={{height: "30px", width: "30px"}} alt=""/>
                          <p className="fs-6 fw-bold m-0 ps-2">Doorstep Service</p>
                        </td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-check"></i></h2></td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-check" style={{color: "#ff0000"}}></i></h2></td>
                      </tr>
                      <tr>
                        <td className="d-flex justify-content-center align-item-center p-1">
                          <img src="/Car_services/Section-5/expert mechanics.png" style={{height: "30px", width: "30px"}} alt=""/>
                          <p className="fs-6 fw-bold m-0 ps-2">Expert mechanics</p>
                        </td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-check"></i></h2></td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-check" style={{color: "#ff0000"}}></i></h2></td>
                      </tr>
                      <tr>
                        <td className="d-flex justify-content-center align-item-center p-1">
                          <img src="/Car_services/Section-5/same day delivery.png" style={{height: "30px", width: "30px"}} alt=""/>
                          <p className="fs-6 fw-bold m-0 ps-2">Same day delivery</p>
                        </td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                        <td className="p-0"><h2 className="m-0"><i className="bi bi-check" style={{color: "#ff0000"}}></i></h2></td>
                      </tr>
                    </tbody>
                  </table>

              </div>


              {/* sm screen */}

              <div className="col-sm-12 d-block d-md-none">
                 
                <table className="table table-bordered text-center shadow-lg">
                  <thead>
                    <tr>
                      <th className="fs-6 bg-black text-white my-auto">Vehicle Care Benefits</th>
                      <th className="bg-black text-white"><p className="fs-6 bg-secondary py-1 my-auto">Local Mechanic</p></th>
                      <th className="bg-black text-white"><p className="fs-6 bg-secondary py-1 my-auto">Authorized Service Center</p></th>
                      <th className="bg-black text-white"><p className="fs-6 p-1 my-auto" style={{backgroundColor: "#ff0000"}}>VC</p></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <p className="fs-6 fw-bold m-0">Free pick up and drop</p>
                      </td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-check"></i></h2></td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-check" style={{color: "#ff0000"}}></i></h2></td>
                    </tr>
                    <tr>
                      <td>
                        <p className="fs-6 fw-bold m-0">40 point check up</p>
                      </td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-check" style={{color: "#ff0000"}}></i></h2></td>
                    </tr>
                    <tr>
                      <td>
                        <p className="fs-6 fw-bold m-0">3 months warranty</p>
                      </td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-check"></i></h2></td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-check" style={{color: "#ff0000"}}></i></h2></td>
                    </tr>
                    <tr>
                      <td>
                        <p className="fs-6 fw-bold m-0">Genuine spares</p>
                      </td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-check"></i></h2></td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-check" style={{color: "#ff0000"}}></i></h2></td>
                    </tr>
                    <tr>
                      <td>
                        <p className="fs-6 fw-bold m-0">Doorstep Service</p>
                      </td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-check"></i></h2></td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-check" style={{color: "#ff0000"}}></i></h2></td>
                    </tr>
                    <tr>
                      <td>
                        <p className="fs-6 fw-bold m-0">Expert mechanics</p>
                      </td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-check"></i></h2></td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-check" style={{color: "#ff0000"}}></i></h2></td>
                    </tr>
                    <tr>
                      <td>
                        <p className="fs-6 fw-bold m-0">Same day delivery</p>
                      </td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-x"></i></h2></td>
                      <td className="p-0"><h2 className="m-0"><i className="bi bi-check" style={{color: "#ff0000"}}></i></h2></td>
                    </tr>
                  </tbody>
                </table>

              </div>


            </div>



            {/* section-6 */} 

            <div className="row section-6 justify-content-center py-5">
              <div className="col-lg-9 col-md-11 col-sm-12">
                <div className="container">

                  <div className="row mb-5">
                    <div className="col fs-1 fw-bold text-center">Why Choose VehicleCare For Car Services & Repair in <span style={{color: "#ff0000"}}>Ahmedabad</span></div>
                  </div>

                  <div className="row mb-3 text-center justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 g-md-4">
                    <div className="col">
                      <div className="shadow-lg">
                        <div className="bg-black border-bottom border-danger justify-content-center d-flex py-2">
                          <img src="/Car_services/Section-6/genuine_parts.png" className="w-25" alt=""/>
                        </div>
                        <div className="bg-secondary-subtle p-3">
                          <p className="fw-bold fs-5 mb-2">Genuine Parts</p>
                          <p className="m-0">Top-notch quality with OEM/OES spares only.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shadow-lg">
                        <div className="bg-black border-bottom border-danger justify-content-center d-flex py-2">
                          <img src="/Car_services/Section-6/transparent.png" className="w-25" alt=""/>
                        </div>
                        <div className="bg-secondary-subtle p-3">
                          <p className="fw-bold fs-5 mb-2">Transparent</p>
                          <p className="m-0">24x7 assistance and live status updates.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shadow-lg">
                        <div className="bg-black border-bottom border-danger justify-content-center d-flex py-2">
                          <img src="/Car_services/Section-6/hassel_free.png" className="w-25" alt=""/>
                        </div>
                        <div className="bg-secondary-subtle p-3">
                          <p className="fw-bold fs-5 mb-2">Hassel-Free</p>
                          <p className="m-0">Services delivered through bespoke solutions.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shadow-lg">
                        <div className="bg-black border-bottom border-danger justify-content-center d-flex py-2">
                          <img src="/Car_services/Section-6/honest_pricing.png" className="w-25" alt=""/>
                        </div>
                        <div className="bg-secondary-subtle p-3">
                          <p className="fw-bold fs-5 mb-2">Honest Pricing</p>
                          <p className="m-0">Best quote in the industry for your car service.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>



            {/* section-7 */}

            <div className="row section-7 justify-content-center py-4">
              <div className="col-lg-10 col-md-11 col-sm-12">
                <div className="container" style={{textAlign: "justify"}}>

                  <div className="row mb-4">
                    <div className="col fs-3 fw-bold">Common Car Problems for Car Owners in <span>Ahmedabad</span></div>
                  </div>
                 
                  <div>
                    <p className="fs-6"><span className="fw-bold" style={{color: "#ff0000"}}>Heavy traffic jams - </span>
                      Traffic Jams in Gurgaon are a nightmare that no car owner can escape. Due to massive traffic jams that last for hours, cars face many issues.
                    </p>
                    <p className="fs-6"><span className="fw-bold" style={{color: "#ff0000"}}>Scorching Summers and Too-cold Winters - </span>
                      Both summers and winters in Gurgaon are extreme. Vehicles when subjected to such extreme temperatures, result in damaging core components.
                    </p>
                    <p className="fs-6"><span className="fw-bold" style={{color: "#ff0000"}}>Potholes on the road - </span>
                      Encountering potholes on Gurgaon roads due to waterlogging or construction activities is a common site in Gurgaon. Driving vehicles very often on such roads damages the vehicle's wheels and wear-down suspension.
                    </p>
                    <p className="fs-6"><span className="fw-bold" style={{color: "#ff0000"}}>Massive water-logging in rainy season</span>
                      Several parts of Gurgaon face the problem of water-logging during heavy rains in the Monsoon Season especially the low-lying areas and even National Highways.
                    </p>
                  </div>

                </div>
              </div>
            </div>



            {/* section-8 */}

            <div className="row section-8 justify-content-center py-5">
              <div className="col-lg-10 col-md-11 col-sm-12">
                <div className="container">

                  <div className="row mb-3">
                    <div className="col fs-5 fw-bold text-center" style={{color: "#ff0000"}}>// Here Are All The Checkpoints For Auto Repair & Service In Ahmedabad //</div>
                  </div>

                  <div className="row mb-5">
                    <div className="col fs-1 fw-bold text-center">What Is Included  In Car Service In Ahmedabad</div>
                  </div>

                  <div className="row mb-3 justify-content-center row-cols-1 row-cols-lg-2 g-2 g-md-3">
                    <div className="col">
                      <div className="shadow-lg border border-secondary rounded-3">
                        <div className="bg-black border-bottom border-danger px-3 py-2 rounded-top-3">
                          <p className="fs-6 fw-bold m-0" style={{color: "#ff0000"}}>Run Engine Diagnostics</p>
                        </div>
                        <div className="bg-secondary-subtle p-3 rounded-bottom-3">
                          <p className="m-0">Through our special 40 point inspection, we probe for every hidden problem in your car so you can
                            avoid any unplanned repairs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shadow-lg border border-secondary rounded-3">
                        <div className="bg-black border-bottom border-danger px-3 py-2 rounded-top-3">
                          <p className="fs-6 fw-bold m-0" style={{color: "#ff0000"}}>Check and/or change brake pads</p>
                        </div>
                        <div className="bg-secondary-subtle p-3 rounded-bottom-3">
                          <p className="m-0">Brake pads need to be replaced at specific intervals as they are an important part of the braking system as a whole.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shadow-lg border border-secondary rounded-3">
                        <div className="bg-black border-bottom border-danger px-3 py-2 rounded-top-3">
                          <p className="fs-6 fw-bold m-0" style={{color: "#ff0000"}}>Replace filters</p>
                        </div>
                        <div className="bg-secondary-subtle p-3 rounded-bottom-3">
                          <p className="m-0">Air Filter, Oil Filter, Fuel Filter, Installing new filters is essential to maintain a clean flow of air and fuel into the combustion chamber.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shadow-lg border border-secondary rounded-3">
                        <div className="bg-black border-bottom border-danger px-3 py-2 rounded-top-3">
                          <p className="fs-6 fw-bold m-0" style={{color: "#ff0000"}}>Check HVAC system</p>
                        </div>
                        <div className="bg-secondary-subtle p-3 rounded-bottom-3">
                          <p className="m-0">Vents, air conditioning and heating, etc. Other systems such as the electricals and air conditioning are checked through specialized equipment.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shadow-lg border border-secondary rounded-3">
                        <div className="bg-black border-bottom border-danger px-3 py-2 rounded-top-3">
                          <p className="fs-6 fw-bold m-0" style={{color: "#ff0000"}}>Tire Balancing and Rotation</p>
                        </div>
                        <div className="bg-secondary-subtle p-3 rounded-bottom-3">
                          <p className="m-0">As a free add-on, wheel alignment and balancing is offered on every vehicle service in Siliguri along with free tire pressure check.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shadow-lg border border-secondary rounded-3">
                        <div className="bg-black border-bottom border-danger px-3 py-2 rounded-top-3">
                          <p className="fs-6 fw-bold m-0" style={{color: "#ff0000"}}>Car wash</p>
                        </div>
                        <div className="bg-secondary-subtle p-3 rounded-bottom-3">
                          <p className="m-0">After service is completed, the vehicle is given an exterior wash for a shiny finish.</p>
                          <br className="d-none d-md-block"/>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shadow-lg border border-secondary rounded-3">
                        <div className="bg-black border-bottom border-danger px-3 py-2 rounded-top-3">
                          <p className="fs-6 fw-bold m-0" style={{color: "#ff0000"}}>Replace/flush the engine fluids</p>
                        </div>
                        <div className="bg-secondary-subtle p-3 rounded-bottom-3">
                          <p className="m-0">Oil, Brake Fluid, Power Steering fluid, Windshield Washer Fluid, Transmission Fluid, Antifreeze, Coolant, etc. All automotive fluids are flushed or topped after inspection with the right and top-quality product.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shadow-lg border border-secondary rounded-3">
                        <div className="bg-black border-bottom border-danger px-3 py-2 rounded-top-3">
                          <p className="fs-6 fw-bold m-0" style={{color: "#ff0000"}}>Maintain Car AC Health</p>
                        </div>
                        <div className="bg-secondary-subtle p-3 rounded-bottom-3">
                          <p className="m-0">Always park your car in shaded areas so that whenever you start your car and turn on the AC, it will cool faster.</p>
                          <br className="d-none d-md-block"/>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>



            {/* section-9 */}

            <Reviews/>
            


           {/* section-10 */}

            <Vehiclecare/>


           {/* Footer */}


           <Footer/>

    </div>

  )
}

export default Car_Services
