import React from 'react'
import "./Insurance_Claim.css"
import Reviews from './Reviews'
import Vehiclecare from './Vehiclecare'
import Footer from './Footer'

const Insurance_Claim = () => {
  return (
    
    <div className="container-fluid main-section">

            {/* section-1 */}

            <div className="row section-1 py-5">
              <div className="col">
                <div className="container">

                  <div className="row">

                    <div className="col-lg-4 col-md-12 col-sm-12 p-4 order-lg-1 order-2">
                      <h1 className="mb-4 fw-bold">Your Car <span style={{color: "#ff0000"}}>Claim </span>Journey Partner</h1>
                      <form>
                        <select name="" id="" className="form-control rounded-pill mb-3 py-3 ps-4 shadow">
                          <option value="">Select Your Car</option>
                          <option value="Maruti Suzuki">Maruti Suzuki</option>
                          <option value="Tata">Tata</option>
                          <option value="Honda">Honda</option>
                          <option value="Toyota">Toyota</option>
                          <option value="Hyundai">Hyundai</option>
                          <option value="Kia">Kia</option>
                          <option value="MG">MG</option>
                          <option value="Audi">Audi</option>
                          <option value="Mahindra">Mahindra</option>
                        </select>
                        <div className="row">
                            <div className="col">
                                <input type="text" placeholder="Enter Your Mobile" className="form-control rounded-pill shadow border-0 mb-4 py-3 ps-4"/>
                            </div>
                            {/* <div className="col">
                                <input type="text" placeholder='Select City' className='form-control border-0 mb-4 py-3 ps-4'/>
                            </div> */}
                        </div>
                        <div className="d-flex justify-content-center">
                          <a type="button" href='' className="btn btn-book-claim px-lg-5 px-4 py-lg-3 py-2 fs-5 fw-bold shadow">Book Claim</a>
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
                            <img src="/Insurance_claim/Section-1/insurance-banner1.jpg" className="d-block w-100 rounded-3" alt="..."/>
                          </div>
                          <div className="carousel-item" data-bs-interval="5000">
                            <img src="/Insurance_claim/Section-1/insurance-banner2.jpg" className="d-block w-100 rounded-3" alt="..."/>
                          </div>
                          <div className="carousel-item" data-bs-interval="5000">
                            <img src="/Insurance_claim/Section-1/insurance-banner3.jpg" className="d-block w-100 rounded-3" alt="..."/>
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

            <div className="row section-2 justify-content-center py-5 bg-body-tertiary">
                <div className="col-lg-9 col-md-11 col-sm-12">
                  <div className="container">
                    <p className='fs-5 fw-bold text-center my-2' style={{color: "#ff0000"}}>// Simplifying Cashless Car Insurance Claims with VehicleCare DCX Service //</p>
                    <p className='fs-1 fw-bold text-center mb-4'>How VehicleCare can help</p>
                    <p className='mb-2'>At VehicleCare, we care and understand the hassle and stress associated with car insurance claims. That's why we've introduced our cutting-edge DCX, Digital Claims Experience, which is a service aimed at revolutionising and simplifying the entire car insurance claim process.</p>
                  </div>
                </div>
            </div>



            {/* section-3 */}

            <div className="row section-3 justify-content-center py-5">
              <div className="col-lg-8 col-md-11 col-sm-12">
                <div className="container">

                  <p className='fs-1 fw-bold text-center mb-5'>How to File for Claim on VehicleCare</p>
                  <img src="/Insurance_claim/Section-3/process-of-claim.jpg" className='w-100' alt="" />

                </div>
              </div>
            </div>



            {/* section-4 */}

            <div className="row section-4 justify-content-center">
              <div className="col-lg-9 col-md-11 col-sm-12">
                <div className="container">
                  
                  <p className='fs-1 fw-bold mb-4 mt-2'>Documents Required:</p>
                  <p className='mb-2'><b style={{color: "#ff0000"}}>1. </b>Driving Licence</p>
                  <p className='mb-2'><b style={{color: "#ff0000"}}>2. </b>Insurance Policy Paper</p>
                  <p className='mb-2'><b style={{color: "#ff0000"}}>3. </b>A copy of the Vehicle Registration Certificate</p>
                  <p className='mb-2'><b style={{color: "#ff0000"}}>4. </b>FIR Copy (for specific cases)</p>
                  <p className='mb-2'><b style={{color: "#ff0000"}}>5. </b>Medical Report, If any</p>
                  <p className='mb-2'><b style={{color: "#ff0000"}}>6. </b>Photographs/ Video of the Damage</p>
                  <p className='mb-3'><b style={{color: "#ff0000"}}>7. </b>Other Documents</p>

                </div>
              </div>
            </div>



            {/* section-5 */}

            <div className="row section-5 justify-content-center py-5 bg-body-tertiary">
                <div className="col-lg-9 col-md-11 col-sm-12">
                  <div className="container">

                    <p className='fs-1 fw-bold my-4'>Insurance Companies as our Valued Partners</p>
                    <p className='mb-4'>At VehicleCare, we value our partnerships with leading insurance companies. By collaborating closely with insurers, we aim to enhance the overall claims experience for our customers. Our partnerships enable us to seamlessly process cashless insurance claims, providing you with a hassle-free and efficient service.</p>
                    <p className='mb-5'>VehicleCare's Strategic alliance with leading insurance companies play a pivotal role in fulfilling our promise and cashless car insurance claims to our customers.</p>

                    <div className='ms-4 mb-5'>
                      <p className='fs-4 fw-bold'>What Makes our Collaboration with Insurance Companies so Special?</p>
                      <p className='mb-2'><b style={{color: "#ff0000"}}>1. </b>Network Of Trust</p>
                      <p className='mb-2'><b style={{color: "#ff0000"}}>2. </b>Streamlined Communication</p>
                      <p className='mb-2'><b style={{color: "#ff0000"}}>3. </b>Cashless Transaction Integration</p>
                      <p className='mb-2'><b style={{color: "#ff0000"}}>4. </b>Enhanced Service Option</p>
                      <p className='mb-2'><b style={{color: "#ff0000"}}>5. </b>Transparent Documentation</p>
                      <p className='mb-2'><b style={{color: "#ff0000"}}>6. </b>Keeping Updated with Best Industry Practices and Emerging Trends</p>
                    </div>

                    <p className='fs-1 fw-bold pt-4 mb-4 '>What is <span style={{color: "#ff0000"}}>DCX?</span></p>
                    <p className='mb-4'>DCX is VehicleCare's AI-enabled innovative service for cashless insurance claims, crafted especially for you. Whether it's an unexpected car accident, standalone damage or any other issue where you need to claim Insurance for your car, we are well-equipped to deal with every single case.</p>
                    <p className='mb-5'>VehicleCare DCX service shields you from the trouble of going through the painful process involved in the car insurance claim process. The specially curated DCX service by VehicleCare streamlines the whole process of car insurance claims.</p>

                    <div className='ms-4 mb-4'>
                      <p className='fs-4 fw-bold'>Benefits of VehicleCare DCX Service</p>
                      <p className='mb-2'><b style={{color: "#ff0000"}}>1. </b>Efficiency Through Digital Innovation: VehicleCare's Digital Claim Experience service is driven by digital innovation, where we leverage advanced AI technology and digital workshops resulting in a highly efficient and streamlined process, therefore, reducing assessment time and the claim process.</p>
                      <p className='mb-2'><b style={{color: "#ff0000"}}>2. </b>Multi-Brand Expertise: One of the key advantages of choosing VehicleCare is our expertise in servicing a wide range of vehicle brands. Our skilled technicians are well-versed in handling repairs for various makes and models, ensuring that your vehicle receives the specialized care it deserves.</p>
                      <p className='mb-2'><b style={{color: "#ff0000"}}>3. </b>Seamless Cashless Claims: VehicleCare has strong partnerships with leading insurance companies, which enable us to offer seamless cashless claims. This means you can enjoy the convenience of a hassle-free claims process without the need for out-of-pocket expenses, making the entire experience stress-free.</p>
                      <p className='mb-2'><b style={{color: "#ff0000"}}>4. </b>Transparent Communication and Cost Estimation: Transparency is one of the core values at VehicleCare. We ensure open and clear communication with customers throughout the insurance claims process. We provide detailed cost estimates before proceeding with any repairs, ensuring that you are informed and in control of the financial aspect of the claims.</p>
                      <p className='mb-2'><b style={{color: "#ff0000"}}>5. </b>Comprehensive End-to-End Solution: VehicleCare doesn't just stop at damage assessment; we provide a comprehensive end-to-end solution for car insurance claims. From the initial reporting of the incident to the final repair and delivery of your vehicle, our DCX service covers every aspect and guides you through the whole process, offering you a complete and worry-free experience.</p>
                    </div>

                  </div>
                </div>
            </div>



            {/* section-6 */}
            <div className="row section-6 justify-content-center py-5 bg-secondary-subtle">
              <div className="col-lg-9 col-md-11 col-sm-12">
                <div className="container">

                  <p className='fs-5 fw-bold mb-3' style={{color: "#ff0000"}}>// Frequently Asked Questions //</p>
                  <p className='fs-1 fw-bold mb-3'>Just Find Your Answers Below</p>

                  <div className="accordion py-2" id="accordionExample">

                    <div className="accordion-item my-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          How does the DCX service streamline insurance claims?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body p-4">
                          The DCX service utilizes advanced AI and digital workshops to expedite the entire claims process, from assessment to repairs.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item my-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Is VehicleCare affiliated with specific insurance companies?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body p-4">
                          Yes, we collaborate with a network of leading insurance companies to offer cashless insurance claims.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item my-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          How do I initiate a cashless insurance claim with VehicleCare?
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body p-4">
                          You can initiate a cashless insurance claim by contacting our dedicated claims assistance team, who will guide you through the entire process.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item my-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          What information do I need to provide for a cashless claim?
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body p-4">
                          You will need to provide your insurance details, policy number, a description of the incident, Photographs and videos of the damaged vehicle, driver's licence, FIR copy, A copy of the vehicle Registration Certificate, Medical report etc.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item my-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          Can I choose VehicleCare for insurance claims even if my policy is with a different company?
                        </button>
                      </h2>
                      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body p-4">
                          Absolutely. Our DCX service is designed to cater to customers with insurance policies from various providers.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item my-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                          How does AI play a role in the claims process?
                        </button>
                      </h2>
                      <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body p-4">
                          AI technology is used for accurate damage assessment, ensuring a precise and efficient claims process.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item my-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                          Are there any additional costs associated with the DCX service?
                        </button>
                      </h2>
                      <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body p-4">
                          Our goal is transparency. Any additional costs beyond the insurance coverage will be communicated to you before proceeding with repairs.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item my-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                          What types of vehicles does VehicleCare service for insurance claims?
                        </button>
                      </h2>
                      <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body p-4">
                          We cater to a wide range of vehicles of different make and models, and luxury cars like Audi, BMW, Mercedes, etc
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item my-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                          How long does it take to process a cashless insurance claim with VehicleCare?
                        </button>
                      </h2>
                      <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body p-4">
                          The processing time varies based on the complexity of the claim. However, our streamlined process aims for prompt resolution.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item my-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                          Is VehicleCare DCX Service available at all VehicleCare Workshops?
                        </button>
                      </h2>
                      <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body p-4">
                          Absolutely! VehicleCare DCX service is available at all our workshops across the country and our customer care helpline is open 24x7 for better assistance.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item my-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                          Can I track the status of my insurance claim online?
                        </button>
                      </h2>
                      <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body p-4">
                          Yes, our online portal allows you to track the status of your insurance claim in real time, providing you with updates at every stage of the process.
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>



            {/* section-7 */}

            <Reviews/>



            {/* section-8 */}

            <Vehiclecare/>



            {/* section-9 */}

            <Footer/>



    </div>

  )
}


export default Insurance_Claim
